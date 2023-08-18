import { getRSS } from "@/lib/actions/profile/get-rss";
import dayjs from "dayjs";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const userId = params.id.split(".")[0];
  const rss = await getRSS(userId);
  const updates = rss.updates
    .map(
      (update) => `<item>
    <title>${rss.username}: ${update.text}</title>
    <description>${rss.username}: ${update.text}</description>
    <pubDate>${dayjs(update.createdAt).format(
      "ddd, DD MMM YYYY HH:mm:ss ZZ"
    )}</pubDate>
    <guid>http://twitter.com/${rss.username}/statuses/${update.id}</guid>
    <link>http://twitter.com/${rss.username}/statuses/${update.id}</link>
  </item>
  `
    )
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Twitter / ${rss.username}</title>
    <link>http://twitter.com/${rss.username}</link>
    <description>Twitter updates from ${rss.name} / ${rss.username}.</description>
    <language>en-us</language>
    <ttl>40</ttl>
  ${updates}</channel>
</rss>`);
}
