import React from 'react';

interface VideoLink {
  id: string;
  title: string;
  description: string;
}

interface VideoGalleryProps {
  videos: VideoLink[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-neutral-500 mb-2">{video.title}</h3>
            <p className="text-neutral-400 text-sm">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;