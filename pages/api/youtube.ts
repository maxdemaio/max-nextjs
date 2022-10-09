import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

import googleAuth from "lib/google";
import { EYoutubeVideo } from "lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = await googleAuth.getClient();
  const youtube = google.youtube({
    auth,
    version: "v3",
  });

  // TODO: make parallel calls
  // partial responses from youtube channel api
  const channelStatsResponse = await youtube.channels.list({
    id: "UCXzTmvY30ODYPrpVImJEVBQ",
    part: "statistics",
    fields: "items(statistics(subscriberCount,viewCount,videoCount))",
  });

  // partial responses from youtube search api
  const searchIdSnippetResponse = await youtube.search.list({
    channelId: "UCXzTmvY30ODYPrpVImJEVBQ",
    part: "id,snippet",
    type: "video",
    fields: "items(id(videoId),snippet(title, publishedAt))",
    maxResults: 100,
  });

  const channel = channelStatsResponse.data.items[0];
  const searchIdsSnippets = searchIdSnippetResponse.data.items;

  const { subscriberCount, viewCount, videoCount } = channel.statistics;
  const videos: EYoutubeVideo[] = searchIdsSnippets
    .map((idSnip, index) => ({
      id: index,
      videoId: idSnip.id.videoId,
      title: idSnip.snippet.title,
      publishedAt: idSnip.snippet.publishedAt,
    }))
    .sort((a, b) =>
      Number(
        new Date(b.publishedAt).valueOf() - Number(new Date(a.publishedAt))
      )
    );

  // max age 1 day, re-validate every half day
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({
    subscriberCount,
    viewCount,
    videoCount,
    videos,
  });
}
