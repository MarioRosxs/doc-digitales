
type VideoPlayerProps = {
  src: string,
  title: string
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="w-60 sm:w-3/5 aspect-video">
      <iframe
        className="w-full h-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-presentation"
        allowFullScreen
      />
    </div>
  )
}
