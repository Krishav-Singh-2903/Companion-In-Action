import Image from "next/image";

export type PhotoLibraryItem = {
  src: string;
  alt: string;
  position?: string;
};

const photos: PhotoLibraryItem[] = [
  { src: "/assets/team/team-photo-01.jpg", alt: "Companions in Action community photo", position: "50% 42%" },
  { src: "/assets/team/team-photo-02.jpg", alt: "Companions in Action community photo", position: "50% 42%" },
  { src: "/assets/team/team-photo-03.jpg", alt: "Companions in Action community photo", position: "50% 48%" },
  { src: "/assets/team/team-photo-04.jpg", alt: "Companions in Action community photo", position: "50% 48%" },
  { src: "/assets/team/team-photo-06.jpg", alt: "Companions in Action community photo", position: "50% 45%" },
  { src: "/assets/team/team-photo-07.jpg", alt: "Companions in Action community photo", position: "50% 45%" }
];

function PhotoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div aria-hidden={duplicate} className="flex shrink-0 gap-3 sm:gap-4">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="relative aspect-[3/2] w-[42vw] max-w-40 shrink-0 overflow-hidden sm:w-[20vw] sm:max-w-56 lg:w-[17vw] lg:max-w-60"
        >
          <Image
            src={photo.src}
            alt={duplicate ? "" : photo.alt}
            fill
            sizes="(min-width: 1024px) 240px, (min-width: 640px) 224px, 42vw"
            className="object-cover"
            style={{ objectPosition: photo.position }}
          />
        </figure>
      ))}
    </div>
  );
}

export function HomePhotoLibrary() {
  return (
    <section
      aria-label="Companions in Action photo library"
      className="overflow-hidden bg-emerald-950 py-4 sm:py-5"
    >
      <div className="photo-library-mask">
        <div className="photo-library-track">
          <PhotoSet />
          <PhotoSet duplicate />
        </div>
      </div>
    </section>
  );
}
