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
  const hasCounts = () => ['busuanzi_value_site_pv', 'busuanzi_value_site_uv'].every(id =>
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
    status.textContent = 'Visitor statistics are temporarily unavailable.';
  };
  observer.observe(counts, {childList: true, characterData: true, subtree: true});
  timeout = setTimeout(unavailable, 12000);
  const counter = document.createElement('script');
  // The original provider uses JSONP, so its API does not require CORS headers.
  counter.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  counter.async = true;
  counter.onerror = unavailable;
  document.head.appendChild(counter);

  const map = root.querySelector('[data-visitor-map]');
  if (map) {
    const mapStatus = map.querySelector('[data-map-status]');
    mapStatus.textContent = 'Loading visitor map…';
    const link = document.createElement('a');
    link.href = map.dataset.statsUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const image = document.createElement('img');
    image.alt = 'World map showing visitors by country — Flag Counter';
    image.decoding = 'async';
    const mapTimeout = setTimeout(() => {
      mapStatus.textContent = 'Visitor map is temporarily unavailable.';
    }, 12000);
    image.onload = () => {
      clearTimeout(mapTimeout);
      mapStatus.textContent = '';
    };
    image.onerror = () => {
      clearTimeout(mapTimeout);
      link.hidden = true;
      mapStatus.textContent = 'Visitor map is temporarily unavailable.';
    };
    // Load only after the live-site check above; local previews never count.
    image.src = map.dataset.imageUrl;
    link.appendChild(image);
    map.insertBefore(link, map.firstChild);
  }
})();
