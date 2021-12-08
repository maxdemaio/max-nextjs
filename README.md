[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmaxwelldemaio%2Fmax-nextjs)

my personal website powered by [Next.js](https://nextjs.org/)

--- 

- **Framework**: [Next.js](https://nextjs.org/)
- **Content**: `gray-matter`, `remark`, `remark-html`, `react-markdown`, and `react-syntax-highlighter`
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Images**: [Studio Ghibli free non-commercial images](https://www.ghibli.jp/info/013344/)
- **Testing**: [Cypress](https://dashboard.cypress.io/), [Cypress documentation](https://www.cypress.io/)

## Overview

- `pages/posts/*` - Static pre-rendered blog pages.
- `pages/videos/*` -  Incremental static regeneration. YouTube videos and stastistics like: total channel views, total subscribers, and total videos uploaded.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/maxwelldemaio/max-nextjs.git
$ cd max-nextjs
$ yarn install
$ yarn run dev
```

Create a `.env` file similar to [`.env.example`](./env.example)

## Inspirations and Resources

- Frontend inspired by the personal websites of: [Lee Robinson](https://github.com/leerob), [Adam Richardson](https://github.com/adamrichardson14), and [Anthony Fu](https://github.com/antfu).
- Development resources: [Adam's video on Next.js + the YouTubeAPI](https://www.youtube.com/watch?v=cyXQFjD_RAE), [Lee's video on his personal website](https://www.youtube.com/watch?v=xXQsF0q8KUg), and [Deploying a Next.js app on Vercel](https://www.youtube.com/watch?v=ben3vRAqvKE).

---

<samp>code is licensed under [MIT](./LICENSE), words and images are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)</samp>
