import styles from '@/styles/Home.module.css';

export default function LandingTransition({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <div className={`bg-main text-primary flex-1 ${styles.main}`}>
        {children}
      </div>
    </div>
  );
}
