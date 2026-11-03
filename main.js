(function(){
var root=document.documentElement,btn=document.getElementById('theme');
try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')root.setAttribute('data-theme',t)}catch(e){}
function isDark(){var a=root.getAttribute('data-theme');return a?a==='dark':matchMedia('(prefers-color-scheme: dark)').matches}
var SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
var MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
function label(){var d=isDark();btn.innerHTML=d?SUN:MOON;var t=d?'Switch to light mode':'Switch to dark mode';btn.setAttribute('aria-label',t);btn.title=t}
label();
btn.addEventListener('click',function(){var n=isDark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}label()});
document.querySelectorAll('[data-go]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var el=document.getElementById(a.dataset.go);if(el)el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})})});
})();
