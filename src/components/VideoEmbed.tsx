"use client";

type Props = {
  url: string;       // full YouTube (or Vimeo) URL
  title?: string;    // accessible title
};

export default function VideoEmbed({ url, title = "video" }: Props) {
  // Privacy-friendlier YouTube params
  const isYouTube = /youtube\.com|youtu\.be/.test(url);
  const ytUrl =
    isYouTube && !url.includes("modestbranding")
      ? (url.includes("?") ? `${url}&rel=0&modestbranding=1`
                           : `${url}?rel=0&modestbranding=1`)
      : url;

  // Responsive 16:9 without extra plugins
  return (
    <div className="w-full rounded-2xl overflow-hidden border bg-black relative" style={{ paddingTop: "56.25%" }}>
      <iframe
        src={ytUrl}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}