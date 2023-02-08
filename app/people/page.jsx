import Map from 'app/(map)/Map';
import styles from '@/styles/Home.module.css';

export default function People() {
  return (
    <div className="w-full h-full flex-col space-y-8 overflow-hidden">
      <h1 className="text-2xl font-primary font-semibold ml-10">
        Find people interested in:
      </h1>
      <div className="container m-auto w-4/5 h-1/5 rounded-3xl content-center bg-secondary" />
      <footer className="container m-auto items-center bg-secondary w-4/5 h-3/5 max-h-max rounded-3xl content-center">
        <div>
          <h1 className="text-3xl p-5">x user/s found</h1>
        </div>
        <Map />
      </footer>
    </div>
  );
}
