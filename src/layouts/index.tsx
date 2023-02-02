import { Outlet } from 'umi';
import styles from './index.less';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
