import { Link } from 'umi';
import logo from '@/assets/images/logo.png';
import styles from './index.module.less';

const Header = () => {
  return (
    <header>
      <div className={styles.headerInside}>
        <div>
          <img className={styles.logo} src={logo} alt="" />
        </div>
        <nav>
          <Link to="/">flomo 101</Link>
          <Link to="/download">下载</Link>
          <Link to="/vip">会员</Link>
          <Link to="/support">在线支持</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
