import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = {
  zh: [
    {
      label: '本仓库在GitHub上的星标数',
      key: 'stargazers_count',
      link: 'https://github.com/mldangelo/personal-site/stargazers',
    },
    {
      label: '关注本仓库的人数',
      key: 'subscribers_count',
      link: 'https://github.com/mldangelo/personal-site/stargazers',
    },
    {
      label: 'Fork数量',
      key: 'forks',
      link: 'https://github.com/mldangelo/personal-site/network',
    },
    {
      label: '勺子数量',
      value: '0',
    },
    {
      label: 'Linter警告数量',
      value: '0', // enforced via github workflow
    },
    {
      label: 'GitHub开放问题',
      key: 'open_issues_count',
      link: 'https://github.com/mldangelo/personal-site/issues',
    },
    {
      label: '最后更新时间',
      key: 'pushed_at',
      link: 'https://github.com/mldangelo/personal-site/commits',
      format: (x) => dayjs(x).format('YYYY年MM月DD日'),
    },
    {
      label: '驱动本网站的Javascript代码行数',
      value: '2150',
      link: 'https://github.com/mldangelo/personal-site/graphs/contributors',
    },
  ],
  en: [
    {
      label: 'Stars this repository has on github',
      key: 'stargazers_count',
      link: 'https://github.com/mldangelo/personal-site/stargazers',
    },
    {
      label: 'Number of people watching this repository',
      key: 'subscribers_count',
      link: 'https://github.com/mldangelo/personal-site/stargazers',
    },
    {
      label: 'Number of forks',
      key: 'forks',
      link: 'https://github.com/mldangelo/personal-site/network',
    },
    {
      label: 'Number of spoons',
      value: '0',
    },
    {
      label: 'Number of linter warnings',
      value: '0', // enforced via github workflow
    },
    {
      label: 'Open github issues',
      key: 'open_issues_count',
      link: 'https://github.com/mldangelo/personal-site/issues',
    },
    {
      label: 'Last updated at',
      key: 'pushed_at',
      link: 'https://github.com/mldangelo/personal-site/commits',
      format: (x) => dayjs(x).format('MMMM DD, YYYY'),
    },
    {
      // TODO update this with a pre-commit hook
      /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
      xargs -I file cat file | wc -l */
      label: 'Lines of Javascript powering this website',
      value: '2150',
      link: 'https://github.com/mldangelo/personal-site/graphs/contributors',
    },
  ],
};

export default data;
