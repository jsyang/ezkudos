// Bookmarklet Usage: Add a new bookmark and set the URL to the following code with the `javascript:` prefix
// DevTools Usage: Paste and run this within your DevTools console, without the `javascript:` prefix
javascript:
t=4e3;d=document;se=d.scrollingElement;a=Array.from(d.querySelectorAll('[data-testid="kudos_button"]:not(:has(svg:not([fill="currentColor"])))'));s=async ms => new Promise(r=>setTimeout(r, (Math.random()*ms)>>0));(async()=>{d.title='🔄 (1/3) Fetch activities';for(i=0;i<30;i++){se.scrollTo(0,se.scrollTop-(i%2?-1e5:900));await s(t*.3);}await s(t);i=0;for(e of a) { e.click(); await s(t); i++; d.title=`👍 (2/3) Gave ${i} kudos`;}d.title=`✅ (3/3) ${i} kudos given: all done`;})();
