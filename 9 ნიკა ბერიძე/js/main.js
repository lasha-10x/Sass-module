(function(){
  const doc = document.documentElement;
  const nav = document.getElementById('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const themeBtn = document.getElementById('themeToggle');
  const searchBtn = document.querySelector('.search-trigger');
  const cmdk = document.querySelector('.cmdk');
  const cmdkList = document.getElementById('cmdkList');
  const cmdkInput = cmdk?.querySelector('input');

  // Mobile nav
  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Theme toggle
  let theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') doc.setAttribute('data-theme', 'dark');
  themeBtn?.addEventListener('click', () => {
    theme = doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    doc.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeBtn.setAttribute('aria-pressed', theme === 'dark');
  });

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const tabs = group.querySelectorAll('[data-tab]');
    const panels = group.querySelectorAll('[data-panel]');
    tabs.forEach(tab => tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.toggle('is-active', t === tab));
      panels.forEach(p => p.classList.toggle('is-active', p.getAttribute('data-panel') === target));
    }));
  });

  // Marquee duplicate
  document.querySelectorAll('[data-marquee]').forEach(wrap => {
    const track = wrap.querySelector('.marquee__track');
    if (track) track.innerHTML = track.innerHTML + track.innerHTML;
  });

  // Scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('fade-in-up'); io.unobserve(e.target);} });
  }, {threshold:0.1});
  document.querySelectorAll('.feature,.price-card,.window,.cta__inner').forEach(el=>io.observe(el));

  // Command palette (demo search)
  const items = [
    {label:'Products', id:'products'},
    {label:'Billing', id:'products'},
    {label:'Connect', id:'products'},
    {label:'Radar', id:'products'},
    {label:'Developers', id:'developers'},
    {label:'Pricing', id:'pricing'},
  ];
  function openCmdk() {
    if (!cmdk) return;
    cmdk.hidden = false;
    cmdk.setAttribute('aria-hidden','false');
    renderList(items);
    setTimeout(()=>cmdkInput?.focus(),0);
  }
  function closeCmdk() {
    if (!cmdk) return;
    cmdk.hidden = true;
    cmdk.setAttribute('aria-hidden','true');
  }
  function renderList(list) {
    cmdkList.innerHTML = '';
    list.forEach((it,idx)=>{
      const li = document.createElement('li');
      li.setAttribute('role','option');
      li.innerHTML = `<span class="cmdk__match">${it.label}</span><span class="cmdk__hint">↵ to navigate</span>`;
      li.addEventListener('click', ()=> { location.hash = '#'+it.id; closeCmdk(); });
      if(idx===0) li.setAttribute('aria-selected','true');
      cmdkList.appendChild(li);
    });
  }
  searchBtn?.addEventListener('click', openCmdk);
  document.addEventListener('keydown', (e)=>{
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k') { e.preventDefault(); openCmdk(); }
    if (e.key === 'Escape') closeCmdk();
  });
  cmdk?.addEventListener('click', (e)=>{ if (e.target.classList.contains('cmdk__backdrop')) closeCmdk(); });
  cmdkInput?.addEventListener('input', (e)=>{
    const q = e.target.value.toLowerCase();
    const filtered = items.filter(it=> it.label.toLowerCase().includes(q));
    renderList(filtered.length ? filtered : items);
  });
})();