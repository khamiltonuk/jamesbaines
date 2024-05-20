import Image from "next/image";

export default function Thumbnail({ thumbnail }) {
  return (
    <Image
      alt={thumbnail.title}
      src={`${thumbnail.url}?fit=fill&w=491&h=276`}
      width="491"
      height="276"
    />
  );
}
