import '@/styles/global.css';
import Sidebar from './(nav)/Sidebar';

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
          <div className="bg-main text-primary flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
