/* EDIT THIS FILE to customize the website. All external URLs must be real, public URLs. */
const SITE = {
  nameEn: 'Xin Li',
  nameZh: 'Xin Li',
  email: '', // e.g. name@university.edu; blank hides email link
  scholar: '', // full Google Scholar URL
  orcid: '', // full ORCID URL
  github: 'https://github.com/Xinli-Dot', // full GitHub profile URL
  cvPdf: '', // e.g. assets/Academic_CV.pdf; blank shows "coming soon"
  publications: [
    // {year:'2026', title:'Exact published paper title', authors:'Author A, Author B', venue:'Journal, volume, pages', url:'https://doi.org/...'}
  ],
  presentations: [
    // {year:'2026', title:'Verified talk title', event:'Conference and location', url:'https://...'}
  ]
};
const COPY = {
  en: {
    nav: {about:'About',research:'Research',publications:'Publications',presentations:'Presentations',cv:'CV',contact:'Contact'},
    hero: {eyebrow:'MOLECULAR BIOLOGY · PROTEIN ADAPTATION',title:'Decoding how proteins adapt to challenging biological environments.',subtitle:'Research in nucleases, protein function, and molecular evolution.',researchBtn:'Explore research',publicationsBtn:'View publications ↗',role:'Researcher · Academic profile',fig:'Concept illustration · Not experimental data'},
    about:{title:'Research guided by fundamental biological questions.',text:'I study how proteins maintain function in demanding biological environments, with interests spanning nuclease activity, structure–function relationships, and molecular evolution. This website highlights research directions, published work, and academic activities. Institutional affiliation and biographical details will be added after verification.',note:'Profile draft: replace this introduction with a verified professional biography before public launch.'},
    research:{title:'Research directions',intro:'Three connected themes organize the current academic profile.',futureLabel:'FUTURE LAB VISION',future:'A future independent research program may connect mechanistic biochemistry, comparative biology, and functional validation. This is a prospective direction, not a claim that a laboratory has already been established.',cards:[{tag:'01 / ENZYMOLOGY',title:'Nuclease function',text:'Biochemical investigation of nucleic-acid degradation, enzyme activity, and biological context.'},{tag:'02 / MECHANISM',title:'Protein adaptation',text:'Exploring how protein sequence, structural environment, and physicochemical properties relate to function.'},{tag:'03 / EVOLUTION',title:'Molecular evolution',text:'Comparative approaches to understanding diversity and specialization of enzyme families.'}]},
    pub:{title:'Selected publications',intro:'Only published or verifiably accepted work will appear here.',empty:'Publication entries will be added after bibliographic verification.',link:'Read publication ↗'},
    talks:{title:'Talks & presentations',intro:'Conference presentations and invited talks, once the details are confirmed.',empty:'Presentation details will be added after verification.',link:'Details ↗'},
    cv:{title:'Academic curriculum vitae',text:'Education, appointments, research experience, selected skills and academic service.',download:'Download CV (PDF) ↗',missing:'CV download will be available after a verified PDF is uploaded.'},
    contact:{title:"Let's connect.",text:'For research discussions, academic collaboration and scientific exchange.',disclaimer:'Please replace placeholder details before publishing this website publicly.',missing:'Public contact links will appear here after verification.'},
    footer:{hosting:'Hosted free on GitHub Pages'}
  },
  zh: {
    nav:{about:'关于我',research:'研究方向',publications:'学术论文',presentations:'学术报告',cv:'学术简历',contact:'联系方式'},
    hero:{eyebrow:'分子生物学 · 蛋白质环境适应',title:'探索蛋白质如何适应具有挑战性的生物环境。',subtitle:'关注核酸酶功能、蛋白质作用机制与分子进化。',researchBtn:'了解研究方向',publicationsBtn:'查看学术论文 ↗',role:'科研工作者 · 学术主页',fig:'概念性科研插图 · 非实验数据'},
    about:{title:'从基础生物学问题出发，理解蛋白质功能。',text:'我的研究兴趣集中于蛋白质如何在特殊生物环境中维持功能，涉及核酸酶活性、结构与功能关系及分子进化。本网站用于展示研究方向、已公开发表的成果和学术活动。具体个人履历与机构信息将在核实后补充。',note:'当前为个人简介草稿。正式公开前，请替换为经过核实的个人学术介绍。'},
    research:{title:'主要研究方向',intro:'目前以三个互相关联的主题组织个人学术研究。',futureLabel:'未来独立实验室愿景',future:'未来可发展融合生化机制、比较生物学与功能验证的独立研究体系。这是未来规划，并不代表目前已经建立独立实验室。',cards:[{tag:'01 / 酶学',title:'核酸酶功能',text:'研究核酸降解过程、酶学活性及其生物学环境。'},{tag:'02 / 机制',title:'蛋白质环境适应',text:'探索蛋白质序列、结构环境及理化性质与功能之间的联系。'},{tag:'03 / 进化',title:'分子进化',text:'通过比较分析理解酶家族的多样性与功能分化。'}]},
    pub:{title:'代表性论文',intro:'仅展示已发表或可验证已接收的研究成果。',empty:'论文信息核实后将在这里显示。',link:'阅读论文 ↗'},
    talks:{title:'学术报告与会议',intro:'收录信息核实后的会议报告与受邀讲座。',empty:'学术报告信息核实后将在这里显示。',link:'查看详情 ↗'},
    cv:{title:'学术简历',text:'教育背景、研究经历、学术任职、科研技能和学术服务。',download:'下载学术简历（PDF）↗',missing:'上传正式版 PDF 学术简历后开放下载。'},
    contact:{title:'欢迎学术交流。',text:'欢迎就科研问题、学术合作及研究交流联系。',disclaimer:'公开发布前请替换示例姓名，并核实所有联系方式。',missing:'核实并填写公开联系方式后将在这里显示。'},
    footer:{hosting:'由 GitHub Pages 免费托管'}
  }
};
