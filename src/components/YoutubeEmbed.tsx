type YouTubeEmbedProps = {
  url: string;
};

export default function YoutubeEmbed({ url }: YouTubeEmbedProps) {
  const videoId = url.split("v=")[1]?.split("&")[0];

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-[20/9] flex justify-center my-10">
      <iframe
        className="w-[90%] h-full border-0 rounded-t-lg "
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Our company introduction video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
