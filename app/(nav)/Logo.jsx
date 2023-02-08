import Image from 'next/image';
import logo from '../../public/images/logo.png';

export default function NavLogo() {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center pl-1 gap-4">
          <span className="mt-2 hover:animate-pulse">
            <Image alt="Spotifind logo" height={150} src={logo} width={150} />
          </span>
        </div>
      </div>
      <div className="text-primary text-4xl font-bold self-center p-5 pb-5">
        SpotiFind
      </div>
    </>
  );
}
