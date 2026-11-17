export default function Video({ videoId }) {
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
        border: "none",
      }}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
