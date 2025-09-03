"use client";

type Props = {
  src: string;            // e.g. "/audio/gravity-conversation.mp3" or https URL
  title?: string;         // accessible label and heading
  download?: boolean;     // show a download link
  transcript?: React.ReactNode; // optional transcript JSX
};

export default function AudioPlayer({
  src,
  title = "audio",
  download = true,
  transcript,
}: Props) {
  return (
    <div className="p-4 border rounded-2xl bg-white space-y-3">
      <div className="font-semibold">{title}</div>
      <audio
        controls
        preload="metadata"
        aria-label={title}
        className="w-full"
      >
        {/* MP3 covers almost all browsers; add WebM/OGG sources if you have them */}
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {download && (
        <div>
          <a
            href={src}
            download
            className="text-sm underline hover:no-underline"
          >
            Download audio
          </a>
        </div>
      )}

      {transcript && (
        <details className="text-sm text-neutral-700">
          <summary className="cursor-pointer select-none">
            Transcript
          </summary>
          <div className="mt-2 space-y-2">{transcript}</div>
        </details>
      )}
    </div>
  );
}