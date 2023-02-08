import '@/styles/global.css';
import styles from '@/styles/Home.module.css';
import Sidebar from './(nav)/Sidebar';
import { GlobalContextProvider } from './(context)';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="h-screen flex flex-row justify-start">
          <Sidebar />
          {/* Main content will be inside children here */}
          <div className={`bg-main text-primary flex-1 ${styles.main}`}>
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
