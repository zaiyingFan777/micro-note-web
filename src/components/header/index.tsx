import { Link } from 'umi';
import { Button } from 'antd';
import logo from '@/assets/images/logo.png';
import styles from './index.less';

const Header = () => {
  return (
    <header>
      <div className={styles.headerInside}>
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <nav>
          <Link to="/">flomo 101</Link>
          <Link to="/download">下载</Link>
          <Link to="/vip">会员</Link>
          <Link to="/support">在线支持</Link>
          <a>|</a>
          <Link to="/support">登录</Link>
          <Button style={{ background: '#30CF79', color: '#FFF' }}>
            免费注册
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
