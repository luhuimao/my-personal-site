/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'DAO Square',
    position: 'Full Stack Developer',
    url: 'https://www.daosquare.fi/',
    startDate: '2021-10-01',
    summary: `DAOSquare Incubator is an open marketplace where people build and invest in global Venture DAOs easily and safely. 
    As a full stack  developer, I builded the venture dao protocol from 0 to 1, everyone can create their venture dao by one-click in low gas costed.
    By using this venture dao protocol, Investors deposit money into DAO to delegate Governors to manage. 
    Governors are responsible for identifying investment opportunities and making investment decisions.
    I also deployed a thegraph service to indexing data from venture dao protocol, the dapp fully relied on the thegraph service.
    `,
    highlights: [
      'Builded the venture-dao protocol from 0 to 1.',
      'Deployed the the-graph service indexing data from venture-dao contracts making dapp fully decentralized.',
    ],
  },
  {
    name: 'Baoneng Group',
    position: 'Software Develop Manager',
    url: 'https://www.baoneng.com/',
    startDate: '2020-04-01',
    endDate: '2021-07-01',
    summary: `The Baoneng Group is a Chinese property and financial services conglomerate 
    .`,
    highlights: [
      'Deployed a multi nodes fabric network on Baoneng data center.',
      'Researched fabric private chain.',
      'Builded a points system based on fabric.',
    ],
  },
  {
    name: 'BITCONCH PTE.LTD',
    position: 'Blockchain Engineer.',
    url: 'https://bitconch.io/',
    startDate: '2018-05-01',
    endDate: '2020-03-01',
    summary: `BitConch, an innovative blockchain and eco system for social applications
    .`,
    highlights: [
      'Researched solana blockchain network.',
      'Deployed a solana network with multi nodes located in different regions.',
    ],
  },
  {
    name: 'WICRESOFT',
    position: 'Software Engineer',
    url: 'https://www.wicresoftinternational.com/',
    startDate: '2015-09-01',
    endDate: '2018-04-01',
    summary: `Shanghai Wicresoft Co., Ltd. was founded in 2002 as Microsoft's first joint venture company in China.
    Over the past 20 years, Wicresoft remains committed to providing end-to-end, 
    one-stop digital transformation services for customers around the globe. 
    With extensive experience and knowledge in the high-tech, Internet, manufacturing, 
    automotive, finance, insurance, energy, public utilities and other industries, 
    Wicresoft has established long-term, steady and friendly cooperation with many corporate and government customers.`,
    highlights: [
      'Developed test scripts to testing microsoft IIS new features&&updates.',
      'on-call for microsoft Azure service.',
      'Analyzed error logs and reported to microsoft FTE.',
    ],
  },
  {
    name: 'POWERBRIDGE TECHNOLOGIES',
    position: 'Software Engineering Contractor',
    url: 'https://www.powerbridge.com/',
    startDate: '2014-04-01',
    endDate: '2015-08-01',
    summary: `Hongqiao Hi-Tech Group Co., Ltd. (Hongqiao Hi-Tech) was established in 1997 and is a wholly-owned subsidiary of a NASDAQ-listed company. 
    Headquartered in Singapore, Hongqiao Hi-Tech is a leading global diversified innovative technology company with 
    operations in East Asia, Central Asia, Southeast Asia, the Middle East, Europe, Oceania and North America.`,
    highlights: [
      'Developed a government management system for NANNING CUSTOMS DISTRICT P.R.CHINA.',
      'Maintained web applications.',
    ],
  },
];

export default work;
