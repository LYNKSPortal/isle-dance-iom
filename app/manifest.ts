import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Isle Dance",
    short_name: "Isle Dance",
    description:
      "Isle Dance – Isle of Man's vibrant community dance brand.",
    start_url: "/",
    display: "standalone",
    background_color: "#e93f0b",
    theme_color: "#e93f0b",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
