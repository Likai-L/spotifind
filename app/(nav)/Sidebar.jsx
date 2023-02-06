import NavLogo from './Logo';
import NavItems from './(icons)/index';

export default function Sidebar() {
  return (
    <div className="h-full px-4 pt-8 pb-4 bg-light flex justify-between flex-col w-80 bg-nav">
      <div className="flex flex-col">
        <NavLogo />

        <div className="flex flex-col items-start mt-4">
          <NavItems />
        </div>
      </div>

      {/* TODO: Finish this thing */}
      <div className="text-primary">Logout</div>
    </div>
  );
}
