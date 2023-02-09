import Image from 'next/image';
export default function Profile() {
  return (
    <div className="">
      <Image
        alt="pfp"
        src="https://i.scdn.co/image/ab67616d0000b27309e4ac9a68d9ea5ef0ad9b05"
        width={200}
        height={200}
        className="rounded-2xl"
      />
      <div className="text-2xl">Grimes</div>
      <div>@GrimesGurlll</div>
    </div>
  );
}
