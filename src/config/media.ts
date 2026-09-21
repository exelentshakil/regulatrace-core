/**
 * Auto-generated Media Assets from Pexels API
 * Project: regulatrace-core
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "1432680",
    "url": "https://images.pexels.com/photos/1432680/pexels-photo-1432680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Detailed view of a CPU socket on a green motherboard, showcasing microprocessor technology.",
    "avg_color": "#6B6E72"
},
  editorialPhotos: [
    {
    "id": "19226353",
    "url": "https://images.pexels.com/photos/19226353/pexels-photo-19226353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "An individual connecting a cable into a network server port indoors, focusing on technology setup.",
    "avg_color": "#858B7D"
},
    {
    "id": "19226352",
    "url": "https://images.pexels.com/photos/19226352/pexels-photo-19226352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Close-up of a hand adjusting network equipment in a data center.",
    "avg_color": "#BBB1A7"
},
    {
    "id": "19226354",
    "url": "https://images.pexels.com/photos/19226354/pexels-photo-19226354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A technician inserts a circuit board into a server rack, illustrating technology and connectivity.",
    "avg_color": "#8E9186"
}
  ],
  ambientVideo: {
    "id": "33151912",
    "videoUrl": "https://videos.pexels.com/video-files/33151912/14129079_640_360_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/33151912/pexels-photo-33151912.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 640,
    "height": 360
}
};
