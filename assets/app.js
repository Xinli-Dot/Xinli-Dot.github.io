(() => {
  const get = (obj, key) => key.split('.').reduce((x,k) => x?.[k],obj);
  let lang = 'en';
  const el = (tag, className, text) => {const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n};
  const validUrl = u => typeof u==='string' && /^https:\/\//i.test(u);
  const entryList = (target, entries, kind, text) => {
    const root=document.getElementById(target);root.replaceChildren();
    if(!entries.length){root.append(el('p','empty-state',text.empty));return;}
    entries.forEach(item=>{
      const article=el('article','entry');const year=el('span','entry-year',item.year||'');const body=el('div','entry-body');
      body.append(el('h3','',item.title||''),el('p','',kind==='pub'?`${item.authors||''}${item.venue?' · '+item.venue:''}`:item.event||''));
      if(validUrl(item.url)){const a=el('a','entry-link',text.link);a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';body.append(a)}
      article.append(year,body);root.append(article);
    });
  };
  function render(){
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.title=(lang==='zh'?SITE.nameZh:SITE.nameEn)+(lang==='zh'?' | 学术主页':' | Academic Website');
    document.querySelectorAll('[data-i18n]').forEach(n=>{const v=get(COPY[lang],n.dataset.i18n);if(typeof v==='string')n.textContent=v});
    document.getElementById('brand-name').textContent=lang==='zh'?SITE.nameZh:SITE.nameEn;
    document.getElementById('hero-name').textContent=lang==='zh'?SITE.nameZh:SITE.nameEn;
    document.getElementById('footer-name').textContent=lang==='zh'?SITE.nameZh:SITE.nameEn;
    document.getElementById('lang-toggle').textContent=lang==='en'?'中文':'EN';
    const grid=document.getElementById('research-grid');grid.replaceChildren();COPY[lang].research.cards.forEach((x,i)=>{
      const c=el('article','research-card');const marker=el('div','research-marker','0'+(i+1));
      c.append(marker,el('div','card-kicker',x.tag),el('h3','',x.title),el('p','',x.text));grid.append(c);
    });
    entryList('publication-list',SITE.publications,'pub',COPY[lang].pub);
    entryList('presentation-list',SITE.presentations,'talks',COPY[lang].talks);
    const cv=document.getElementById('cv-action');cv.replaceChildren();
    if(SITE.cvPdf && !/^javascript:/i.test(SITE.cvPdf)){
      const a=el('a','button dark',COPY[lang].cv.download);a.href=SITE.cvPdf;a.setAttribute('download','');cv.append(a);
    } else cv.append(el('p','empty-state',COPY[lang].cv.missing));
    const contact=document.getElementById('contact-links');contact.replaceChildren();
    [['Email',SITE.email?`mailto:${SITE.email}`:''],['Google Scholar',SITE.scholar],['ORCID',SITE.orcid],['GitHub',SITE.github]].forEach(([name,url])=>{
      if(!url || (name!=='Email' && !validUrl(url)))return;
      const a=el('a','social-link',name+' ↗');a.href=url;if(name!=='Email'){a.target='_blank';a.rel='noopener noreferrer'}contact.append(a);
    });
    if(!contact.children.length)contact.append(el('p','empty-state',COPY[lang].contact.missing));
  }
  document.getElementById('footer-year').textContent=String(new Date().getFullYear());
  document.getElementById('lang-toggle').addEventListener('click',()=>{lang=lang==='en'?'zh':'en';render()});
  const menu=document.getElementById('menu-toggle'),nav=document.getElementById('nav');
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open))});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));
  render();
})();
