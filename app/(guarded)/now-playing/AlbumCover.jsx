import Image from 'next/image';

export default function AlbumCover({ src, classNames }) {
  return (
    <div className={`aspect-square w-[200px] relative ${classNames}`}>
      <Image
        alt="album-cover"
        className="rounded-3xl object-contain cursor-pointer transition duration-200 ease-out hover:scale-105"
        fill
        src={src}
      />
    </div>
  );
}