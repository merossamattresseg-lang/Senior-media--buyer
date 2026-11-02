(function(){
"use strict";
var WA_NUMBER="201118039771";
var LANG=document.documentElement.lang==="ar"?"ar":"en";
var AR={"more_all": "شوف الـ 30 سكرين", "more_less": "اعرض أقل", "waText": "أهلا هشام، شفت البورتفوليو بتاعك وعايز أتكلم معاك عن إعلانات البراند بتاعي.", "leadIntro": "أهلا هشام، عايز أتكلم معاك عن إعلانات البراند بتاعي.", "lBrand": "البراند", "lLink": "الموقع", "lBudget": "الميزانية الشهرية", "lPf": "المنصات", "lPlan": "الخدمة", "fo1": "أقل من 100 ألف جنيه", "fo2": "من 100 ألف لـ 500 ألف جنيه", "fo3": "من 500 ألف لـ 2 مليون جنيه", "fo4": "أكتر من 2 مليون جنيه", "plan_Monthly ad management": "إدارة إعلانات شهرية", "plan_Audit & setup": "Audit وإعداد", "plan_Consulting": "استشارات"};
var PROOF=[{"g": "Meta", "i": "images/proof/01-meta-whole-account-lifetime.jpg", "t": "Meta · whole account, lifetime", "d": "Every campaign in one Meta account, Aug 2023 to Sep 2026. 962 campaigns, sorted by purchases."}, {"g": "Meta", "i": "images/proof/02-meta-august-2026.jpg", "t": "Meta · August 2026", "d": "One month of the same account at full scale."}, {"g": "Meta", "i": "images/proof/03-meta-september-2026-1-26.jpg", "t": "Meta · September 2026 (1–26)", "d": "The month after. Volume held with cost per purchase under 100 EGP."}, {"g": "Meta", "i": "images/proof/04-meta-top-ad-sets.jpg", "t": "Meta · top ad sets", "d": "Ad sets ranked by purchases. The lead ad set alone brought 4,245 purchases."}, {"g": "Meta", "i": "images/proof/05-perfume-brand-egypt.jpg", "t": "Perfume brand · Egypt", "d": "Sales campaigns launched Feb–Mar 2025 for a local perfume brand."}, {"g": "Meta", "i": "images/proof/06-perfume-brand-egypt-scale-phase.jpg", "t": "Perfume brand · Egypt, scale phase", "d": "Same category, bigger budgets. Average order above 2,000 EGP."}, {"g": "Meta", "i": "images/proof/07-electronics-store-uae.jpg", "t": "Electronics store · UAE", "d": "Website purchase campaigns billed in US dollars."}, {"g": "Meta", "i": "images/proof/08-medical-services-iraq.jpg", "t": "Medical services · Iraq", "d": "WhatsApp messaging campaigns. Cost per conversation from 3.27 EGP."}, {"g": "Meta", "i": "images/proof/09-messaging-campaigns-egypt.jpg", "t": "Messaging campaigns · Egypt", "d": "Messenger and WhatsApp campaigns at scale, with daily budgets up to 1,000 EGP."}, {"g": "Meta", "i": "images/proof/10-messaging-campaigns-usd-account.jpg", "t": "Messaging campaigns · USD account", "d": "Low-budget message campaigns on $2–$10 daily budgets."}, {"g": "Google", "i": "images/proof/11-perfume-brand-google-search.jpg", "t": "Perfume brand · Google Search", "d": "Search campaign for a perfume brand in Egypt. Every pound spent returned about 12.6."}, {"g": "Google", "i": "images/proof/12-perfume-brand-google-search.jpg", "t": "Perfume brand · Google Search", "d": "A second search campaign for the same category."}, {"g": "Google", "i": "images/proof/13-perfume-brand-google-search.jpg", "t": "Perfume brand · Google Search", "d": "Small budget, high return. 362 clicks turned into 32 purchases."}, {"g": "Google", "i": "images/proof/14-shipping-company-saudi-arabia.jpg", "t": "Shipping company · Saudi Arabia", "d": "YouTube video campaign for awareness and clicks, billed in riyals."}, {"g": "TikTok", "i": "images/proof/15-fashion-brand-tiktok.jpg", "t": "Fashion brand · TikTok", "d": "Sales campaign for an Egyptian fashion brand."}, {"g": "TikTok", "i": "images/proof/16-fashion-brand-tiktok-ad-groups.jpg", "t": "Fashion brand · TikTok ad groups", "d": "Ad group breakdown. The best ad group converted at 8.05 EGP per conversion."}, {"g": "TikTok", "i": "images/proof/17-tiktok-account-overview.jpg", "t": "TikTok · account overview", "d": "A second TikTok account running four active ad groups."}, {"g": "Shopify", "i": "images/proof/18-fashion-brand-shopify.jpg", "t": "Fashion brand · Shopify", "d": "Year-to-date store results while I ran the paid side."}, {"g": "Shopify", "i": "images/proof/19-perfume-brand-shopify.jpg", "t": "Perfume brand · Shopify", "d": "Jan 2024 to Dec 2025, store-wide."}, {"g": "Shopify", "i": "images/proof/20-perfume-brand-shopify-sales-breakdown.jpg", "t": "Perfume brand · Shopify sales breakdown", "d": "Gross sales, discounts and net sales for a perfume store."}, {"g": "Shopify", "i": "images/proof/21-fashion-store-total-sales.jpg", "t": "Fashion store · total sales", "d": "Two years of total sales. Peak month around EGP 6.6M in spring 2025."}, {"g": "Shopify", "i": "images/proof/22-electronics-store-shopify.jpg", "t": "Electronics store · Shopify", "d": "Dec 2024 to Jan 2025 holiday season."}, {"g": "Shopify", "i": "images/proof/23-local-clothing-brand-shopify.jpg", "t": "Local clothing brand · Shopify", "d": "Nov 2024 to Jan 2025. Sessions up 159.6% on the previous period."}, {"g": "WooCommerce", "i": "images/proof/24-perfume-brand-woocommerce.jpg", "t": "Perfume brand · WooCommerce", "d": "Full year 2024 on a WordPress store."}, {"g": "WooCommerce", "i": "images/proof/25-cosmetics-brand-woocommerce.jpg", "t": "Cosmetics brand · WooCommerce", "d": "Sep 2024 to Jan 2025."}, {"g": "Lightfunnels", "i": "images/proof/26-handbag-brand-lightfunnels.jpg", "t": "Handbag brand · Lightfunnels", "d": "Funnel store for women's bags. Conversion rate above 3%."}, {"g": "Analytics", "i": "images/proof/27-ga4-sales-overview.jpg", "t": "GA4 · sales overview", "d": "Revenue tracked in Google Analytics 4, Aug to Nov 2024."}, {"g": "Analytics", "i": "images/proof/28-ga4-users-report.jpg", "t": "GA4 · users report", "d": "Traffic and engagement tracked in Arabic GA4."}, {"g": "Analytics", "i": "images/proof/29-microsoft-clarity-behaviour.jpg", "t": "Microsoft Clarity · behaviour", "d": "Session recordings and heatmaps used to fix landing pages."}, {"g": "Analytics", "i": "images/proof/30-microsoft-clarity-funnel-events.jpg", "t": "Microsoft Clarity · funnel events", "d": "Tracking the steps from product view to checkout."}];
var AR_PROOF=[["Meta · كل الحملات من البداية", "كل الحملات في أكاونت Meta واحد من أغسطس 2023 لسبتمبر 2026. 962 حملة مترتبة بعدد المشتريات."], ["Meta · أغسطس 2026", "شهر واحد من نفس الأكاونت وهو شغال بأعلى ميزانية."], ["Meta · سبتمبر 2026 (1–26)", "الشهر اللي بعده. الحجم ثابت وتكلفة الشراء أقل من 100 جنيه."], ["Meta · أفضل Ad sets", "الـ Ad sets مترتبة بالمشتريات. أول واحدة لوحدها جابت 4,245 عملية شراء."], ["براند عطور · مصر", "حملات مبيعات لبراند عطور محلي في فبراير ومارس 2025."], ["براند عطور · مصر، مرحلة التوسع", "نفس المجال بميزانيات أكبر، ومتوسط الأوردر فوق 2,000 جنيه."], ["متجر إلكترونيات · الإمارات", "حملات مشتريات على الموقع بميزانية بالدولار."], ["خدمات طبية · العراق", "حملات رسايل واتساب، وتكلفة المحادثة تبدأ من 3.27 جنيه."], ["حملات رسايل · مصر", "حملات ماسنجر وواتساب بميزانيات يومية لحد 1,000 جنيه."], ["حملات رسايل · أكاونت بالدولار", "حملات رسايل بميزانيات يومية من 2 لـ 10 دولار."], ["براند عطور · Google Search", "حملة بحث لبراند عطور في مصر. كل جنيه اتصرف رجع حوالي 12.6."], ["براند عطور · Google Search", "حملة بحث تانية لنفس المجال."], ["براند عطور · Google Search", "ميزانية صغيرة ورجوع عالي. 362 ضغطة طلّعوا 32 عملية شراء."], ["شركة شحن · السعودية", "حملة فيديو على يوتيوب للانتشار والضغطات، بالريال."], ["براند فاشون · TikTok", "حملة مبيعات لبراند فاشون مصري."], ["براند فاشون · Ad groups على TikTok", "تفاصيل الـ Ad groups. أحسن واحدة كانت تكلفة التحويل فيها 8.05 جنيه."], ["TikTok · نظرة عامة على الأكاونت", "أكاونت TikTok تاني فيه 4 Ad groups شغالين."], ["براند فاشون · Shopify", "نتايج المتجر من أول السنة وأنا ماسك الإعلانات."], ["براند عطور · Shopify", "من يناير 2024 لديسمبر 2025 على مستوى المتجر كله."], ["براند عطور · تفاصيل مبيعات Shopify", "إجمالي المبيعات والخصومات وصافي المبيعات لمتجر عطور."], ["متجر فاشون · إجمالي المبيعات", "مبيعات سنتين. أعلى شهر كان حوالي 6.6 مليون جنيه في ربيع 2025."], ["متجر إلكترونيات · Shopify", "موسم الأعياد من ديسمبر 2024 ليناير 2025."], ["براند ملابس محلي · Shopify", "من نوفمبر 2024 ليناير 2025. الزيارات زادت 159.6%."], ["براند عطور · WooCommerce", "سنة 2024 كاملة على متجر ووردبريس."], ["براند كوزمتكس · WooCommerce", "من سبتمبر 2024 ليناير 2025."], ["براند شنط · Lightfunnels", "متجر فانل لشنط حريمي، ونسبة التحويل فوق 3%."], ["GA4 · نظرة على المبيعات", "الإيرادات متسجلة في Google Analytics 4 من أغسطس لنوفمبر 2024."], ["GA4 · تقرير المستخدمين", "الزيارات والتفاعل في GA4."], ["Microsoft Clarity · سلوك الزوار", "تسجيلات الجلسات والـ Heatmaps اللي بستخدمها عشان أصلّح صفحات الهبوط."], ["Microsoft Clarity · خطوات الشراء", "متابعة الخطوات من الإضافة للسلة لحد الدفع."]];
function t(en,key){return LANG==="ar"&&AR[key]!=null?AR[key]:en}
function track(name){try{if(window.clarity)window.clarity("event",name)}catch(e){}}

/* old #ar links go to the Arabic page */
if(LANG==="en"&&location.hash==="#ar"){location.replace("ar/");return}

/* WhatsApp links */
var waText=t("Hi Hesham, I saw your portfolio and I'd like to talk about ads for my brand.","waText");
function waUrl(msg){return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(msg)}
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=waUrl(waText);a.target="_blank";a.rel="noopener";a.addEventListener("click",function(){track("whatsapp_click")})});

var yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
setTimeout(function(){document.body.classList.remove("intro")},4200);

/* nav and mobile bar */
var nav=document.querySelector(".nav"),mbar=document.querySelector(".mbar");
function onScroll(){var y=window.scrollY;nav.classList.toggle("scrolled",y>8);if(mbar)mbar.classList.toggle("show",y>520)}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();
var links=[].slice.call(document.querySelectorAll(".links a"));
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});
  links.forEach(function(l){var s=document.querySelector(l.getAttribute("href"));if(s)io.observe(s)});
}

/* counters */
var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function fmt(v,dec,suf){return (dec?v.toFixed(dec):Math.round(v).toLocaleString("en-US"))+(suf||"")}
function countUp(el){
  if(reduce)return;
  var to=parseFloat(el.dataset.to),dec=+(el.dataset.dec||0),suf=el.dataset.suf||"",t0=performance.now(),d=1400;
  (function step(now){var p=Math.min(1,Math.max(0,(now-t0)/d)),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e,dec,suf);if(p<1)requestAnimationFrame(step)})(t0);
}
if("IntersectionObserver" in window){
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){countUp(e.target);co.unobserve(e.target)}})},{threshold:.5});
  document.querySelectorAll(".cnt").forEach(function(c){co.observe(c)});
}

/* chips follow the mouse a little */
var stage=document.querySelector(".stage");
if(stage&&!reduce){
  var floaters=[].slice.call(stage.querySelectorAll(".chip"));
  stage.addEventListener("pointermove",function(e){var r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    floaters.forEach(function(c,i){var k=(i%2?-1:1)*(8+i*3);c.style.transform="translate("+(x*k)+"px,"+(y*k)+"px)"})});
  stage.addEventListener("pointerleave",function(){floaters.forEach(function(c){c.style.transform=""})});
}

/* screenshots */
var prefix=LANG==="ar"?"../":"";
function shot(i){var r=PROOF[i];return LANG==="ar"?{g:r.g,i:prefix+r.i,t:AR_PROOF[i][0],d:AR_PROOF[i][1]}:r}
var featured=[0,1,17,14,25,28];
var grid=document.getElementById("proof-grid"),more=document.getElementById("proof-more"),showAll=false;
function card(i){var r=shot(i);return '<button type="button" class="pcard" data-proof="'+i+'"><span class="im"><img src="'+r.i+'" alt="'+r.t+'" loading="lazy"></span><span><small>'+r.g+"</small><b>"+r.t+"</b><span>"+r.d+"</span></span></button>"}
function drawProof(){
  var order=showAll?featured.concat(PROOF.map(function(_,i){return i}).filter(function(i){return featured.indexOf(i)<0})):featured;
  grid.innerHTML=order.map(card).join("");
  more.textContent=showAll?t("Show fewer","more_less"):t("See all "+PROOF.length+" screenshots","more_all");
}
if(grid){drawProof();more.addEventListener("click",function(){showAll=!showAll;drawProof();if(showAll)track("screenshots_all");else document.getElementById("proof").scrollIntoView()})}
var zoom=document.getElementById("zoom");
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-proof]");if(!b||!zoom||!zoom.showModal)return;
  var r=shot(+b.dataset.proof),im=document.getElementById("zoom-img");
  im.src=r.i;im.alt=r.t;document.getElementById("zoom-t").textContent=r.t;document.getElementById("zoom-d").textContent=r.d;zoom.showModal();track("screenshot_open");
});
if(zoom){document.getElementById("zoom-close").addEventListener("click",function(){zoom.close()});zoom.addEventListener("click",function(e){if(e.target===zoom)zoom.close()})}

/* lead form: a few questions, then WhatsApp opens with the answers */
var lead=document.getElementById("lead"),form=document.getElementById("lead-form"),err=document.getElementById("lead-err"),plan="";
function openLead(btn){
  plan=btn.dataset.plan||"";
  if(!lead||!lead.showModal){location.href=waUrl(waText);return}
  err.hidden=true;lead.showModal();track("lead_form_open");
  setTimeout(function(){document.getElementById("f-brand").focus()},50);
}
document.querySelectorAll("[data-lead]").forEach(function(b){b.addEventListener("click",function(){openLead(b)})});
if(lead){
  document.getElementById("lead-close").addEventListener("click",function(){lead.close()});
  lead.addEventListener("click",function(e){if(e.target===lead)lead.close()});
  form.addEventListener("submit",function(e){
    e.preventDefault();
    var brand=form.brand.value.trim(),link=form.link.value.trim(),budget=form.budget.value;
    if(!brand||!budget){err.hidden=false;(brand?form.budget:form.brand).focus();return}
    var pf=[].slice.call(form.querySelectorAll('input[name="pf"]:checked')).map(function(x){return x.value});
    var budgetText=LANG==="ar"?form.budget.options[form.budget.selectedIndex].text:budget;
    var lines=[t("Hi Hesham, I'd like to talk about ads for my brand.","leadIntro"),"",t("Brand","lBrand")+": "+brand];
    if(link)lines.push(t("Website","lLink")+": "+link);
    lines.push(t("Monthly budget","lBudget")+": "+budgetText);
    if(pf.length)lines.push(t("Platforms","lPf")+": "+pf.join(", "));
    if(plan)lines.push(t("Service","lPlan")+": "+t(plan,"plan_"+plan));
    track("lead_form_sent");
    lead.close();
    window.location.href=waUrl(lines.join("\n"));
  });
}

/* testimonials: add them here and the section shows itself
   {text:"...", name:"Name", role:"Owner, Brand"}  (use text_ar/role_ar for the Arabic page) */
var quotes=[];
if(quotes.length){
  var box=document.getElementById("quotes");
  box.innerHTML=quotes.map(function(q){var tx=LANG==="ar"&&q.text_ar?q.text_ar:q.text,ro=LANG==="ar"&&q.role_ar?q.role_ar:q.role;return '<figure class="quote"><p>“'+tx+'”</p><footer><b>'+q.name+"</b>"+ro+"</footer></figure>"}).join("");
  document.getElementById("words").hidden=false;
}
})();
