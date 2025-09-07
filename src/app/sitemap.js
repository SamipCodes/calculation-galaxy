export default function sitemap() {
  const baseUrl = "https://www.calculationgalaxy.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/bmi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/emi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/age`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // add other calculators here
  ];
}
