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
const work = {
  zh: [
    {
      name: 'Web3 Investment Platform',
      position: '智能合约开发总监',
      url: '',
      startDate: '2021-01-01',
      endDate: '2025-07-01',
      summary: '主导 Web3 投资及金库管理平台的智能合约架构设计、开发与安全审计，带领团队完成从 0 到 1 的产品落地。核心项目包括去中心化预测市场DeFi协议、Investment DAO平台（已部署Base主网）、Treasury DAO金库系统。',
      highlights: [
        '设计并实现基于AMM的去中心化预测市场协议，集成NFT投注凭证、veToken治理、流动性挖矿等完整DeFi功能栈',
        '主导Investment DAO平台架构设计，采用Factory模式实现一键创建DAO，支持模块化升级与多资金池策略',
        '建立基于Foundry的自动化测试与部署流程，制定团队合约开发规范，确保代码质量与资金安全',
        '部署20+ The Graph Entity支持复杂链上数据查询，严格遵循CEI模式防重入攻击',
      ],
    },
    {
      name: '宝能集团',
      position: '开发经理',
      url: 'https://www.baoneng.com/',
      startDate: '2020-07-01',
      endDate: '2021-10-01',
      summary: '负责区块链中心技术团队管理，基于 Hyperledger Fabric 搭建集团级联盟链，服务于内部电商平台的积分管理系统。',
      highlights: [
        '基于Hyperledger Fabric搭建多节点联盟链，解决多方信任与数据对账问题',
        '负责编写核心Chaincode（Go语言），制定数据上链规范',
        '管理技术团队，推动区块链技术在集团内部的落地应用',
      ],
    },
    {
      name: '',
      position: '区块链工程师',
      url: 'https://bitconch.io/',
      startDate: '2018-09-01',
      endDate: '2020-04-01',
      summary: '参与基于Solana架构的高性能公链开发，优化共识节点网络，协助团队实现节点分布全球主要城市，测试环境下TPS突破10万+。',
      highlights: [
        '参与高性能公链研发，基于Solana架构优化共识节点网络',
        '协助团队实现节点全球分布，测试环境TPS突破10万+',
        '负责节点部署与运维，确保网络稳定性',
      ],
    },
  ],
  en: [
    {
      name: 'Web3 Investment Platform',
      position: 'Director of Smart Contract Development',
      url: '',
      startDate: '2021-01-01',
      endDate: '2025-07-01',
      summary: `Led smart contract architecture design, development, and security auditing for Web3 investment and treasury management platform, guiding the team through 0-to-1 product delivery.
      Core projects include Decentralized Prediction Market DeFi Protocol, Investment DAO Platform (deployed on Base Mainnet), and Treasury DAO System.`,
      highlights: [
        'Designed and implemented AMM-based decentralized prediction market protocol, integrating NFT betting vouchers, veToken governance, liquidity mining, and complete DeFi stack',
        'Led Investment DAO platform architecture design, adopted Factory Pattern for one-click DAO creation with modular upgrades and multi-pool strategies',
        'Established Foundry-based automated testing and deployment workflows, defined team contract development standards to ensure code quality and fund security',
        'Deployed 20+ The Graph entities for complex on-chain data queries, strictly following CEI pattern to prevent reentrancy attacks',
      ],
    },
    {
      name: 'Baoneng Group',
      position: 'Development Manager',
      url: 'https://www.baoneng.com/',
      startDate: '2020-07-01',
      endDate: '2021-10-01',
      summary: "Managed blockchain center technical team, built enterprise-level consortium blockchain based on Hyperledger Fabric, serving internal e-commerce platform's loyalty points management system.",
      highlights: [
        'Built multi-node consortium blockchain based on Hyperledger Fabric, solving multi-party trust and data reconciliation issues',
        'Developed core Chaincode (Go language) and defined data on-chain standards',
        'Managed technical team and promoted blockchain technology implementation within the group',
      ],
    },
    {
      name: '',
      position: 'Blockchain Engineer',
      url: 'https://bitconch.io/',
      startDate: '2018-09-01',
      endDate: '2020-04-01',
      summary: 'Participated in high-performance blockchain development based on Solana architecture, optimized consensus node network, assisted team in achieving global node distribution across major cities with testnet TPS exceeding 100,000+.',
      highlights: [
        'Participated in high-performance blockchain R&D, optimized consensus node network based on Solana architecture',
        'Assisted team in achieving global node distribution with testnet TPS exceeding 100,000+',
        'Responsible for node deployment and operations, ensuring network stability',
      ],
    },
  ],
};

export default work;
