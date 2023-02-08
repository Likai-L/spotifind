import NavLogo from './Logo';
import NavItems from './(icons)/index';

export default function Sidebar() {
  return (
    <div className="h-full px-4 pt-8 pb-4 bg-light flex justify-between flex-col w-72 bg-nav">
      <div className="flex flex-col">
        <NavLogo />

        <div className="flex flex-col items-start ml-8 mt-6 fade-in-left">
          <NavItems />
        </div>
      </div>

      {/* TODO: Finish this thing */}
      <div className="text-primary">Logout</div>
    </div>
  );
}
