import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ssgpt6.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/media`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/webinar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/releases`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date(),
    },
  ];
}