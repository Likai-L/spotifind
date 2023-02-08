import Image from 'next/image';

export default function Usercard() {
  return (
    <div className="flex max-w-[250px] min-w-[10vw] w-[15vw] m-5 flex-col bg-primary p-2 h-2/3 min-h-[15rem] rounded-lg ">
      <Image
        alt="cute cat"
        className="rounded-lg block m-auto"
        height="175"
        src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg"
        width="175"
      />
      <h2 className="text-[1vw] text-center cursor-default">Elon Musk</h2>
      <h2 className="text-[1vw] text-center cursor-default">5.6km away</h2>
      <button type="submit">
        <h2 className="text-[1vw] onClick={sendDmClick}">Send DM</h2>
      </button>
      <button type="submit">
        <h2 className="text-[1vw] onClick={viewOnMapClick}">View On Map</h2>
      </button>
    </div>
  );
}
