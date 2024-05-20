import { useState, useEffect } from "react";

export default function Video({ videoId }) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    window
      .fetch(
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
      });
  }, [videoId]);

  if (!video) {
    return null;
  }

  const { title, thumbnail_url, thumbnail_width, thumbnail_height } = video;

  return (
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?h=afa1c40c1d&color=8a5cf6`}
      title="showreel"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
