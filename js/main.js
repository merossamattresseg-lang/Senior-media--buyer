const camps=[
["Conversion · Adam video","Nov 2025",3786,82.34,1490589.72,4.78],
["Conversion · AI video","Jul 2025",3656,72.00,1369712.89,5.20],
["Conversion · High fast scale","May 2025",2082,60.74,684720.03,5.41],
["Conversion · 6 May photo","May 2025",1919,55.02,608140.39,5.76],
["Conversion · 12 May","May 2025",1775,54.39,563394.05,5.84],
["Conversion · AI video, New Year","Dec 2025",1054,79.89,354033.00,4.20],
["DReg Adam · 15 Oct","Oct 2025",801,78.06,262349.00,4.20],
["DReg Adam · Black Friday","Nov 2025",695,90.45,221708.33,3.53],
["CMP · image","Jul 2026",631,89.74,254631.50,4.50],
["Conversion · old pixel","Jun 2025",544,67.42,190163.23,5.19],
["Conversion · 5 May","May 2025",539,59.98,186988.95,5.78],
["Conversion · 28 Feb","Mar 2026",531,76.89,199189.00,4.88],
["Conversion · 11 Nov","Nov 2025",501,86.76,183306.00,4.22],
["Conversion · 4 May","May 2025",490,57.57,174370.01,6.18]];
const f=(n,d=0)=>n.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
document.getElementById('camp').innerHTML=camps.map(c=>`<tr><td>${c[0]}</td><td>${c[1]}</td><td>${f(c[2])}<span class="bar" style="width:${Math.round(c[2]/3786*60)}px"></span></td><td>${f(c[3],2)}</td><td>${f(c[4],2)}</td><td class="${c[5]>=5.5?'roas-hi':''}">${c[5].toFixed(2)}</td></tr>`).join('');

const cases=[
{p:"Meta",t:"Perfume brand",w:"Egypt · Sales",n:"2,123",s:"4.8M EGP",r:"4.0"},
{p:"Meta",t:"Perfume brand",w:"Egypt · Sales",n:"1,371",s:"3.12M EGP",r:"4.4"},
{p:"Meta",t:"Electronics store",w:"UAE · Sales",n:"1,156",s:"$47.5K",r:"4.0"},
{p:"Meta",t:"Aesthetic clinic",w:"Jordan · WhatsApp, Messenger, IG DMs",n:"—",s:"Leads",r:"—"},
{p:"Meta",t:"Medical services",w:"Iraq · WhatsApp leads",n:"—",s:"Leads",r:"—"},
{p:"Google",t:"Perfume brand",w:"Egypt · Search, Sales",n:"119",s:"324K EGP",r:"13"},
{p:"Google",t:"Perfume brand",w:"Egypt · Search, Sales",n:"43",s:"116K EGP",r:"15"},
{p:"Google",t:"Perfume brand",w:"Egypt · Search, Sales",n:"32",s:"86K EGP",r:"12.8"},
{p:"Google",t:"Shipping company",w:"Saudi Arabia · YouTube video views",n:"—",s:"Awareness",r:"—"},
{p:"TikTok",t:"Fashion brand",w:"Egypt · Sales",n:"392",s:"348K EGP",r:"35"},
{p:"Shopify",t:"Fashion brand",w:"Egypt · store total",n:"49,989",s:"42M EGP",r:"CR 1.92%"},
{p:"Shopify",t:"Perfume brand",w:"Egypt · store total",n:"14,481",s:"40M EGP",r:"6"},
{p:"Shopify",t:"Perfume brand",w:"Egypt · store total",n:"9,899",s:"27M EGP",r:"—"},
{p:"Shopify",t:"Electronics store",w:"Egypt · store total",n:"816",s:"1.8M EGP",r:"9"},
{p:"Shopify",t:"Local clothing brand",w:"Egypt · store total",n:"795",s:"725K EGP",r:"7"},
{p:"WooCommerce",t:"Perfume brand",w:"Egypt · store total",n:"3,591",s:"5.8M EGP",r:"5.9"},
{p:"WooCommerce",t:"Cosmetics brand",w:"Egypt · store total",n:"1,832",s:"1.7M EGP",r:"8"},
{p:"Lightfunnels",t:"Handbag brand",w:"Egypt · store total",n:"2,111",s:"1.5M EGP",r:"7"}];
const pfs=["All",...new Set(cases.map(c=>c.p))];
let cur="All";try{cur=localStorage.getItem('pf')||"All"}catch(e){}
if(!pfs.includes(cur))cur="All";
const fl=document.getElementById('filters'),grid=document.getElementById('cases-grid');
function render(){
  fl.innerHTML=pfs.map(p=>`<button type="button" class="chip" aria-pressed="${p===cur}" data-p="${p}">${p} <span class="mono" style="opacity:.6">${p==="All"?cases.length:cases.filter(c=>c.p===p).length}</span></button>`).join('');
  grid.innerHTML=cases.filter(c=>cur==="All"||c.p===cur).map(c=>`<article class="case"><div class="top"><span class="pf">${c.p}</span><span class="where">${c.w.split(' · ')[0]}</span></div><div><h3>${c.t}</h3><p class="where">${c.w.split(' · ').slice(1).join(' · ')}</p></div><div class="figs"><div><b>${c.s}</b><span>${c.s==="Leads"||c.s==="Awareness"?"Goal":"Sales"}</span></div><div><b>${c.n}</b><span>${c.p==="Shopify"||c.p==="WooCommerce"||c.p==="Lightfunnels"?"Orders":"Purchases"}</span></div><div class="r"><b>${c.r}</b><span>${c.r.startsWith("CR")?"Conv.":"ROAS"}</span></div></div></article>`).join('');
}
fl.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cur=b.dataset.p;try{localStorage.setItem('pf',cur)}catch(e){}render()});
render();

const rc=[{"g": "Meta", "i": "images/proof/01-meta-whole-account-lifetime.jpg", "t": "Meta · whole account, lifetime", "d": "Every campaign in one Meta account, Aug 2023 to Sep 2026. 962 campaigns, sorted by purchases.", "k": ["13.65M EGP value", "36,554 purchases", "ROAS 4.62"]}, {"g": "Meta", "i": "images/proof/02-meta-august-2026.jpg", "t": "Meta · August 2026", "d": "One month of the same account at full scale.", "k": ["1.84M EGP", "4,196 purchases", "ROAS 4.43"]}, {"g": "Meta", "i": "images/proof/03-meta-september-2026-1-26.jpg", "t": "Meta · September 2026 (1–26)", "d": "The month after. Volume held with cost per purchase under 100 EGP.", "k": ["1.60M EGP", "3,968 purchases", "CPP 96.95"]}, {"g": "Meta", "i": "images/proof/04-meta-top-ad-sets.jpg", "t": "Meta · top ad sets", "d": "Ad sets ranked by purchases. The lead ad set alone brought 4,245 purchases.", "k": ["11,782 purchases", "CPP 90.95", "ROAS 5.07"]}, {"g": "Meta", "i": "images/proof/05-perfume-brand-egypt.jpg", "t": "Perfume brand · Egypt", "d": "Sales campaigns launched Feb–Mar 2025 for a local perfume brand.", "k": ["3.13M EGP value", "1,371 purchases", "ROAS 4.44"]}, {"g": "Meta", "i": "images/proof/06-perfume-brand-egypt-scale-phase.jpg", "t": "Perfume brand · Egypt, scale phase", "d": "Same category, bigger budgets. Average order above 2,000 EGP.", "k": ["4.80M EGP value", "2,123 purchases", "CPP 576 EGP"]}, {"g": "Meta", "i": "images/proof/07-electronics-store-uae.jpg", "t": "Electronics store · UAE", "d": "Website purchase campaigns billed in US dollars.", "k": ["$47,517 value", "1,156 purchases", "CPP $11.95"]}, {"g": "Meta", "i": "images/proof/08-medical-services-iraq.jpg", "t": "Medical services · Iraq", "d": "WhatsApp messaging campaigns. Cost per conversation from 3.27 EGP.", "k": ["115.5K EGP spend", "WhatsApp leads", "3,217 comments"]}, {"g": "Meta", "i": "images/proof/09-messaging-campaigns-egypt.jpg", "t": "Messaging campaigns · Egypt", "d": "Messenger and WhatsApp campaigns at scale, with daily budgets up to 1,000 EGP.", "k": ["288.5K EGP spend", "3.96M impressions", "from 4.35 EGP/lead"]}, {"g": "Meta", "i": "images/proof/10-messaging-campaigns-usd-account.jpg", "t": "Messaging campaigns · USD account", "d": "Low-budget message campaigns on $2–$10 daily budgets.", "k": ["$727 spend", "from $0.12/lead", "1,000+ conversations"]}, {"g": "Google", "i": "images/proof/11-perfume-brand-google-search.jpg", "t": "Perfume brand · Google Search", "d": "Search campaign for a perfume brand in Egypt. Every pound spent returned about 12.6.", "k": ["324K EGP value", "119 purchases", "25.7K EGP cost"]}, {"g": "Google", "i": "images/proof/12-perfume-brand-google-search.jpg", "t": "Perfume brand · Google Search", "d": "A second search campaign for the same category.", "k": ["43 purchases", "4.81K EGP cost", "ROAS 15.56"]}, {"g": "Google", "i": "images/proof/13-perfume-brand-google-search.jpg", "t": "Perfume brand · Google Search", "d": "Small budget, high return. 362 clicks turned into 32 purchases.", "k": ["32 purchases", "4.03K EGP cost", "ROAS 12.81"]}, {"g": "Google", "i": "images/proof/14-shipping-company-saudi-arabia.jpg", "t": "Shipping company · Saudi Arabia", "d": "YouTube video campaign for awareness and clicks, billed in riyals.", "k": ["15.1M impressions", "236K clicks", "CPC SAR 0.43"]}, {"g": "TikTok", "i": "images/proof/15-fashion-brand-tiktok.jpg", "t": "Fashion brand · TikTok", "d": "Sales campaign for an Egyptian fashion brand.", "k": ["392 conversions", "9,749 EGP cost", "681K impressions"]}, {"g": "TikTok", "i": "images/proof/16-fashion-brand-tiktok-ad-groups.jpg", "t": "Fashion brand · TikTok ad groups", "d": "Ad group breakdown. The best ad group converted at 8.05 EGP per conversion.", "k": ["CTR up to 1.37%", "CPA from 8.05 EGP", "5 ad groups"]}, {"g": "TikTok", "i": "images/proof/17-tiktok-account-overview.jpg", "t": "TikTok · account overview", "d": "A second TikTok account running four active ad groups.", "k": ["30.5K EGP cost", "1.2M impressions", "10,839 clicks"]}, {"g": "Shopify", "i": "images/proof/18-fashion-brand-shopify.jpg", "t": "Fashion brand · Shopify", "d": "Year-to-date store results while I ran the paid side.", "k": ["42.88M EGP sales", "49,989 orders", "CR 1.92%"]}, {"g": "Shopify", "i": "images/proof/19-perfume-brand-shopify.jpg", "t": "Perfume brand · Shopify", "d": "Jan 2024 to Dec 2025, store-wide.", "k": ["40.72M EGP sales", "14,481 orders", "1.11M sessions"]}, {"g": "Shopify", "i": "images/proof/20-perfume-brand-shopify-sales-breakdown.jpg", "t": "Perfume brand · Shopify sales breakdown", "d": "Gross sales, discounts and net sales for a perfume store.", "k": ["27.3M EGP gross", "9,899 orders", "11.3% returning"]}, {"g": "Shopify", "i": "images/proof/21-fashion-store-total-sales.jpg", "t": "Fashion store · total sales", "d": "Two years of total sales. Peak month around EGP 6.6M in spring 2025.", "k": ["39.5M EGP", "Apr 2024–Apr 2026"]}, {"g": "Shopify", "i": "images/proof/22-electronics-store-shopify.jpg", "t": "Electronics store · Shopify", "d": "Dec 2024 to Jan 2025 holiday season.", "k": ["1.81M EGP gross", "816 orders", "127,905 sessions"]}, {"g": "Shopify", "i": "images/proof/23-local-clothing-brand-shopify.jpg", "t": "Local clothing brand · Shopify", "d": "Nov 2024 to Jan 2025. Sessions up 159.6% on the previous period.", "k": ["725,958 EGP", "795 orders", "+159.6% sessions"]}, {"g": "WooCommerce", "i": "images/proof/24-perfume-brand-woocommerce.jpg", "t": "Perfume brand · WooCommerce", "d": "Full year 2024 on a WordPress store.", "k": ["3,591 orders", "6,594 products sold", "ROAS 5.9"]}, {"g": "WooCommerce", "i": "images/proof/25-cosmetics-brand-woocommerce.jpg", "t": "Cosmetics brand · WooCommerce", "d": "Sep 2024 to Jan 2025.", "k": ["1,832 orders", "1.7M EGP", "ROAS 8"]}, {"g": "Lightfunnels", "i": "images/proof/26-handbag-brand-lightfunnels.jpg", "t": "Handbag brand · Lightfunnels", "d": "Funnel store for women's bags. Conversion rate above 3%.", "k": ["1.59M EGP sales", "2,111 orders", "CR 3.17%"]}, {"g": "Analytics", "i": "images/proof/27-ga4-sales-overview.jpg", "t": "GA4 · sales overview", "d": "Revenue tracked in Google Analytics 4, Aug to Nov 2024.", "k": ["959K revenue", "GA4 e-commerce", "Aug–Nov 2024"]}, {"g": "Analytics", "i": "images/proof/28-ga4-users-report.jpg", "t": "GA4 · users report", "d": "Traffic and engagement tracked in Arabic GA4.", "k": ["16K users", "270K events"]}, {"g": "Analytics", "i": "images/proof/29-microsoft-clarity-behaviour.jpg", "t": "Microsoft Clarity · behaviour", "d": "Session recordings and heatmaps used to fix landing pages.", "k": ["824K sessions", "638K unique users", "33.8% scroll depth"]}, {"g": "Analytics", "i": "images/proof/30-microsoft-clarity-funnel-events.jpg", "t": "Microsoft Clarity · funnel events", "d": "Tracking the steps from product view to checkout.", "k": ["20,765 add to cart", "8,856 checkout", "7,571 begin checkout"]}];
const pg=["All",...new Set(rc.map(r=>r.g))];let pcur="All";
const pf=document.getElementById('pfilters'),rg=document.getElementById('receipts');
function rrender(){
  pf.innerHTML=pg.map(p=>`<button type="button" class="chip" aria-pressed="${p===pcur}" data-p="${p}">${p} <span class="mono" style="opacity:.6">${p==="All"?rc.length:rc.filter(r=>r.g===p).length}</span></button>`).join('');
  rg.innerHTML=rc.map((r,k)=>(pcur==="All"||r.g===pcur)?`<button type="button" class="receipt" data-k="${k}"><img src="${r.i}" alt="${r.t} screenshot"><div class="body"><span class="g">${r.g}</span><b>${r.t}</b><p>${r.d}</p><div class="pills">${r.k.map(x=>`<span>${x}</span>`).join('')}</div></div></button>`:'').join('');
}
pf.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;pcur=b.dataset.p;rrender()});
rrender();
const dlg=document.getElementById('zoom'),zi=document.getElementById('zoom-img');
rg.addEventListener('click',e=>{const b=e.target.closest('.receipt');if(!b)return;const r=rc[b.dataset.k];zi.src=r.i;zi.alt=r.t;document.getElementById('zoom-t').textContent=r.t;document.getElementById('zoom-d').textContent=r.d;document.getElementById('zoom-k').innerHTML=r.k.map(x=>`<span>${x}</span>`).join('');dlg.showModal()});
document.getElementById('zoom-close').onclick=()=>dlg.close();
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});

document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',()=>{
  const v=b.dataset.copy;
  navigator.clipboard.writeText(v).then(()=>{b.textContent='Copied'},()=>{const s=window.getSelection(),r=document.createRange();r.selectNodeContents(b.previousElementSibling);s.removeAllRanges();s.addRange(r);b.textContent='Selected'});
  setTimeout(()=>b.textContent='Copy',1600);
}));
