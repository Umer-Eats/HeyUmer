# Umer Qureshi — portfolio

A Next.js site with seven pages: home, about, mission, projects, programs, awards and links.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

Everything on the site (projects, programs, talks, awards, skills, coursework, links) lives in
[`lib/data.js`](lib/data.js). Change it there and every page updates. The mission copy is in
[`app/mission/page.js`](app/mission/page.js).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository. The defaults are correct.
3. After the first deploy, add these environment variables under **Settings → Environment
   Variables**, then redeploy:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The final address, e.g. `https://umerqureshi.com`. Used for canonical URLs, the sitemap and social cards. Without it the Vercel production URL is used. |
| `GOOGLE_SITE_VERIFICATION` | The verification code from Google Search Console (see below). |

## Get it on Google

The site already ships with per-page titles and descriptions, canonical URLs, `sitemap.xml`,
`robots.txt`, a social share image, and `Person` structured data so Google can connect the site
to the name "Umer Qureshi". Two manual steps make it show up faster:

1. Open [Google Search Console](https://search.google.com/search-console), add the site as a
   **URL prefix** property, pick the **HTML tag** method, and copy the `content` value into the
   `GOOGLE_SITE_VERIFICATION` variable on Vercel. Redeploy, then press **Verify**.
2. In Search Console, open **Sitemaps** and submit `sitemap.xml`.

Linking to the site from the GitHub profile, and from korah.app and coffee-house.app if possible,
helps Google trust it as the official page for the name.

## Fonts

Headings use Gaegu and body text uses Outfit, both open-licensed Google Fonts that `next/font`
downloads and self-hosts at build time.
