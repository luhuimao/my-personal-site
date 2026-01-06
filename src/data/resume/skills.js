// Category translations for skills
export const categoryTranslations = {
  zh: {
    All: '全部',
    'Web Development': 'Web开发',
    'Languages': '编程语言',
    'Javascript': 'Javascript',
    'Tools': '工具',
    'Databases': '数据库',
    'Python': 'Python',
    'Data Engineering': '数据工程',
    'ML Engineering': '机器学习工程',
    'Data Science': '数据科学',
    'Solidity': 'Solidity',
    'Smart Contract': '智能合约',
  },
  en: {
    All: 'All',
    'Web Development': 'Web Development',
    'Languages': 'Languages',
    'Javascript': 'Javascript',
    'Tools': 'Tools',
    'Databases': 'Databases',
    'Python': 'Python',
    'Data Engineering': 'Data Engineering',
    'ML Engineering': 'ML Engineering',
    'Data Science': 'Data Science',
    'Solidity': 'Solidity',
    'Smart Contract': 'Smart Contract',
  },
};

const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'hardhat',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Solidity',
    competency: 5,
    category: ['Languages', 'Solidity', 'Smart Contract'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
