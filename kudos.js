// Bookmarklet Usage: Add a new bookmark and set the URL to the following code with the `javascript:` prefix
// DevTools Usage: Paste and run this within your DevTools console, without the `javascript:` prefix
javascript:
t=4e3;d=document;se=d.scrollingElement;a=Array.from($$('[data-testid="kudos_button"]:not(:has(svg:not([fill="currentColor"])))'));s=async ms => new Promise(r => setTimeout(r, (Math.random()*ms)>>0));(async()=>{ for(i=0;i<1e2;i++){se.scrollTo(0,se.scrollTop-(i%2?-1e5:900));await s(t);} for(e of a) { e.click(); await s(t); }d.title='✅✅✅'})();
