/* KHAGATARA FALCON — site.js
   Injects shared navbar + footer into every page.
   Also handles: mobile menu, active nav link, smooth scroll.
*/
(function() {

  const ROOT = (function() {
    const p = window.location.pathname;
    const depth = (p.match(/\//g) || []).length - 1;
    // Depth from /falcon/
    // /falcon/index.html        → depth 1 → ./
    // /falcon/api/index.html    → depth 2 → ../
    // /falcon/formats/x.html   → depth 2 → ../
    const falconIdx = p.indexOf('/falcon/');
    if (falconIdx === -1) return './';
    const afterFalcon = p.slice(falconIdx + 8);
    const sub = (afterFalcon.match(/\//g) || []).length;
    return sub === 0 ? './' : '../';
  })();

  const NAV_HTML = `
    <nav class="f-nav" id="f-nav">
      <a class="f-nav-logo" href="${ROOT}index.html">
        KHAGATARA <span class="f-logo-dot">✦</span> <span class="f-logo-brand">FALCON</span>
      </a>
      <ul class="f-nav-links" id="f-nav-links">
        <li><a href="${ROOT}tool.html">Tool</a></li>
        <li><a href="${ROOT}formats/index.html">Formats</a></li>
        <li><a href="${ROOT}pricing.html">Pricing</a></li>
        <li><a href="${ROOT}api/index.html">API</a></li>
        <li><a href="${ROOT}blog/index.html">Blog</a></li>
      </ul>
      <div class="f-nav-actions">
        <div class="f-nav-status">
          <div class="f-nav-status-dot"></div>
          <span>All Systems Operational</span>
        </div>
        <a class="f-btn f-btn-yellow f-btn-sm" href="${ROOT}tool.html">TRY FREE</a>
      </div>
    </nav>
  `;

  const FOOTER_HTML = `
    <footer class="f-footer" id="f-footer">
      <div class="f-footer-grid">
        <div>
          <div class="f-footer-logo">KHAGATARA <span>✦</span> FALCON</div>
          <div class="f-footer-tagline">360+ formats · 140 languages<br>The world's most complete image converter.</div>
          <div class="f-palette">
            <div class="f-palette-swatch" style="background:var(--red)"></div>
            <div class="f-palette-swatch" style="background:var(--red-l)"></div>
            <div class="f-palette-swatch" style="background:var(--red-d)"></div>
            <div class="f-palette-swatch" style="background:var(--yellow)"></div>
            <div class="f-palette-swatch" style="background:var(--yellow-l)"></div>
            <div class="f-palette-swatch" style="background:var(--yellow-d)"></div>
            <div class="f-palette-swatch" style="background:var(--cyan)"></div>
            <div class="f-palette-swatch" style="background:var(--cyan-l)"></div>
            <div class="f-palette-swatch" style="background:var(--cyan-d)"></div>
            <div class="f-palette-swatch" style="background:var(--purple)"></div>
            <div class="f-palette-swatch" style="background:var(--purple-l)"></div>
            <div class="f-palette-swatch" style="background:var(--purple-d)"></div>
            <div class="f-palette-swatch" style="background:var(--green)"></div>
            <div class="f-palette-swatch" style="background:var(--green-l)"></div>
            <div class="f-palette-swatch" style="background:var(--green-d)"></div>
            <div class="f-palette-swatch" style="background:var(--white);border:1px solid #333"></div>
            <div class="f-palette-swatch" style="background:var(--near-black);border:1px solid #333"></div>
            <div class="f-palette-swatch" style="background:var(--true-black);border:1px solid #333"></div>
          </div>
        </div>
        <div>
          <div class="f-footer-col-title">Tool</div>
          <ul class="f-footer-links">
            <li><a href="${ROOT}tool.html">Converter</a></li>
            <li><a href="${ROOT}tool.html#compress">Compress</a></li>
            <li><a href="${ROOT}tool.html#resize">Resize</a></li>
            <li><a href="${ROOT}tool.html#upscale">Upscale</a></li>
            <li><a href="${ROOT}tool.html#dpi">DPI Change</a></li>
          </ul>
        </div>
        <div>
          <div class="f-footer-col-title">Formats</div>
          <ul class="f-footer-links">
            <li><a href="${ROOT}formats/index.html">All Formats</a></li>
            <li><a href="${ROOT}formats/jpg-to-avif.html">JPG → AVIF</a></li>
            <li><a href="${ROOT}formats/heic-to-jpg.html">HEIC → JPG</a></li>
            <li><a href="${ROOT}formats/cr3-to-png.html">CR3 → PNG</a></li>
            <li><a href="${ROOT}formats/pdf-to-png.html">PDF → PNG</a></li>
          </ul>
        </div>
        <div>
          <div class="f-footer-col-title">Developers</div>
          <ul class="f-footer-links">
            <li><a href="${ROOT}api/index.html">API Docs</a></li>
            <li><a href="${ROOT}api/index.html#quickstart">Quickstart</a></li>
            <li><a href="${ROOT}api/index.html#endpoints">Endpoints</a></li>
            <li><a href="${ROOT}api/index.html#rate-limits">Pricing</a></li>
            <li><a href="${ROOT}api/index.html#bulk-guide">Bulk Jobs</a></li>
          </ul>
        </div>
        <div>
          <div class="f-footer-col-title">Legal</div>
          <ul class="f-footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">API Terms</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">GDPR</a></li>
          </ul>
        </div>
      </div>
      <div class="f-footer-bottom">
        <div class="f-footer-copy">© 2026 Khagatara · Falcon · All rights reserved</div>
        <div class="f-footer-copy" style="color:var(--yellow)">KHAGATARA ✦ FALCON</div>
      </div>
    </footer>
  `;

  function injectNav() {
    const el = document.getElementById('f-nav-placeholder');
    if (el) { el.outerHTML = NAV_HTML; return; }
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  }

  function injectFooter() {
    const el = document.getElementById('f-footer-placeholder');
    if (el) { el.outerHTML = FOOTER_HTML; return; }
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }

  function setActiveLink() {
    const path = window.location.pathname;
    document.querySelectorAll('.f-nav-links a').forEach(a => {
      if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace('./', '').replace('../', ''))) {
        a.classList.add('active');
      }
    });
  }

  function initFAQ() {
    document.querySelectorAll('.f-faq-q').forEach(q => {
      q.addEventListener('click', () => {
        q.closest('.f-faq-item').classList.toggle('open');
      });
    });
  }

  function initCodeTabs() {
    document.querySelectorAll('.f-code-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const group = this.closest('[data-code-group]');
        if (!group) return;
        group.querySelectorAll('.f-code-tab').forEach(t => t.classList.remove('active'));
        group.querySelectorAll('.f-code-panel').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const target = group.querySelector('#' + this.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  }

  function initToggles() {
    document.querySelectorAll('.f-toggle').forEach(t => {
      t.addEventListener('click', () => {
        t.classList.toggle('on');
        const key = t.dataset.key;
        if (key) window.FALCON_TOGGLES = window.FALCON_TOGGLES || {};
        if (key) window.FALCON_TOGGLES[key] = t.classList.contains('on');
      });
    });
  }

  function init() {
    injectNav();
    injectFooter();
    setActiveLink();
    initFAQ();
    initCodeTabs();
    initToggles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.FALCON_ROOT = ROOT;
})();
