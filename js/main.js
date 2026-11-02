(function(){
"use strict";
var WA_NUMBER="201001452437";
var WA_TEXT="Hi Hesham, I saw your portfolio and I'd like to talk about ads for my brand.";
var waUrl="https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(WA_TEXT);
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=waUrl;a.target="_blank";a.rel="noopener"});
var yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
setTimeout(function(){document.body.classList.remove("intro")},4200);

var nav=document.querySelector(".nav"),mbar=document.querySelector(".mbar");
function onScroll(){var y=window.scrollY;nav.classList.toggle("scrolled",y>8);if(mbar)mbar.classList.toggle("show",y>520)}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();

var links=[].slice.call(document.querySelectorAll(".links a"));
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});
  links.forEach(function(l){var s=document.querySelector(l.getAttribute("href"));if(s)io.observe(s)});
}

var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function fmt(v,dec,suf){return (dec?v.toFixed(dec):Math.round(v).toLocaleString("en-US"))+(suf||"")}
function countUp(el){
  var to=parseFloat(el.dataset.to),dec=+(el.dataset.dec||0),suf=el.dataset.suf||"";
  if(reduce)return;
  var t0=performance.now(),d=1400;
  (function step(t){var p=Math.min(1,Math.max(0,(t-t0)/d)),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e,dec,suf);if(p<1)requestAnimationFrame(step)})(t0);
}
if("IntersectionObserver" in window){
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){countUp(e.target);co.unobserve(e.target)}})},{threshold:.5});
  document.querySelectorAll(".cnt").forEach(function(c){co.observe(c)});
}

var stage=document.querySelector(".stage");
if(stage&&!reduce){
  var floaters=[].slice.call(stage.querySelectorAll(".chip"));
  stage.addEventListener("pointermove",function(e){var r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    floaters.forEach(function(c,i){var k=(i%2?-1:1)*(8+i*3);c.style.transform="translate("+(x*k)+"px,"+(y*k)+"px)"})});
  stage.addEventListener("pointerleave",function(){floaters.forEach(function(c){c.style.transform=""})});
}

/* screenshots: 6 shown first, the rest behind a button */
var proof=[
{
"g": "Meta",
"i": "images/proof/01-meta-whole-account-lifetime.jpg",
"t": "Meta · whole account, lifetime",
"d": "Every campaign in one Meta account, Aug 2023 to Sep 2026. 962 campaigns, sorted by purchases."
},
{
"g": "Meta",
"i": "images/proof/02-meta-august-2026.jpg",
"t": "Meta · August 2026",
"d": "One month of the same account at full scale."
},
{
"g": "Meta",
"i": "images/proof/03-meta-september-2026-1-26.jpg",
"t": "Meta · September 2026 (1–26)",
"d": "The month after. Volume held with cost per purchase under 100 EGP."
},
{
"g": "Meta",
"i": "images/proof/04-meta-top-ad-sets.jpg",
"t": "Meta · top ad sets",
"d": "Ad sets ranked by purchases. The lead ad set alone brought 4,245 purchases."
},
{
"g": "Meta",
"i": "images/proof/05-perfume-brand-egypt.jpg",
"t": "Perfume brand · Egypt",
"d": "Sales campaigns launched Feb–Mar 2025 for a local perfume brand."
},
{
"g": "Meta",
"i": "images/proof/06-perfume-brand-egypt-scale-phase.jpg",
"t": "Perfume brand · Egypt, scale phase",
"d": "Same category, bigger budgets. Average order above 2,000 EGP."
},
{
"g": "Meta",
"i": "images/proof/07-electronics-store-uae.jpg",
"t": "Electronics store · UAE",
"d": "Website purchase campaigns billed in US dollars."
},
{
"g": "Meta",
"i": "images/proof/08-medical-services-iraq.jpg",
"t": "Medical services · Iraq",
"d": "WhatsApp messaging campaigns. Cost per conversation from 3.27 EGP."
},
{
"g": "Meta",
"i": "images/proof/09-messaging-campaigns-egypt.jpg",
"t": "Messaging campaigns · Egypt",
"d": "Messenger and WhatsApp campaigns at scale, with daily budgets up to 1,000 EGP."
},
{
"g": "Meta",
"i": "images/proof/10-messaging-campaigns-usd-account.jpg",
"t": "Messaging campaigns · USD account",
"d": "Low-budget message campaigns on $2–$10 daily budgets."
},
{
"g": "Google",
"i": "images/proof/11-perfume-brand-google-search.jpg",
"t": "Perfume brand · Google Search",
"d": "Search campaign for a perfume brand in Egypt. Every pound spent returned about 12.6."
},
{
"g": "Google",
"i": "images/proof/12-perfume-brand-google-search.jpg",
"t": "Perfume brand · Google Search",
"d": "A second search campaign for the same category."
},
{
"g": "Google",
"i": "images/proof/13-perfume-brand-google-search.jpg",
"t": "Perfume brand · Google Search",
"d": "Small budget, high return. 362 clicks turned into 32 purchases."
},
{
"g": "Google",
"i": "images/proof/14-shipping-company-saudi-arabia.jpg",
"t": "Shipping company · Saudi Arabia",
"d": "YouTube video campaign for awareness and clicks, billed in riyals."
},
{
"g": "TikTok",
"i": "images/proof/15-fashion-brand-tiktok.jpg",
"t": "Fashion brand · TikTok",
"d": "Sales campaign for an Egyptian fashion brand."
},
{
"g": "TikTok",
"i": "images/proof/16-fashion-brand-tiktok-ad-groups.jpg",
"t": "Fashion brand · TikTok ad groups",
"d": "Ad group breakdown. The best ad group converted at 8.05 EGP per conversion."
},
{
"g": "TikTok",
"i": "images/proof/17-tiktok-account-overview.jpg",
"t": "TikTok · account overview",
"d": "A second TikTok account running four active ad groups."
},
{
"g": "Shopify",
"i": "images/proof/18-fashion-brand-shopify.jpg",
"t": "Fashion brand · Shopify",
"d": "Year-to-date store results while I ran the paid side."
},
{
"g": "Shopify",
"i": "images/proof/19-perfume-brand-shopify.jpg",
"t": "Perfume brand · Shopify",
"d": "Jan 2024 to Dec 2025, store-wide."
},
{
"g": "Shopify",
"i": "images/proof/20-perfume-brand-shopify-sales-breakdown.jpg",
"t": "Perfume brand · Shopify sales breakdown",
"d": "Gross sales, discounts and net sales for a perfume store."
},
{
"g": "Shopify",
"i": "images/proof/21-fashion-store-total-sales.jpg",
"t": "Fashion store · total sales",
"d": "Two years of total sales. Peak month around EGP 6.6M in spring 2025."
},
{
"g": "Shopify",
"i": "images/proof/22-electronics-store-shopify.jpg",
"t": "Electronics store · Shopify",
"d": "Dec 2024 to Jan 2025 holiday season."
},
{
"g": "Shopify",
"i": "images/proof/23-local-clothing-brand-shopify.jpg",
"t": "Local clothing brand · Shopify",
"d": "Nov 2024 to Jan 2025. Sessions up 159.6% on the previous period."
},
{
"g": "WooCommerce",
"i": "images/proof/24-perfume-brand-woocommerce.jpg",
"t": "Perfume brand · WooCommerce",
"d": "Full year 2024 on a WordPress store."
},
{
"g": "WooCommerce",
"i": "images/proof/25-cosmetics-brand-woocommerce.jpg",
"t": "Cosmetics brand · WooCommerce",
"d": "Sep 2024 to Jan 2025."
},
{
"g": "Lightfunnels",
"i": "images/proof/26-handbag-brand-lightfunnels.jpg",
"t": "Handbag brand · Lightfunnels",
"d": "Funnel store for women's bags. Conversion rate above 3%."
},
{
"g": "Analytics",
"i": "images/proof/27-ga4-sales-overview.jpg",
"t": "GA4 · sales overview",
"d": "Revenue tracked in Google Analytics 4, Aug to Nov 2024."
},
{
"g": "Analytics",
"i": "images/proof/28-ga4-users-report.jpg",
"t": "GA4 · users report",
"d": "Traffic and engagement tracked in Arabic GA4."
},
{
"g": "Analytics",
"i": "images/proof/29-microsoft-clarity-behaviour.jpg",
"t": "Microsoft Clarity · behaviour",
"d": "Session recordings and heatmaps used to fix landing pages."
},
{
"g": "Analytics",
"i": "images/proof/30-microsoft-clarity-funnel-events.jpg",
"t": "Microsoft Clarity · funnel events",
"d": "Tracking the steps from product view to checkout."
}
];
var featured=[0,1,17,14,25,28];
var grid=document.getElementById("proof-grid"),more=document.getElementById("proof-more"),showAll=false;
function card(i){var r=proof[i];return '<button type="button" class="pcard" data-proof="'+i+'"><span class="im"><img src="'+r.i+'" alt="'+r.t+' screenshot" loading="lazy"></span><span><small>'+r.g+"</small><b>"+r.t+"</b><span>"+r.d+"</span></span></button>"}
function drawProof(){
  var order=showAll?featured.concat(proof.map(function(_,i){return i}).filter(function(i){return featured.indexOf(i)<0})):featured;
  grid.innerHTML=order.map(card).join("");
  more.textContent=showAll?"Show fewer":"See all "+proof.length+" screenshots";
}
if(grid){drawProof();more.addEventListener("click",function(){showAll=!showAll;drawProof();if(!showAll)document.getElementById("proof").scrollIntoView()})}

var dlg=document.getElementById("zoom");
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-proof]");if(!b||!dlg||!dlg.showModal)return;
  var r=proof[+b.dataset.proof],im=document.getElementById("zoom-img");
  im.src=r.i;im.alt=r.t;document.getElementById("zoom-t").textContent=r.t;document.getElementById("zoom-d").textContent=r.d;dlg.showModal();
});
if(dlg){document.getElementById("zoom-close").addEventListener("click",function(){dlg.close()});dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()})}

/* testimonials: add them here and the section shows itself
   {text:"...", name:"Name", role:"Owner, Brand"} */
var quotes=[];
if(quotes.length){
  var box=document.getElementById("quotes");
  box.innerHTML=quotes.map(function(q){return '<figure class="quote"><p>“'+q.text+'”</p><footer><b>'+q.name+"</b>"+q.role+"</footer></figure>"}).join("");
  document.getElementById("words").hidden=false;
}
})();
