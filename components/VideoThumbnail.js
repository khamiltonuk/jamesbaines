import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Rewrite a Vimeo thumbnail URL to request a specific size.
 * Vimeo CDN URLs end with _WIDTHxHEIGHT — the suffix varies
 * per video, so we use a regex instead of a hardcoded replace.
 */
function getVimeoThumbnailUrl(url, width, height) {
  return url.replace(/_\d+x\d+/, `_${width}x${height}`);
}

export default function VideoThumbnail({ work, thumbnailData }) {
  const { videoId } = work;
  const [video, setVideo] = useState(thumbnailData || null);

  useEffect(() => {
    // Skip fetch if we already have pre-fetched data from getStaticProps
    if (video) return;

    fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`,
      {
        method: "get",
        cache: "no-cache",
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      })
      .catch((err) => {
        console.error("Failed to fetch Vimeo thumbnail:", err);
      });
  }, [videoId, video]);

  if (!video) {
    return null;
  }

  const { title, thumbnail_url } = video;

  return (
    <Image
      src={getVimeoThumbnailUrl(thumbnail_url, 491, 276)}
      alt={title}
      width={491}
      height={276}
    />
  );
}
