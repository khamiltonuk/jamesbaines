import Image from "next/image";
import { useState, useEffect } from "react";

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

  const { title, thumbnail_url, thumbnail_width, thumbnail_height } = video;

  return (
    <Image
      src={thumbnail_url.replace("_295x166", "_590x332")}
      alt={title}
      width={thumbnail_width * 2}
      height={thumbnail_height * 2}
    />
  );
}
