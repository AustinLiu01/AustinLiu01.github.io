(() => {
  'use strict';
  const root = document.querySelector('[data-visitor-stats]');
  if (!root) return;
  const status = root.querySelector('[data-stats-status]');
  // Check the hostname too: a production build can still be previewed locally.
  if (root.dataset.enabled !== 'true' || location.hostname !== new URL(root.dataset.siteUrl).hostname ||
      /^(localhost|127\.\d+\.\d+\.\d+|\[?::1\]?)$/.test(location.hostname)) {
    status.textContent = 'Visitor statistics are available on the live site.';
    return;
  }

  const counts = root.querySelector('[data-visitor-counts]');
  const hasCounts = () => ['busuanzi_site_pv', 'busuanzi_site_uv'].every(id =>
    /^\d[\d,]*$/.test(document.getElementById(id).textContent.trim()));
  let timeout;
  const observer = new MutationObserver(() => {
    if (!hasCounts()) return;
    clearTimeout(timeout);
    status.textContent = '';
    observer.disconnect();
  });
  const unavailable = () => {
    clearTimeout(timeout);
    observer.disconnect();
    status.textContent = 'Visitor statistics are temporarily unavailable.';
  };
  observer.observe(counts, {childList: true, characterData: true, subtree: true});
  timeout = setTimeout(unavailable, 12000);
  const counter = document.createElement('script');
  counter.src = 'https://cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js';
  counter.async = true;
  counter.onerror = unavailable;
  document.head.appendChild(counter);

  const map = root.querySelector('[data-visitor-map]');
  if (map && root.dataset.mapId) {
    const widget = document.createElement('script');
    widget.id = 'clustrmaps';
    const url = new URL('https://clustrmaps.com/map_v2.js');
    url.search = new URLSearchParams({d: root.dataset.mapId, w: 'a', cl: '24648b', co: 'ffffff'});
    widget.src = url.href;
    widget.async = true;
    widget.onerror = () => { map.textContent = 'Visitor map is temporarily unavailable.'; };
    map.appendChild(widget);
  }
})();
