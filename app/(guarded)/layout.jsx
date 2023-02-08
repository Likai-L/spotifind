import Sidebar from 'app/(nav)/Sidebar';
import styles from '@/styles/Home.module.css';

export default function DashboardLayout({
  children // will be a page or nested layout
}) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      {/* Main content will be inside children here */}
      <div className={`bg-main text-primary flex-1 ${styles.main}`}>
        {children}
      </div>
    </div>
  );
}
