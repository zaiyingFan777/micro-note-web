import styles from './index.less';
import { footerData, IFooterConfig } from '@/constant';
import logo from '@/assets/images/logo.png';

function FooterLink({ data }: { data: IFooterConfig }) {
  return (
    <div className={styles.footerNav}>
      <div className={styles.footerNavTitle}>{data.title}</div>
      {data.link.map((item, index) => {
        return (
          <a href={item.href} key={index}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className={styles.footerInside}>
        <div className={styles.footerLogo}>
          <img className="logo" src={logo} alt="" />
        </div>
        {footerData.map((item, index) => {
          return <FooterLink data={item} key={index} />;
        })}
      </div>
    </footer>
  );
}

export default Footer;
