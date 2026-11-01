import type { APIRoute } from "astro";

// Every page under src/pages ends up in the sitemap automatically
const pages = import.meta.glob("./**/*.astro");

export const GET: APIRoute = ({ site }) => {
    const urls = Object.keys(pages)
        .map((path) => path.replace(/^\.\//, "").replace(/\.astro$/, "").replace(/(^|\/)index$/, ""))
        .filter((path) => path !== "404")
        .map((path) => new URL(path === "" ? "/" : `/${path}/`, site).href)
        .sort();

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `    <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

    return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
