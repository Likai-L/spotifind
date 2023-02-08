import Image from 'next/image';

export default function SongCard() {
  return (
    <div className="flex w-full h-full rounded-3xl">
      <div className="sticky max-w-1/5 max-h-4/5 aspect-square m-1">
        <Image
          alt="cute cat"
          className="rounded-lg block m-auto"
          fill
          src="https://thumbs.dreamstime.com/z/dog-cat-above-white-banner-5900263.jpg"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="mt-1 ml-[2vh] text-[2.3vh] cursor-default">Cat Song</h1>
        <h1 className="mt-1 ml-[2vh] text-[2.3vh] cursor-default">Mittens</h1>
        <h1 className="mt-1 ml-[2vh] text-[2.3vh] cursor-default">Mrrreowww</h1>
      </div>
    </div>
  );
}
