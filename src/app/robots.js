export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://praveen-phulwar.netlify.app/sitemap.xml",
  };
}