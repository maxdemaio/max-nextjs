import DateComp from "./DateComp";

export default function VidDisplayListItem({ vid }) {
    return (
        <div className="mb-4">
            <a href={"https://www.youtube.com/watch?v=" + vid.id.videoId}>Link</a>
            <h2 className="text-xl text-white">{vid.snippet.title}</h2>
            <p><DateComp dateString={vid.snippet.publishedAt} /></p>
            {/* doesn't work because quotes around it {vid.snippet.description} */}
            <p>This page is a work in progress! Eventually it will make an API call to YouTube and fetch all my videos. The data will be
                represented as an unordered list (HTML element) where each item in the list will be one of my YouTube videos.</p>
        </div>
    );
}