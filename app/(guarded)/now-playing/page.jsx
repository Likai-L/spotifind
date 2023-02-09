import styles from '@/styles/Home.module.css';
import Profile from './Profile';

export default function Me() {
  return (
    <div className={` ${styles.main}`}>
      <Profile />
    </div>
  );
}
