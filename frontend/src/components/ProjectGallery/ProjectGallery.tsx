import Icons from '@icons';
import { useEffect, useRef, useState } from 'react';

import Ui from '@/ui';

import type { ProjectGalleryProps } from './ProjectGallery.types';

const ProjectGallery = ({ images, className = '' }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  const closeGallery = (returnIndex: number) => {
    setActiveIndex(null);
    triggerRefs.current[returnIndex]?.focus();
  };

  return (
    <div className={className}>
      <ul role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[index] = el;
              }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Bild vergrößern: ${image.alt}`}
              className="block w-full overflow-hidden rounded-sm"
            >
              <Ui.Card hover className="overflow-hidden p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Ui.Card>
            </button>
          </li>
        ))}
      </ul>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].alt}
          className="fixed inset-0 z-100 flex items-center justify-center bg-space-950/90 p-6 backdrop-blur-sm"
          onClick={() => closeGallery(activeIndex)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeGallery(activeIndex);
            }}
            aria-label="Schließen"
            className="glass-panel absolute top-6 right-6 flex size-11 items-center justify-center rounded-full text-star-50"
          >
            <Icons.X size="sm" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex - 1 + images.length) % images.length);
            }}
            aria-label="Vorheriges Bild"
            className="glass-panel absolute left-6 flex size-11 items-center justify-center rounded-full text-star-50"
          >
            <Icons.ChevronLeft size="sm" />
          </button>

          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-h-[80vh] max-w-6xl rounded-sm object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % images.length);
            }}
            aria-label="Nächstes Bild"
            className="glass-panel absolute right-6 flex size-11 items-center justify-center rounded-full text-star-50"
          >
            <Icons.ChevronRight size="sm" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
