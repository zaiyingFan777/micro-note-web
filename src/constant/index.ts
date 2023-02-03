interface IFooterLinkConfig {
  label: string;
  href: string;
}

export interface IFooterConfig {
  title: string;
  link: IFooterLinkConfig[];
}

export const footerData: IFooterConfig[] = [
  {
    title: '产品',
    link: [
      { label: '桌面端', href: '' },
      { label: '手机端', href: '' },
      { label: '网页插件', href: '' },
      { label: 'Notion同步', href: '' },
      { label: '隐私协议', href: '' },
      { label: '用户协议', href: '' },
    ],
  },
  {
    title: '资源',
    link: [
      { label: 'flomo 101', href: '' },
      { label: '快速上手', href: '' },
      { label: '常见手法', href: '' },
      { label: '思维方式', href: '' },
      { label: 'API文档', href: '' },
    ],
  },
  {
    title: '联系我们',
    link: [
      { label: 'Email', href: '' },
      { label: '在线支持', href: '' },
      { label: '微博', href: '' },
      { label: '即刻', href: '' },
      { label: '小红书', href: '' },
    ],
  },
  {
    title: '团队',
    link: [
      { label: '关于我们', href: '' },
      { label: '产品起源', href: '' },
      { label: '上海仙蒂网络科技有限公司', href: '' },
      { label: '沪ICP备17043019号-3', href: '' },
      { label: '沪公安31010102007209', href: '' },
    ],
  },
];
