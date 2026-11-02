(function(){
"use strict";
var WA_NUMBER="201001452437";
var WA_TEXT="Hi Hesham, I saw your portfolio and I'd like to talk about ads for my brand.";
var waUrl="https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(WA_TEXT);
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=waUrl;a.target="_blank";a.rel="noopener"});

var yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();

/* intro runs once, then the class is removed so later hovers feel normal */
setTimeout(function(){document.body.classList.remove("intro")},4200);

/* nav border + mobile CTA bar */
var nav=document.querySelector(".nav"),mbar=document.querySelector(".mbar");
function onScroll(){var y=window.scrollY;nav.classList.toggle("scrolled",y>8);if(mbar)mbar.classList.toggle("show",y>520)}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();

/* active link */
var links=[].slice.call(document.querySelectorAll(".links a"));
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});
  links.forEach(function(l){var s=document.querySelector(l.getAttribute("href"));if(s)io.observe(s)});
}

/* counters: count up when they come into view */
var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function fmt(v,dec,suf){return (dec?v.toFixed(dec):Math.round(v).toLocaleString("en-US"))+(suf||"")}
function run(el,delay){
  if(el.dataset.done)return;el.dataset.done="1";
  var to=parseFloat(el.dataset.to),dec=+(el.dataset.dec||0),suf=el.dataset.suf||"";
  if(reduce){el.textContent=fmt(to,dec,suf);return}
  var t0=performance.now()+delay,d=1400;
  el.textContent=fmt(0,dec,suf);
  (function step(t){var p=Math.min(1,Math.max(0,(t-t0)/d)),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e,dec,suf);if(p<1)requestAnimationFrame(step)})(performance.now());
}
var cnts=[].slice.call(document.querySelectorAll(".cnt"));
if("IntersectionObserver" in window){
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target,e.target.closest(".hero")?1200:0);co.unobserve(e.target)}})},{threshold:.4});
  cnts.forEach(function(c){co.observe(c)});
}

/* chips follow the mouse a little */
var stage=document.querySelector(".stage");
if(stage&&!reduce){
  var chips=[].slice.call(stage.querySelectorAll(".chip"));
  stage.addEventListener("pointermove",function(e){var r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    chips.forEach(function(c,i){var k=(i%2?-1:1)*(8+i*3);c.style.transform="translate("+(x*k)+"px,"+(y*k)+"px)"})});
  stage.addEventListener("pointerleave",function(){chips.forEach(function(c){c.style.transform=""})});
}

/* campaigns table */
var camps=[
["Conversion · Adam video","Nov 2025",3786,82.34,1490589.72,4.78],
["Conversion · Ai video","Jul 2025",3656,72.00,1369712.89,5.20],
["Conversion · High fast scale","May 2025",2082,60.74,684720.03,5.41],
["Conversion · 6 May photo","May 2025",1919,55.02,608140.39,5.76],
["Conversion · 12 May","May 2025",1775,54.39,563394.05,5.84],
["Conversion · Ai video, New Year","Dec 2025",1054,79.89,354033.00,4.20],
["DReg Adam · 15 Oct","Oct 2025",801,78.06,262349.00,4.20],
["DReg Adam · Black Friday","Nov 2025",695,90.45,221708.33,3.53],
["CMP · image","Jul 2026",631,89.74,254631.50,4.50],
["Conversion · old pixel","Jun 2025",544,67.42,190163.23,5.19],
["Conversion · 5 May","May 2025",539,59.98,186988.95,5.78],
["Conversion · 28 Feb","Mar 2026",531,76.89,199189.00,4.88],
["Conversion · 11 Nov","Nov 2025",501,86.76,183306.00,4.22],
["Conversion · 4 May","May 2025",490,57.57,174370.01,6.18]];
function n(v,d){return v.toLocaleString("en-US",{minimumFractionDigits:d||0,maximumFractionDigits:d||0})}
var tb=document.getElementById("camp");
if(tb)tb.innerHTML=camps.map(function(c){return "<tr><td>"+c[0]+"</td><td>"+c[1]+"</td><td>"+n(c[2])+'<span class="bar" style="width:'+Math.round(c[2]/3786*60)+'px"></span></td><td>'+n(c[3],2)+"</td><td>"+n(c[4],2)+'</td><td class="'+(c[5]>=5.5?"hi":"")+'">'+c[5].toFixed(2)+"</td></tr>"}).join("");

/* filters helper */
function filters(box,groups,counts,cur,onPick){
  function draw(){box.innerHTML=groups.map(function(g){return '<button type="button" class="chipf" aria-pressed="'+(g===cur)+'" data-g="'+g+'">'+g+"<span>"+counts(g)+"</span></button>"}).join("")}
  box.addEventListener("click",function(e){var b=e.target.closest(".chipf");if(!b)return;cur=b.dataset.g;draw();onPick(cur)});
  draw();onPick(cur);
}
function uniq(a){return a.filter(function(v,i){return a.indexOf(v)===i})}

/* case files */
var cases=[
{p:"Meta",t:"Perfume brand",w:"Egypt",o:"Sales",n:"2,123",s:"4.8M EGP",r:"4.0"},
{p:"Meta",t:"Perfume brand",w:"Egypt",o:"Sales",n:"1,371",s:"3.12M EGP",r:"4.4"},
{p:"Meta",t:"Electronics store",w:"UAE",o:"Sales",n:"1,156",s:"7.5K",r:"4.0"},
{p:"Meta",t:"Aesthetic clinic",w:"Jordan",o:"WhatsApp, Messenger, IG DMs",n:"—",s:"Leads",r:"—"},
{p:"Meta",t:"Medical services",w:"Iraq",o:"WhatsApp leads",n:"—",s:"Leads",r:"—"},
{p:"Google",t:"Perfume brand",w:"Egypt",o:"Search, Sales",n:"119",s:"324K EGP",r:"13"},
{p:"Google",t:"Perfume brand",w:"Egypt",o:"Search, Sales",n:"43",s:"116K EGP",r:"15"},
{p:"Google",t:"Perfume brand",w:"Egypt",o:"Search, Sales",n:"32",s:"86K EGP",r:"12.8"},
{p:"Google",t:"Shipping company",w:"Saudi Arabia",o:"YouTube video views",n:"—",s:"Awareness",r:"—"},
{p:"TikTok",t:"Fashion brand",w:"Egypt",o:"Sales",n:"392",s:"348K EGP",r:"35"},
{p:"Shopify",t:"Fashion brand",w:"Egypt",o:"Store total",n:"49,989",s:"42M EGP",r:"CR 1.92%"},
{p:"Shopify",t:"Perfume brand",w:"Egypt",o:"Store total",n:"14,481",s:"40M EGP",r:"6"},
{p:"Shopify",t:"Perfume brand",w:"Egypt",o:"Store total",n:"9,899",s:"27M EGP",r:"—"},
{p:"Shopify",t:"Electronics store",w:"Egypt",o:"Store total",n:"816",s:"1.8M EGP",r:"9"},
{p:"Shopify",t:"Local clothing brand",w:"Egypt",o:"Store total",n:"795",s:"725K EGP",r:"7"},
{p:"WooCommerce",t:"Perfume brand",w:"Egypt",o:"Store total",n:"3,591",s:"5.8M EGP",r:"5.9"},
{p:"WooCommerce",t:"Cosmetics brand",w:"Egypt",o:"Store total",n:"1,832",s:"1.7M EGP",r:"8"},
{p:"Lightfunnels",t:"Bags brand",w:"Egypt",o:"Store total",n:"2,111",s:"1.5M EGP",r:"7"}];
var store={Shopify:1,WooCommerce:1,Lightfunnels:1};
var cg=document.getElementById("case-grid");
if(cg)filters(document.getElementById("case-filters"),["All"].concat(uniq(cases.map(function(c){return c.p}))),function(g){return g==="All"?cases.length:cases.filter(function(c){return c.p===g}).length},"All",function(cur){
  cg.innerHTML=cases.filter(function(c){return cur==="All"||c.p===cur}).map(function(c){
    var lead=c.s==="Leads"||c.s==="Awareness";
    return '<article class="case"><div class="top"><span class="pf">'+c.p+'</span><span class="where">'+c.w+'</span></div><div><h3>'+c.t+'</h3><p class="where">'+c.o+'</p></div><div class="figs"><div><b>'+c.s+"</b><span>"+(lead?"Goal":"Sales")+"</span></div><div><b>"+c.n+"</b><span>"+(store[c.p]?"Orders":"Purchases")+'</span></div><div class="r"><b>'+c.r+"</b><span>"+(c.r.indexOf("CR")===0?"Conv.":"ROAS")+"</span></div></div></article>"}).join("");
});

/* screenshots */
var proof=[
{
"g": "Meta",
"i": "images/proof/01-meta-whole-account-lifetime.jpg",
"t": "Meta · whole account, lifetime",
"d": "Every campaign in one Meta account, Aug 2023 to Sep 2026. 962 campaigns, sorted by purchases.",
"k": [
"13.65M EGP value",
"36,554 purchases",
"ROAS 4.62"
]
},
{
"g": "Meta",
"i": "images/proof/02-meta-august-2026.jpg",
"t": "Meta · August 2026",
"d": "One month of the same account at full scale.",
"k": [
"1.84M EGP",
"4,196 purchases",
"ROAS 4.43"
]
},
{
"g": "Meta",
"i": "images/proof/03-meta-september-2026-1-26.jpg",
"t": "Meta · September 2026 (1–26)",
"d": "The month after. Volume held with cost per purchase under 100 EGP.",
"k": [
"1.60M EGP",
"3,968 purchases",
"CPP 96.95"
]
},
{
"g": "Meta",
"i": "images/proof/04-meta-top-ad-sets.jpg",
"t": "Meta · top ad sets",
"d": "Ad sets ranked by purchases. The lead ad set alone brought 4,245 purchases.",
"k": [
"11,782 purchases",
"CPP 90.95",
"ROAS 5.07"
]
},
{
"g": "Meta",
"i": "images/proof/05-perfume-brand-egypt.jpg",
"t": "Perfume brand · Egypt",
"d": "Sales campaigns launched Feb–Mar 2025 for a local perfume brand.",
"k": [
"3.13M EGP value",
"1,371 purchases",
"ROAS 4.44"
]
},
{
"g": "Meta",
"i": "images/proof/06-perfume-brand-egypt-scale-phase.jpg",
"t": "Perfume brand · Egypt, scale phase",
"d": "Same category, bigger budgets. Average order above 2,000 EGP.",
"k": [
"4.80M EGP value",
"2,123 purchases",
"CPP 576 EGP"
]
},
{
"g": "Meta",
"i": "images/proof/07-electronics-store-uae.jpg",
"t": "Electronics store · UAE",
"d": "Website purchase campaigns billed in US dollars.",
"k": [
"$47,517 value",
"1,156 purchases",
"CPP $11.95"
]
},
{
"g": "Meta",
"i": "images/proof/08-medical-services-iraq.jpg",
"t": "Medical services · Iraq",
"d": "WhatsApp messaging campaigns. Cost per conversation from 3.27 EGP.",
"k": [
"115.5K EGP spend",
"WhatsApp leads",
"3,217 comments"
]
},
{
"g": "Meta",
"i": "images/proof/09-messaging-campaigns-egypt.jpg",
"t": "Messaging campaigns · Egypt",
"d": "Messenger and WhatsApp campaigns at scale, with daily budgets up to 1,000 EGP.",
"k": [
"288.5K EGP spend",
"3.96M impressions",
"from 4.35 EGP/lead"
]
},
{
"g": "Meta",
"i": "images/proof/10-messaging-campaigns-usd-account.jpg",
"t": "Messaging campaigns · USD account",
"d": "Low-budget message campaigns on $2–$10 daily budgets.",
"k": [
"$727 spend",
"from $0.12/lead",
"1,000+ conversations"
]
},
{
"g": "Google",
"i": "images/proof/11-perfume-brand-google-search.jpg",
"t": "Perfume brand · Google Search",
"d": "Search campaign for a perfume brand in Egypt. Every pound spent returned about 12.6.",
"k": [
"324K EGP value",
"119 purchases",
"25.7K EGP cost"
]
},
{
"g": "Google",
"i": "images/proof/12-perfume-brand-google-search.jpg",
"t": "Perfume brand · Google Search",
"d": "A second search campaign for the same category.",
"k": [
"43 purchases",
"4.81K EGP cost",
"ROAS 15.56"
]
},
{
"g": "Google",
"i": "images/proof/13-perfume-brand-google-search.jpg",
"t": "Perfume brand · Google Search",
"d": "Small budget, high return. 362 clicks turned into 32 purchases.",
"k": [
"32 purchases",
"4.03K EGP cost",
"ROAS 12.81"
]
},
{
"g": "Google",
"i": "images/proof/14-shipping-company-saudi-arabia.jpg",
"t": "Shipping company · Saudi Arabia",
"d": "YouTube video campaign for awareness and clicks, billed in riyals.",
"k": [
"15.1M impressions",
"236K clicks",
"CPC SAR 0.43"
]
},
{
"g": "TikTok",
"i": "images/proof/15-fashion-brand-tiktok.jpg",
"t": "Fashion brand · TikTok",
"d": "Sales campaign for an Egyptian fashion brand.",
"k": [
"392 conversions",
"9,749 EGP cost",
"681K impressions"
]
},
{
"g": "TikTok",
"i": "images/proof/16-fashion-brand-tiktok-ad-groups.jpg",
"t": "Fashion brand · TikTok ad groups",
"d": "Ad group breakdown. The best ad group converted at 8.05 EGP per conversion.",
"k": [
"CTR up to 1.37%",
"CPA from 8.05 EGP",
"5 ad groups"
]
},
{
"g": "TikTok",
"i": "images/proof/17-tiktok-account-overview.jpg",
"t": "TikTok · account overview",
"d": "A second TikTok account running four active ad groups.",
"k": [
"30.5K EGP cost",
"1.2M impressions",
"10,839 clicks"
]
},
{
"g": "Shopify",
"i": "images/proof/18-fashion-brand-shopify.jpg",
"t": "Fashion brand · Shopify",
"d": "Year-to-date store results while I ran the paid side.",
"k": [
"42.88M EGP sales",
"49,989 orders",
"CR 1.92%"
]
},
{
"g": "Shopify",
"i": "images/proof/19-perfume-brand-shopify.jpg",
"t": "Perfume brand · Shopify",
"d": "Jan 2024 to Dec 2025, store-wide.",
"k": [
"40.72M EGP sales",
"14,481 orders",
"1.11M sessions"
]
},
{
"g": "Shopify",
"i": "images/proof/20-perfume-brand-shopify-sales-breakdown.jpg",
"t": "Perfume brand · Shopify sales breakdown",
"d": "Gross sales, discounts and net sales for a perfume store.",
"k": [
"27.3M EGP gross",
"9,899 orders",
"11.3% returning"
]
},
{
"g": "Shopify",
"i": "images/proof/21-fashion-store-total-sales.jpg",
"t": "Fashion store · total sales",
"d": "Two years of total sales. Peak month around EGP 6.6M in spring 2025.",
"k": [
"39.5M EGP",
"Apr 2024–Apr 2026"
]
},
{
"g": "Shopify",
"i": "images/proof/22-electronics-store-shopify.jpg",
"t": "Electronics store · Shopify",
"d": "Dec 2024 to Jan 2025 holiday season.",
"k": [
"1.81M EGP gross",
"816 orders",
"127,905 sessions"
]
},
{
"g": "Shopify",
"i": "images/proof/23-local-clothing-brand-shopify.jpg",
"t": "Local clothing brand · Shopify",
"d": "Nov 2024 to Jan 2025. Sessions up 159.6% on the previous period.",
"k": [
"725,958 EGP",
"795 orders",
"+159.6% sessions"
]
},
{
"g": "WooCommerce",
"i": "images/proof/24-perfume-brand-woocommerce.jpg",
"t": "Perfume brand · WooCommerce",
"d": "Full year 2024 on a WordPress store.",
"k": [
"3,591 orders",
"6,594 products sold",
"ROAS 5.9"
]
},
{
"g": "WooCommerce",
"i": "images/proof/25-cosmetics-brand-woocommerce.jpg",
"t": "Cosmetics brand · WooCommerce",
"d": "Sep 2024 to Jan 2025.",
"k": [
"1,832 orders",
"1.7M EGP",
"ROAS 8"
]
},
{
"g": "Lightfunnels",
"i": "images/proof/26-handbag-brand-lightfunnels.jpg",
"t": "Handbag brand · Lightfunnels",
"d": "Funnel store for women's bags. Conversion rate above 3%.",
"k": [
"1.59M EGP sales",
"2,111 orders",
"CR 3.17%"
]
},
{
"g": "Analytics",
"i": "images/proof/27-ga4-sales-overview.jpg",
"t": "GA4 · sales overview",
"d": "Revenue tracked in Google Analytics 4, Aug to Nov 2024.",
"k": [
"959K revenue",
"GA4 e-commerce",
"Aug–Nov 2024"
]
},
{
"g": "Analytics",
"i": "images/proof/28-ga4-users-report.jpg",
"t": "GA4 · users report",
"d": "Traffic and engagement tracked in Arabic GA4.",
"k": [
"16K users",
"270K events"
]
},
{
"g": "Analytics",
"i": "images/proof/29-microsoft-clarity-behaviour.jpg",
"t": "Microsoft Clarity · behaviour",
"d": "Session recordings and heatmaps used to fix landing pages.",
"k": [
"824K sessions",
"638K unique users",
"33.8% scroll depth"
]
},
{
"g": "Analytics",
"i": "images/proof/30-microsoft-clarity-funnel-events.jpg",
"t": "Microsoft Clarity · funnel events",
"d": "Tracking the steps from product view to checkout.",
"k": [
"20,765 add to cart",
"8,856 checkout",
"7,571 begin checkout"
]
}
];
var pg=document.getElementById("proof-grid");
function kchips(k){return k.map(function(x){return "<span>"+x+"</span>"}).join("")}
if(pg)filters(document.getElementById("proof-filters"),["All"].concat(uniq(proof.map(function(r){return r.g}))),function(g){return g==="All"?proof.length:proof.filter(function(r){return r.g===g}).length},"All",function(cur){
  pg.innerHTML=proof.map(function(r,i){return (cur==="All"||r.g===cur)?'<button type="button" class="pcard" data-i="'+i+'"><img src="'+r.i+'" alt="'+r.t+' screenshot" loading="lazy"><div class="b"><span class="tag">'+r.g+"</span><h3>"+r.t+"</h3><p>"+r.d+'</p><div class="k">'+kchips(r.k)+"</div></div></button>":""}).join("");
});
var dlg=document.getElementById("zoom");
if(pg&&dlg&&dlg.showModal){
  pg.addEventListener("click",function(e){var b=e.target.closest(".pcard");if(!b)return;var r=proof[b.dataset.i];
    var im=document.getElementById("zoom-img");im.src=r.i;im.alt=r.t;
    document.getElementById("zoom-t").textContent=r.t;document.getElementById("zoom-d").textContent=r.d;document.getElementById("zoom-k").innerHTML=kchips(r.k);
    dlg.showModal()});
  document.getElementById("zoom-close").addEventListener("click",function(){dlg.close()});
  dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});
}

/* copy buttons */
document.querySelectorAll("[data-copy]").forEach(function(b){b.addEventListener("click",function(){
  var v=b.dataset.copy,label=b.textContent;
  function done(t){b.textContent=t;setTimeout(function(){b.textContent=label},1600)}
  if(navigator.clipboard){navigator.clipboard.writeText(v).then(function(){done("Copied")},function(){done(v)})}else{done(v)}
})});
})();
