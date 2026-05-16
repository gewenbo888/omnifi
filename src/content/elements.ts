export type Lang = "en" | "zh";

export interface FiElement {
  key: string;
  symbol: string;
  number: string;
  name: { en: string; zh: string };
  dimension: { en: string; zh: string };
  unit: { en: string; zh: string };
  color: string;
  glyph: string;
  tagline: { en: string; zh: string };
  definition: { en: string; zh: string };
  mechanics: { en: string; zh: string };
  primitives: { en: string[]; zh: string[] };
  history: { year: string; en: string; zh: string }[];
  state: { en: string; zh: string };
  future: { en: string; zh: string };
  projects: string[];
  thesis: { en: string; zh: string };
}

export const ELEMENTS: FiElement[] = [
  {
    key: "payfi",
    symbol: "Pf",
    number: "01",
    name: { en: "Payfi", zh: "物质金融" },
    dimension: { en: "Matter", zh: "物质" },
    unit: { en: "USD / commodity price", zh: "美金 / 大宗商品价格" },
    color: "#FFB100",
    glyph: "◈",
    tagline: {
      en: "The first dimension to be financialized — and the one still being rebuilt.",
      zh: "最早被金融化的维度——至今仍在被重新建构。",
    },
    definition: {
      en: "Payfi turns matter — land, metal, grain, oil, real estate, inventory, invoices — into programmable claims. It is the original Fi: the layer where atoms become accounting entries, where weight becomes a number, where a barrel of oil becomes a futures contract. In 2026 Payfi is the largest sub-domain of financialization on Earth (>$500T notional) and the most under-tokenized: less than 0.3% of global matter has been migrated onto programmable rails.",
      zh: "Payfi 将土地、金属、谷物、石油、房产、库存、应收账款等物质，转化为可编程的所有权凭证。它是最古老的金融维度：原子变成账本条目，重量变成数字，一桶石油变成期货合约。2026 年，Payfi 是地球上规模最大的金融化子域（名义价值超过 500 万亿美元），也是被通证化得最少的——全球物质中不足 0.3% 已迁移到可编程轨道。",
    },
    mechanics: {
      en: "Custody → attestation → tokenization → secondary market → composability. The hard problem is not the ledger; it is the legal wrapper that binds an off-chain physical fact (a deed, a warehouse receipt, a bill of lading) to an on-chain token. Whoever solves matter-side custody at planetary scale captures the rent on Earth.",
      zh: "托管 → 证明 → 通证化 → 二级市场 → 可组合性。难点不是账本，而是把链下物理事实（地契、仓单、提单）与链上通证绑定的法律外壳。谁能在星球规模解决物质侧托管，谁就能征收地球的租。",
    },
    primitives: {
      en: ["RWA tokenization", "Stablecoins (matter-backed)", "Tokenized treasuries", "Tokenized real estate", "Supply-chain finance", "Commodity-backed credit"],
      zh: ["真实世界资产通证化", "物质背书稳定币", "通证化国债", "通证化房产", "供应链金融", "大宗商品信贷"],
    },
    history: [
      { year: "BCE 3000", en: "Mesopotamian clay tablets — first ledger of matter.", zh: "美索不达米亚泥板——人类首个物质账本。" },
      { year: "1816", en: "UK adopts gold standard — matter as universal anchor.", zh: "英国采用金本位——物质成为通用锚。" },
      { year: "1971", en: "Nixon shock ends gold standard — matter and money decouple.", zh: "尼克松冲击终结金本位——物质与货币脱钩。" },
      { year: "2014", en: "Tether launches — fiat re-anchored onto programmable rails.", zh: "Tether 上线——法币重新锚定到可编程轨道。" },
      { year: "2023", en: "BlackRock tokenizes treasuries on Ethereum.", zh: "贝莱德在以太坊通证化国债。" },
      { year: "2026", en: "Payfi crosses $1T tokenized matter on-chain.", zh: "Payfi 链上通证化物质突破 1 万亿美元。" },
    ],
    state: {
      en: "$1.2T of matter is now natively on-chain (treasuries, stablecoins, real estate). Growth: 11x in 24 months. Bottleneck: jurisdictional fragmentation of property law.",
      zh: "目前 1.2 万亿美元物质原生上链（国债、稳定币、房产）。24 个月增长 11 倍。瓶颈：财产法的司法管辖碎片化。",
    },
    future: {
      en: "By 2030, every container ship, warehouse SKU, and patch of farmland becomes a streaming yield instrument. Matter stops being a balance-sheet entry and becomes a real-time data feed. The 'real economy' and 'financial economy' merge.",
      zh: "到 2030 年，每一艘集装箱船、每一个 SKU、每一块农田都会成为流式收益工具。物质不再是资产负债表条目，而是实时数据流。'实体经济'与'金融经济'合并。",
    },
    projects: ["Tether", "Circle", "Ondo", "BlackRock BUIDL", "Maker", "Centrifuge", "Goldfinch"],
    thesis: {
      en: "Whoever owns the matter→ledger oracle owns the next century of rent.",
      zh: "掌握物质 → 账本预言机的人，将收割下一个世纪的租金。",
    },
  },
  {
    key: "infofi",
    symbol: "If",
    number: "02",
    name: { en: "Infofi", zh: "信息金融" },
    dimension: { en: "Information", zh: "信息" },
    unit: { en: "Token / bit / attention-second", zh: "通证 / 比特 / 注意力秒" },
    color: "#22E1E1",
    glyph: "◇",
    tagline: {
      en: "Information is the only commodity that grows by being consumed.",
      zh: "信息是唯一在消费中增殖的商品。",
    },
    definition: {
      en: "Infofi treats information itself as a tradable asset: signals, prompts, prediction outcomes, attention, training data, knowledge graphs, reputation. Where Payfi sees a barrel, Infofi sees a bit. The total addressable market is the sum of all uncertainty humans wish to resolve — practically infinite.",
      zh: "Infofi 把信息本身视作可交易资产：信号、提示词、预测结果、注意力、训练数据、知识图谱、声誉。Payfi 看见一桶油，Infofi 看见一个比特。可寻址市场是人类希望消除的所有不确定性之和——几乎是无限的。",
    },
    mechanics: {
      en: "Information is non-rival, non-excludable, and self-revealing. Markets for it work only when (1) provenance is verifiable, (2) revealing the signal destroys its value, (3) the buyer cannot resell what they just learned. Cryptography solves all three: zero-knowledge proofs, blind signatures, prediction markets, sealed-bid mechanisms.",
      zh: "信息是非竞争性、非排他性、自揭示性的。其市场仅在三个条件成立时运作：（1）来源可验证，（2）揭示信号即摧毁其价值，（3）买方无法转售他刚得到的知识。密码学解决全部三点：零知识证明、盲签名、预测市场、密封竞价机制。",
    },
    primitives: {
      en: ["Prediction markets", "Attention markets", "Data DAOs", "Knowledge tokens", "Oracle networks", "Provenance proofs", "Reputation tokens"],
      zh: ["预测市场", "注意力市场", "数据 DAO", "知识通证", "预言机网络", "来源证明", "声誉通证"],
    },
    history: [
      { year: "1602", en: "Amsterdam: stock prices encode firm-level information.", zh: "阿姆斯特丹：股价开始编码公司层信息。" },
      { year: "1981", en: "Bloomberg Terminal — information becomes commodity at scale.", zh: "彭博终端——信息首次大规模商品化。" },
      { year: "1988", en: "Iowa Electronic Markets — first prediction market.", zh: "爱荷华电子市场——首个预测市场。" },
      { year: "2020", en: "Polymarket, Augur — on-chain prediction markets.", zh: "Polymarket、Augur——链上预测市场。" },
      { year: "2023", en: "ChatGPT — attention becomes the new oil.", zh: "ChatGPT——注意力成为新石油。" },
      { year: "2025", en: "Bittensor, Vana, Story — data and intelligence as on-chain assets.", zh: "Bittensor、Vana、Story——数据与智能作为链上资产。" },
    ],
    state: {
      en: "Prediction markets, attention markets, and oracle networks collectively settle $40B/year. The data-DAO sector — paying users for their data — is the fastest-growing Infofi vertical, doubling every 6 months.",
      zh: "预测市场、注意力市场、预言机网络合计年结算 400 亿美元。数据 DAO 板块——向用户付费购买数据——是增长最快的 Infofi 子赛道，每 6 个月翻一倍。",
    },
    future: {
      en: "By 2032 every search, every model query, every news article carries an on-chain provenance signature and a real-time market value. Truth becomes a tradable instrument; lying becomes economically expensive.",
      zh: "到 2032 年，每一次搜索、每一次模型查询、每一篇新闻都将携带链上来源签名和实时市场价值。真相成为可交易工具；说谎在经济上变得昂贵。",
    },
    projects: ["Polymarket", "Bittensor", "Chainlink", "Pyth", "Story Protocol", "Vana", "Worldcoin", "Kalshi"],
    thesis: {
      en: "If matter is the past century's monopoly, information is this century's.",
      zh: "如果说物质是上世纪的垄断，信息就是本世纪的。",
    },
  },
  {
    key: "enerfi",
    symbol: "Ef",
    number: "03",
    name: { en: "Enerfi", zh: "能量金融" },
    dimension: { en: "Energy", zh: "能量" },
    unit: { en: "kWh / joule", zh: "千瓦时 / 焦耳" },
    color: "#FFEF5C",
    glyph: "⚡",
    tagline: {
      en: "Energy is the only currency that physics permits at the limit.",
      zh: "能量是物理学在终极意义上允许的唯一货币。",
    },
    definition: {
      en: "Enerfi turns kilowatt-hours, megajoules, and grid frequency into tradable, programmable instruments. Every other Fi domain ultimately bottoms out in Enerfi: information costs energy to transmit, matter costs energy to move, computation costs energy to perform. As intelligence becomes the dominant cost of civilization, energy becomes the dominant cost of intelligence, and therefore the dominant collateral.",
      zh: "Enerfi 把千瓦时、兆焦耳、电网频率变成可交易、可编程的工具。每一个其他 Fi 维度最终都归约到 Enerfi：信息的传输耗能，物质的移动耗能，计算的执行耗能。当智能成为文明的主导成本，能量就成为智能的主导成本，进而成为主导抵押品。",
    },
    mechanics: {
      en: "Grids must balance supply and demand within milliseconds — this is the ultimate real-time settlement system. Enerfi tokenizes generation rights, transmission rights, demand response, and storage capacity, allowing arbitrage between time-of-day, location, and form (electrons vs heat vs hydrogen).",
      zh: "电网必须在毫秒内平衡供需——这是终极实时结算系统。Enerfi 将发电权、输电权、需求响应、储能容量通证化，使得在时段、地点、形式（电子 vs 热 vs 氢）之间套利成为可能。",
    },
    primitives: {
      en: ["Power purchase agreements on-chain", "Demand-response tokens", "Carbon-credit markets", "Grid-balancing rewards", "Compute-power tokens (kWh-backed)", "Hash-rate derivatives"],
      zh: ["链上购电协议", "需求响应通证", "碳信用市场", "电网平衡奖励", "千瓦时背书算力通证", "算力衍生品"],
    },
    history: [
      { year: "1882", en: "Edison's Pearl Street Station — first electric utility.", zh: "爱迪生珍珠街电站——首个公共电力事业。" },
      { year: "1996", en: "FERC Order 888 — wholesale electricity market opens in US.", zh: "FERC 888 号令——美国批发电力市场开放。" },
      { year: "2009", en: "Bitcoin — energy directly purchased and burned for monetary issuance.", zh: "比特币——直接用能量铸造货币。" },
      { year: "2022", en: "Texas grid pays Bitcoin miners to curtail during heatwaves.", zh: "德州电网在热浪中付费给比特币矿工削减负载。" },
      { year: "2025", en: "Tokenized PPAs (Daylight, Powerledger) cross $5B notional.", zh: "通证化购电协议（Daylight、Powerledger）名义价值突破 50 亿美元。" },
    ],
    state: {
      en: "Energy is the only Fi domain that already has a working real-time market (grid-balancing). Tokenization of generation rights is at <2% of installed capacity but doubling annually.",
      zh: "能量是唯一已经拥有运转中实时市场（电网平衡）的 Fi 维度。发电权通证化目前不足装机容量的 2%，但每年翻倍。",
    },
    future: {
      en: "By 2035 every AI inference, every shipping container, every kettle of tea will quote its price in kWh as naturally as it does in dollars. Energy becomes the universal numeraire — what gold was to 1900, kilowatt-hours will be to 2050.",
      zh: "到 2035 年，每一次 AI 推理、每一个集装箱、每一壶茶都会像用美元一样自然地用千瓦时报价。能量成为通用计价单位——黄金之于 1900 年，千瓦时之于 2050 年。",
    },
    projects: ["Daylight", "Powerledger", "Energy Web", "Filecoin (storage-energy)", "Bittensor (compute-energy)", "Hash-rate tokens"],
    thesis: {
      en: "Energy is the only Fi domain that obeys physics directly. The others rest on it.",
      zh: "能量是唯一直接服从物理学的 Fi 维度。其他一切都建立在它之上。",
    },
  },
  {
    key: "chronofi",
    symbol: "Cf",
    number: "04",
    name: { en: "Chronofi", zh: "时间金融" },
    dimension: { en: "Time", zh: "时间" },
    unit: { en: "Second / block-time / future cashflow", zh: "秒 / 区块时间 / 未来现金流" },
    color: "#C9C9D6",
    glyph: "⏳",
    tagline: {
      en: "Every financial instrument is a time machine.",
      zh: "一切金融工具都是时光机器。",
    },
    definition: {
      en: "Chronofi turns time itself — duration, schedules, futures, vesting, decay — into a first-class on-chain primitive. Bonds, options, perpetuals, vesting schedules, and streaming payments are all Chronofi instruments. The deepest insight: time-preference is the irreducible source of interest rates, and interest rates are the price of being human.",
      zh: "Chronofi 把时间本身——持续时间、计划表、期货、解锁、衰减——变成链上一等公民。债券、期权、永续合约、解锁计划、流式支付都是 Chronofi 工具。最深的洞见：时间偏好是利率不可还原的来源，而利率是作为人的代价。",
    },
    mechanics: {
      en: "Time can be sold (selling future labor), bought (taking a loan), hedged (interest rate swaps), streamed (per-second payroll), and locked (staking). Block-time on a blockchain is the first non-physical clock that is shared, decentralized, and tradeable.",
      zh: "时间可以被卖出（出售未来劳动），买入（贷款），对冲（利率掉期），流式支付（按秒发薪），锁定（质押）。区块时间是第一个被共享、去中心化、可交易的非物理时钟。",
    },
    primitives: {
      en: ["Streaming payments (per-second salaries)", "Vesting & cliff schedules", "Tokenized bonds", "Time-locked staking", "Funding rates on perpetuals", "Real-time yield"],
      zh: ["流式支付（按秒发薪）", "解锁与悬崖期", "通证化债券", "时间锁定质押", "永续资金费率", "实时收益"],
    },
    history: [
      { year: "1565", en: "Antwerp — perpetual annuities, the first traded time-instrument.", zh: "安特卫普——永续年金，首个可交易时间工具。" },
      { year: "1971", en: "Black-Scholes formula — time priced exactly.", zh: "布莱克-斯科尔斯公式——时间被精确定价。" },
      { year: "2015", en: "Ethereum — block-time becomes a programmable clock.", zh: "以太坊——区块时间成为可编程时钟。" },
      { year: "2019", en: "Sablier — payroll streamed per second.", zh: "Sablier——按秒流式工资。" },
      { year: "2023", en: "Pendle Finance — yield itself becomes a separately tradeable asset.", zh: "Pendle Finance——收益本身成为独立可交易资产。" },
    ],
    state: {
      en: "$80B+ in streamed assets, $400B+ in tokenized future cashflows. Chronofi is the connective tissue of DeFi — every protocol consumes block-time as raw input.",
      zh: "流式资产规模 800 亿美元以上，通证化未来现金流 4000 亿美元以上。Chronofi 是 DeFi 的结缔组织——每个协议都消耗区块时间作为原料。",
    },
    future: {
      en: "By 2030, paychecks come per-second, rent comes per-second, every contract has a time-derivative. The 30-day billing cycle dies. Time-arbitrage funds (long boring time, short urgent time) become a major asset class.",
      zh: "到 2030 年，工资按秒发，租金按秒付，每份合约都有时间导数。30 天账期消亡。时间套利基金（做多无聊时间、做空紧急时间）成为主要资产类别。",
    },
    projects: ["Sablier", "Superfluid", "Pendle", "MakerDAO DSR", "Lido (staked-time)", "Element Finance"],
    thesis: {
      en: "The deepest market is not for goods, but for the right to pay later.",
      zh: "最深的市场不是商品市场，而是延后支付权的市场。",
    },
  },
  {
    key: "spacetimefi",
    symbol: "Sf",
    number: "05",
    name: { en: "Spacetimefi", zh: "时空金融" },
    dimension: { en: "Spacetime", zh: "时空" },
    unit: { en: "Coordinate-bubble / virtual-land-tick", zh: "坐标泡 / 虚拟地块" },
    color: "#9B7CF6",
    glyph: "◐",
    tagline: {
      en: "Where matter, time, and presence converge — you can charge rent.",
      zh: "物质、时间、临场三者交汇之处——皆可收租。",
    },
    definition: {
      en: "Spacetimefi extends Payfi (location) and Chronofi (when) into a four-dimensional asset class: the right to be in a specific place at a specific time. Examples: virtual land, airspace rights, satellite slots, congestion pricing, GPU rack-space-time, prime-time advertising. The product is not the place — it is the coordinate-bubble.",
      zh: "Spacetimefi 把 Payfi（地点）与 Chronofi（时间）扩展为四维资产类：在特定时间出现在特定地点的权利。例如：虚拟土地、领空权、卫星轨道槽、拥堵收费、GPU 机架时空、黄金时段广告。产品不是地点本身——而是坐标泡。",
    },
    mechanics: {
      en: "A spacetime bubble is a region (x, y, z, t₁, t₂) that grants exclusive use. The price reflects density of attention, scarcity of co-location, and externalities imposed on neighbors. Settlement is instant because verification is locational, not informational.",
      zh: "时空泡是一个区域 (x, y, z, t₁, t₂)，赋予排他性使用权。价格反映注意力密度、共同在场的稀缺性、对邻居的外部性。结算是即时的，因为验证是位置性的，不是信息性的。",
    },
    primitives: {
      en: ["Virtual land (Decentraland, Otherside)", "Airspace tokens", "Satellite slot rights", "Congestion-priced lanes", "GPU rack-hour markets", "Spectrum auctions"],
      zh: ["虚拟土地（Decentraland、Otherside）", "领空通证", "卫星轨道槽权利", "拥堵收费车道", "GPU 机架小时市场", "频谱拍卖"],
    },
    history: [
      { year: "1845", en: "Manhattan grid — first city-scale Spacetimefi pricing.", zh: "曼哈顿网格——首个城市级时空定价。" },
      { year: "1959", en: "FCC spectrum auctions — invisible Spacetime as asset.", zh: "FCC 频谱拍卖——不可见时空作为资产。" },
      { year: "2003", en: "Second Life — first synthetic virtual real estate.", zh: "Second Life——首个合成虚拟房产。" },
      { year: "2021", en: "Otherside, Sandbox — virtual-land peak.", zh: "Otherside、Sandbox——虚拟土地热潮顶点。" },
      { year: "2024", en: "DePIN (Helium, Hivemapper) — physical world re-coordinated on-chain.", zh: "DePIN（Helium、Hivemapper）——物理世界在链上被重新坐标化。" },
    ],
    state: {
      en: "DePIN protocols collectively map and price ~$30B of physical spacetime: wireless coverage, mapping, geo-attestation. Virtual-land markets corrected 80% from 2022 peak but built durable infrastructure.",
      zh: "DePIN 协议合计映射并定价约 300 亿美元物理时空：无线覆盖、测绘、地理证明。虚拟土地市场从 2022 高点回调 80%，但建立了持久基础设施。",
    },
    future: {
      en: "By 2030, walking through a city auto-pays per-square-meter-per-second to private landowners, to congestion managers, to noise-credit holders. The boundary between rent and tax dissolves.",
      zh: "到 2030 年，穿行城市将按平方米-秒自动付费给私人地主、拥堵管理者、噪音信用持有人。租金与税收的边界消融。",
    },
    projects: ["Helium", "Hivemapper", "Otherside", "Sandbox", "GEODNET", "DIMO", "Render"],
    thesis: {
      en: "The metaverse failed not because virtual land was wrong, but because it was too early — and too narrow.",
      zh: "元宇宙的失败不在于虚拟土地错误，而在于过早——且过窄。",
    },
  },
  {
    key: "biofi",
    symbol: "Bf",
    number: "06",
    name: { en: "Biofi", zh: "生物金融" },
    dimension: { en: "Biology", zh: "生物" },
    unit: { en: "ATP / carbon / DNA-bp / cell-count", zh: "ATP / 碳 / DNA 碱基对 / 细胞数" },
    color: "#5BE39C",
    glyph: "❀",
    tagline: {
      en: "The hardest Fi. The one that will outlast us.",
      zh: "最难的 Fi。也是会比我们活得更久的 Fi。",
    },
    definition: {
      en: "Biofi tokenizes living systems: genomes, microbiomes, organs, ecosystems, biodiversity credits, longevity protocols, drug discovery royalties. Two units of account compete: carbon (the geological currency of life) and ATP (the cellular currency). Both will be financialized within a generation.",
      zh: "Biofi 把生命系统通证化：基因组、微生物组、器官、生态系统、生物多样性信用、长寿协议、新药发现版税。两种记账单位竞争：碳（生命的地质货币）与 ATP（细胞货币）。两者将在一代人内被金融化。",
    },
    mechanics: {
      en: "Biofi splits into three layers: (1) cellular — ATP, signal molecules; (2) organismal — labor, longevity, organs; (3) ecological — carbon, biodiversity, fisheries. Tokenization is hardest here because biology refuses to settle: cells divide, species evolve, contracts mutate.",
      zh: "Biofi 分三层：（1）细胞层——ATP、信号分子；（2）个体层——劳动、长寿、器官；（3）生态层——碳、生物多样性、渔业。这里的通证化最难，因为生物拒绝结算：细胞分裂、物种进化、合约突变。",
    },
    primitives: {
      en: ["Carbon credits on-chain", "Biodiversity tokens", "DeSci IP-NFTs (drug royalties)", "Longevity DAOs", "Genome tokens", "Bio-data marketplaces"],
      zh: ["链上碳信用", "生物多样性通证", "DeSci IP-NFT（药物版税）", "长寿 DAO", "基因组通证", "生物数据市场"],
    },
    history: [
      { year: "1997", en: "Kyoto Protocol — carbon as tradable unit.", zh: "京都议定书——碳成为可交易单位。" },
      { year: "2003", en: "Human Genome completed — bio-data becomes commodity.", zh: "人类基因组完成——生物数据成为商品。" },
      { year: "2021", en: "Molecule, VitaDAO — IP-NFTs for drug discovery.", zh: "Molecule、VitaDAO——为新药发现发行 IP-NFT。" },
      { year: "2024", en: "Verra-style carbon credits cross $10B traded annually.", zh: "Verra 类碳信用年度交易额突破 100 亿美元。" },
    ],
    state: {
      en: "Carbon markets ($900B forecast 2030), DeSci IP-NFTs ($300M committed), bio-data marketplaces (early). Major friction: jurisdictional legitimacy and verification.",
      zh: "碳市场（2030 年预测 9000 亿美元）、DeSci IP-NFT（已承诺 3 亿美元）、生物数据市场（早期）。主要摩擦：司法合法性与验证。",
    },
    future: {
      en: "By 2040, your microbiome composition, your DNA, your sleep architecture all earn yield. Bodies become balance sheets. Insurance, pharma, and finance merge into a single industry.",
      zh: "到 2040 年，你的微生物组、DNA、睡眠结构都会产生收益。身体成为资产负债表。保险、医药、金融融合为单一产业。",
    },
    projects: ["Verra", "Toucan", "Klima DAO", "VitaDAO", "Molecule", "Pump.Science", "Genomes.io"],
    thesis: {
      en: "Carbon will be the next reserve currency — not because we want it, but because thermodynamics demands it.",
      zh: "碳将成为下一个储备货币——不是我们想要，而是热力学要求。",
    },
  },
  {
    key: "cultufi",
    symbol: "Cu",
    number: "07",
    name: { en: "Cultufi · Ethnofi", zh: "文化金融" },
    dimension: { en: "Culture", zh: "文化" },
    unit: { en: "Meme-attention / belief-share / ritual-stake", zh: "梗-注意力 / 信念-份额 / 仪式-权益" },
    color: "#FF7A45",
    glyph: "✦",
    tagline: {
      en: "If you can be persuaded, you can be priced.",
      zh: "凡可被说服者，皆可被定价。",
    },
    definition: {
      en: "Cultufi financializes belief, taste, identity, and tribe. Memecoins, fan tokens, religious DAOs, political prediction markets, brand stakes — all are Cultufi. Ethnofi is its sharper twin: financializing in-group / out-group belonging itself. The most controversial Fi: it makes the price of culture explicit, and the price is rarely zero.",
      zh: "Cultufi 把信念、品味、身份、部落金融化。Memecoin、粉丝通证、宗教 DAO、政治预测市场、品牌权益——皆为 Cultufi。Ethnofi 是它更锋利的孪生：把内群/外群归属本身金融化。这是最具争议的 Fi：它让文化的价格显性化，而那价格很少是零。",
    },
    mechanics: {
      en: "A meme is a self-replicating belief; a memecoin is a self-replicating belief with a settlement layer. Cultural assets price not on cashflow but on Schelling-point consensus: 'this will continue to be valued by others who think this will continue to be valued.' Reflexivity at maximum dose.",
      zh: "梗是自复制的信念；memecoin 是带结算层的自复制信念。文化资产的定价不基于现金流，而基于谢林点共识：'这将继续被那些认为它将继续被重视的人重视。'反身性的最大剂量。",
    },
    primitives: {
      en: ["Memecoins (Doge, Pepe, Wif)", "Fan tokens (Chiliz)", "Political prediction markets", "Religious / tribal DAOs", "Bonded curve creator economies", "Cultural-IP NFTs"],
      zh: ["Memecoin（Doge、Pepe、Wif）", "粉丝通证（Chiliz）", "政治预测市场", "宗教/部落 DAO", "联合曲线创作者经济", "文化 IP NFT"],
    },
    history: [
      { year: "1637", en: "Tulip mania — first recorded Cultufi market.", zh: "郁金香狂热——首次有记录的 Cultufi 市场。" },
      { year: "2013", en: "Dogecoin — Cultufi proves it can outlive the joke.", zh: "Dogecoin——Cultufi 证明它能活得比笑话更久。" },
      { year: "2017", en: "CryptoPunks — identity as financial primitive.", zh: "CryptoPunks——身份作为金融原语。" },
      { year: "2024", en: "Trump / political memecoins — election cycle financialized.", zh: "Trump / 政治 memecoin——选举周期被金融化。" },
    ],
    state: {
      en: "Memecoin market cap >$80B. Fan tokens >$3B. Pump.fun-style launchpads spawn ~10,000 cultural assets weekly. The category is volatile but never disappears.",
      zh: "Memecoin 市值超 800 亿美元。粉丝通证超 30 亿美元。Pump.fun 类启动板每周孕育约 10,000 个文化资产。这一品类波动剧烈但从未消亡。",
    },
    future: {
      en: "By 2030, every band, religion, language community, and political movement runs an on-chain treasury and a public-belief market. Conversion becomes a financial event. The 'culture war' becomes a literal trading floor.",
      zh: "到 2030 年，每一支乐队、每一种宗教、每一个语言社区、每一场政治运动都会运营链上金库和公开信念市场。皈依成为金融事件。'文化战争'成为字面意义上的交易大厅。",
    },
    projects: ["Pump.fun", "Friend.tech", "Chiliz", "Farcaster", "Lens", "Polymarket"],
    thesis: {
      en: "Culture has always been priced. We are merely making the receipt visible.",
      zh: "文化向来都有价格。我们只是让收据变得可见。",
    },
  },
  {
    key: "visufi",
    symbol: "Vf",
    number: "08",
    name: { en: "Visufi", zh: "图像金融" },
    dimension: { en: "Image", zh: "图像" },
    unit: { en: "Pixel-attention / generative-seed / style-token", zh: "像素-注意力 / 生成-种子 / 风格-通证" },
    color: "#FF55B0",
    glyph: "◉",
    tagline: {
      en: "An image is a compressed claim on attention.",
      zh: "一幅图像是注意力的压缩凭证。",
    },
    definition: {
      en: "Visufi financializes visual content: NFTs, generative-art seeds, style-vectors, AI-image royalties, brand assets, screenshots, on-chain murals. Where Cultufi prices belief, Visufi prices the pixel — the cheapest, most-replicable, most-influential medium humans have ever created.",
      zh: "Visufi 把视觉内容金融化：NFT、生成艺术种子、风格向量、AI 图像版税、品牌资产、截图、链上壁画。Cultufi 给信念定价，Visufi 给像素定价——人类创造过的最便宜、最易复制、最具影响力的媒介。",
    },
    mechanics: {
      en: "Images are perfectly copyable, so scarcity must be artificial: signature, provenance, time-of-mint, smart-contract enforced royalty. The genius of NFTs was not the JPEG — it was the on-chain royalty plus the on-chain signature, and the bet that humans would still pay for both.",
      zh: "图像可以完美复制，因此稀缺性必须是人为的：签名、来源、铸造时间、智能合约执行版税。NFT 的天才之处不在于 JPEG——而在于链上版税加链上签名，以及押注人类仍会为两者付费。",
    },
    primitives: {
      en: ["NFTs", "Generative-art seeds", "On-chain style-vectors (Stable Diffusion weights)", "AI-image royalty contracts", "Screenshot-attribution", "Visual-IP escrow"],
      zh: ["NFT", "生成艺术种子", "链上风格向量（Stable Diffusion 权重）", "AI 图像版税合约", "截图溯源", "视觉 IP 托管"],
    },
    history: [
      { year: "1956", en: "First generative art — Ben Laposky's oscilloscope works.", zh: "首批生成艺术——Ben Laposky 的示波器作品。" },
      { year: "2014", en: "Counterparty 'Rare Pepes' — first digital scarcity.", zh: "Counterparty 'Rare Pepes'——首个数字稀缺品。" },
      { year: "2017", en: "CryptoPunks + CryptoKitties — NFT primitive proven.", zh: "CryptoPunks + CryptoKitties——NFT 原语得到证明。" },
      { year: "2022", en: "Stable Diffusion — image cost collapses; provenance is the only moat.", zh: "Stable Diffusion——图像成本崩塌；溯源成为唯一护城河。" },
      { year: "2024", en: "Story Protocol — programmable royalties on generative IP.", zh: "Story Protocol——生成 IP 的可编程版税。" },
    ],
    state: {
      en: "NFT trading volume settled at ~$1B/month. Generative-art protocols hold $300M+ TVL. Visufi has matured from speculation into infrastructure.",
      zh: "NFT 交易量稳定在每月约 10 亿美元。生成艺术协议 TVL 超过 3 亿美元。Visufi 已从投机阶段走向基础设施阶段。",
    },
    future: {
      en: "By 2030 every image carries a programmable origin, a royalty stream, and a market price for derivative use. AI training datasets pay individual creators per inference. The pixel becomes a revenue node.",
      zh: "到 2030 年，每一幅图像都会携带可编程来源、版税流、衍生使用的市场价格。AI 训练数据集按推理向单个创作者付费。像素成为收入节点。",
    },
    projects: ["Story Protocol", "Art Blocks", "Sound", "Foundation", "Manifold", "OpenSea"],
    thesis: {
      en: "Images are the cheapest object and the most expensive moat — Visufi prices the gap.",
      zh: "图像是最便宜的物件，也是最昂贵的护城河——Visufi 给两者之间的差额定价。",
    },
  },
  {
    key: "iconofi",
    symbol: "In",
    number: "09",
    name: { en: "Iconofi", zh: "标识金融" },
    dimension: { en: "Identity / Sign", zh: "标识 / 符号" },
    unit: { en: "Recognition / namespace / proof-of-personhood", zh: "认知度 / 命名空间 / 人格证明" },
    color: "#F0EAD6",
    glyph: "ψ",
    tagline: {
      en: "Your name is the smallest contract you'll ever sign.",
      zh: "你的名字，是你一生签下最小的合约。",
    },
    definition: {
      en: "Iconofi tokenizes identifiers: names, logos, brands, handles, ENS domains, proof-of-personhood credentials, reputation graphs. Every other Fi domain ultimately requires Iconofi: matter needs an owner, information needs a source, biology needs a body, culture needs a tribe. Iconofi is the addressing layer of reality.",
      zh: "Iconofi 把标识符通证化：名字、标志、品牌、用户名、ENS 域名、人格证明凭证、声誉图。每一个其他 Fi 维度最终都需要 Iconofi：物质需要所有者，信息需要来源，生物需要身体，文化需要部落。Iconofi 是现实的寻址层。",
    },
    mechanics: {
      en: "An identifier is valuable to the extent that others honor it. The market is therefore a coordination game with very strong path-dependence: first-mover wins, and ENS, Worldcoin, Farcaster IDs all bet on owning that first mover's role.",
      zh: "标识符的价值取决于他人是否承认。因此市场是一个强路径依赖的协调博弈：先动者获胜，ENS、Worldcoin、Farcaster ID 都在押注成为那个先动者。",
    },
    primitives: {
      en: ["ENS / handle systems", "Proof-of-personhood (Worldcoin, Humanity)", "Reputation graphs (Lens, Farcaster)", "Brand-token escrow", "Verifiable credentials", "On-chain wills & beneficiaries"],
      zh: ["ENS / 用户名系统", "人格证明（Worldcoin、Humanity）", "声誉图（Lens、Farcaster）", "品牌通证托管", "可验证凭证", "链上遗嘱与受益人"],
    },
    history: [
      { year: "1870", en: "First modern trademark law (UK Trade Marks Act).", zh: "首部现代商标法（英国商标法）。" },
      { year: "1985", en: "Symbolics.com — first .com domain.", zh: "Symbolics.com——首个 .com 域名。" },
      { year: "2017", en: "ENS launches — names on-chain.", zh: "ENS 上线——名字上链。" },
      { year: "2023", en: "Worldcoin — proof-of-personhood at scale.", zh: "Worldcoin——人格证明规模化。" },
    ],
    state: {
      en: "ENS: 3M+ names. Worldcoin: 10M+ World IDs. Farcaster + Lens: 1M+ social identities. Iconofi is small in TVL but large in optionality.",
      zh: "ENS：300 万+ 名字。Worldcoin：1000 万+ World ID。Farcaster + Lens：100 万+ 社交身份。Iconofi 的 TVL 较小，但选择权价值巨大。",
    },
    future: {
      en: "By 2030 every human, every AI agent, every corporation, and every contract carries a single composable on-chain identifier with a market price. Identity becomes the operating system of value.",
      zh: "到 2030 年，每个人、每个 AI 智能体、每个公司、每份合约都将拥有单一可组合的链上标识符及其市场价格。身份成为价值的操作系统。",
    },
    projects: ["ENS", "Worldcoin", "Farcaster", "Lens", "Polygon ID", "Disco", ".bit"],
    thesis: {
      en: "Whoever issues the final namespace inherits the world.",
      zh: "谁发行最终的命名空间，谁就继承世界。",
    },
  },
];

export const EQUIVALENCES = [
  { dim: { en: "Energy", zh: "能量" }, unit: { en: "Electricity (kWh)", zh: "电力（千瓦时）" }, glyph: "⚡", color: "#FFEF5C" },
  { dim: { en: "Brain", zh: "大脑" }, unit: { en: "Dopamine", zh: "多巴胺" }, glyph: "◉", color: "#FF55B0" },
  { dim: { en: "Information", zh: "信息" }, unit: { en: "Token", zh: "通证" }, glyph: "◇", color: "#22E1E1" },
  { dim: { en: "Currency", zh: "货币" }, unit: { en: "USD", zh: "美金" }, glyph: "$", color: "#5BE39C" },
  { dim: { en: "Time", zh: "时间" }, unit: { en: "Second", zh: "秒" }, glyph: "⏳", color: "#C9C9D6" },
  { dim: { en: "Space", zh: "空间" }, unit: { en: "Spatial bubble", zh: "空间泡" }, glyph: "◐", color: "#9B7CF6" },
  { dim: { en: "Bio-energy", zh: "生物体能量" }, unit: { en: "ATP", zh: "三磷酸腺苷" }, glyph: "❀", color: "#5BE39C" },
  { dim: { en: "Biology", zh: "生物" }, unit: { en: "Carbon (C)", zh: "碳" }, glyph: "C", color: "#FFB100" },
];
