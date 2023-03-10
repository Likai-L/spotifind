// Import FontAwesome.
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import Sidebar from 'app/(nav)/Sidebar';
import styles from '@/styles/Home.module.css';
import GuardPage from './(guardPage)/GuardPage';

config.autoAddCss = false;

export default function GuardedLayout({
  children // will be a page or nested layout
}) {
  return (
    <GuardPage>
      <div className="h-screen w-screen flex flex-row justify-start fade-in-left overflow-hidden cursor-default">
        <Sidebar />
        {/* Main content will be inside children here */}
        <div className={`bg-main text-primary flex-1 ${styles.main}`}>
          {children}
        </div>
      </div>
    </GuardPage>
  );
}
