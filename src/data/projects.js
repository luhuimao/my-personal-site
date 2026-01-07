// Real projects showcasing blockchain and system development expertise
const data = {
  zh: [
    {
      title: '去中心化预测市场 DeFi 协议',
      subtitle: 'AMM 预测市场 + NFT 投注凭证 + veToken 治理',
      link: 'https://github.com/luhuimao/noodleswap',
      image: '/images/projects/prediction-market.jpg',
      date: '2024-01-01',
      desc:
        '从0到1设计并实现基于AMM的去中心化预测市场协议，集成多选项预测、NFT投注凭证、流动性挖矿、veToken治理及投票仲裁机制。'
        + '采用Factory模式支持无许可创建市场，通过Library模块化降低Gas消耗，实现完整的博弈经济模型。'
        + '部署20+ The Graph Entity支持复杂查询，严格遵循CEI模式防重入攻击。',
    },
    {
      title: 'Investment DAO 管理平台',
      subtitle: '已部署 Base 主网 | 工厂模式一键创建 DAO',
      link: 'https://github.com/luhuimao/venture-dao',
      image: '/images/projects/investment-dao.jpg',
      date: '2023-06-01',
      desc:
        '主导设计基于工厂模式的DAO创建系统，支持用户一键部署独立投资DAO。'
        + '采用模块化与Proxy升级设计，实现单/多资金池策略灵活切换。'
        + '集成ERC20/721/1155多种准入机制，引入OpenZeppelin库确保资金安全，建立基于Foundry的自动化测试流程。',
    },
    {
      title: 'Treasury DAO 金库管理系统',
      subtitle: '自动化资金归集与分配 | CI/CD 工程化实践',
      link: 'https://github.com/luhuimao/treasury-dao',
      image: '/images/projects/treasury-dao.jpg',
      date: '2023-09-01',
      desc:
        '开发用于管理投资DAO手续费与管理费的金库系统，实现自动化的资金归集与分配逻辑。'
        + '搭建完整的CI/CD流程，统一团队合约开发规范，确保代码质量与部署安全。',
    },
    {
      title: '高性能交易撮合引擎',
      subtitle: 'Go + gRPC | 10,000+ TPS | P99 延迟 < 50ms',
      link: 'https://github.com/luhuimao/orderbook-matching-engine',
      image: '/images/projects/matching-engine.jpg',
      date: '2022-03-01',
      desc:
        '采用DDD分层架构设计高性能订单撮合引擎，使用自定义堆实现O(log n)时间复杂度的价格-时间优先算法。'
        + '通过WAL + Snapshot机制确保数据持久化，故障恢复时间<1s。'
        + '同时支持HTTP和gRPC双协议，满足不同场景需求，支持10,000+ TPS，P99延迟<50ms。',
    },
    {
      title: '高频量化交易系统',
      subtitle: 'Python Asyncio | 零拷贝通信 | TCP 连接复用率 >95%',
      link: 'https://github.com/luhuimao/quanting_trading',
      image: '/images/projects/quant-trading.jpg',
      date: '2021-05-01',
      desc:
        '构建4层高频交易架构（采集、决策、风控、执行），利用Numpy内存映射实现进程间零拷贝通信。'
        + '全链路采用Python asyncio + uvloop架构，优化TCP连接池管理实现连接复用率>95%，大幅降低交易所握手延迟。',
    },
  ],
  en: [
    {
      title: 'Decentralized Prediction Market DeFi Protocol',
      subtitle: 'AMM Prediction Market + NFT Betting Vouchers + veToken Governance',
      link: 'https://github.com/luhuimao/noodleswap',
      image: '/images/projects/prediction-market.jpg',
      date: '2024-01-01',
      desc:
        'Designed and implemented an AMM-based decentralized prediction market protocol from scratch, integrating multi-option prediction, NFT betting vouchers, liquidity mining, veToken governance, and voting arbitration mechanisms. '
        + 'Adopted Factory Pattern for permissionless market creation, modularized with Libraries to reduce gas costs, and implemented complete game-theoretic economic models. '
        + 'Deployed 20+ The Graph entities for complex queries, strictly following CEI pattern to prevent reentrancy attacks.',
    },
    {
      title: 'Investment DAO Platform',
      subtitle: 'Deployed on Base Mainnet | One-Click DAO Creation via Factory Pattern',
      link: 'https://github.com/luhuimao/venture-dao',
      image: '/images/projects/investment-dao.jpg',
      date: '2023-06-01',
      desc:
        'Led the design of a Factory Pattern-based DAO creation system, enabling users to deploy independent investment DAOs with one click. '
        + 'Utilized modular design with Proxy upgrades for flexible single/multi-pool strategy switching. '
        + 'Integrated ERC20/721/1155 access mechanisms, employed OpenZeppelin libraries for fund security, and established Foundry-based automated testing workflows.',
    },
    {
      title: 'Treasury DAO Management System',
      subtitle: 'Automated Fund Aggregation & Distribution | CI/CD Best Practices',
      link: 'https://github.com/luhuimao/treasury-dao',
      image: '/images/projects/treasury-dao.jpg',
      date: '2023-09-01',
      desc:
        'Developed a treasury system for managing Investment DAO fees and management fees, implementing automated fund aggregation and distribution logic. '
        + 'Built complete CI/CD pipelines and unified team contract development standards to ensure code quality and deployment security.',
    },
    {
      title: 'High-Performance Trading Matching Engine',
      subtitle: 'Go + gRPC | 10,000+ TPS | P99 Latency < 50ms',
      link: 'https://github.com/luhuimao/orderbook-matching-engine',
      image: '/images/projects/matching-engine.jpg',
      date: '2022-03-01',
      desc:
        'Designed a high-performance order matching engine using DDD layered architecture, implementing price-time priority algorithm with custom heap structures achieving O(log n) complexity. '
        + 'Ensured data persistence through WAL + Snapshot mechanisms with fault recovery time <1s. '
        + 'Supported dual protocols (HTTP and gRPC) for different scenarios, achieving 10,000+ TPS with P99 latency <50ms.',
    },
    {
      title: 'High-Frequency Quantitative Trading System',
      subtitle: 'Python Asyncio | Zero-Copy IPC | TCP Connection Reuse Rate >95%',
      link: 'https://github.com/luhuimao/quanting_trading',
      image: '/images/projects/quant-trading.jpg',
      date: '2021-05-01',
      desc:
        'Built a 4-layer high-frequency trading architecture (collection, decision, risk control, execution), utilizing Numpy memory mapping for zero-copy inter-process communication. '
        + 'Full-stack Python asyncio + uvloop architecture with optimized TCP connection pooling achieving >95% connection reuse rate, significantly reducing exchange handshake latency.',
    },
  ],
};

export default data;
