const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const allLinks = [
    {
      url: "https://arunpatel.vercel.app/",
      lastModified: new Date(),
      //   changeFrequency: "yearly",
      //   priority: 1,
    },
    {
      url: "https://arunpatel.vercel.app/copyinsert",
      lastModified: new Date(),
      //   changeFrequency: "monthly",
      //   priority: 0.8,
    },
    {
      url: "https://www.linkedin.com/in/arunpatel02/",
      lastModified: new Date(),
      //   changeFrequency: "weekly",
      //   priority: 0.5,
    },
    {
      url: "https://github.com/ArunPatel02",
      lastModified: new Date(),
      //   changeFrequency: "weekly",
      //   priority: 0.5,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allLinks
          .map((link) => {
            return `
            <url>
                <loc>${link.url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
            </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  // setting header as xml
  res.setHeader("Content-Type", "text/xml");

  // sending all sitemap in response object
  res.write(sitemap);

  // ending response
  res.end();

  // no need to return anything as we alreadying
  // required data from res.write()
  return {
    props: {},
  };
};

export default Sitemap;
