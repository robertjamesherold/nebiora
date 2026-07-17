type ProjectGalleryImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  images: ProjectGalleryImage[];
  className?: string;
};

export type { ProjectGalleryImage, ProjectGalleryProps };
