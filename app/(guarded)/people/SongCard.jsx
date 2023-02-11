import Image from 'next/image';

export default function SongCard() {
  return (
    <div className="flex w-full h-full m-auto">
      <div className="sticky max-w-1/5 max-h-5/5 aspect-square m-4 ml-6">
        <Image
          alt="cute cat"
          className="rounded-2xl"
          fill
          src="https://thumbs.dreamstime.com/z/dog-cat-above-white-banner-5900263.jpg"
        />
      </div>
      <div className="flex flex-col m-4">
        <h1 className="mt-1 ml-[2vh] text-[2.3vh] cursor-default font-semibold">
          Cat Song
        </h1>
        <h1 className="mt-1 ml-[2vh] text-[2.3vh] cursor-default font-semibold">
          Mittens
        </h1>
        <h1 className="mt-1 ml-[2vh] text-[2.3vh] cursor-default font-semibold">
          Mrrreowww
        </h1>
      </div>
    </div>
  );
}
