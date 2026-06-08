/* KHAGATARA FALCON — format-map.js
   Renders the format universe on <canvas>. Zero DOM text nodes.
   Non-scrapable. Zoom + pan + hover + click + search.
*/
(function() {

  const CATEGORIES = [
    { name:'Common',       color:'#FF2D55', angle:0 },
    { name:'Modern',       color:'#00AACC', angle:40 },
    { name:'Professional', color:'#6C2BD9', angle:80 },
    { name:'Vector',       color:'#FFD700', angle:120 },
    { name:'RAW',          color:'#FF6680', angle:160 },
    { name:'Medical',      color:'#33FF7A', angle:200 },
    { name:'Scientific',   color:'#00C853', angle:220 },
    { name:'Game',         color:'#9B5FFF', angle:240 },
    { name:'Legacy',       color:'#888888', angle:280 },
    { name:'GIS',          color:'#33CCEE', angle:310 },
    { name:'Mobile',       color:'#FFE84D', angle:340 },
  ];

  const FORMATS = [
    // Common
    { f:'JPG',    cat:'Common',       size:18, url:'../formats/jpg-to-avif.html' },
    { f:'JPEG',   cat:'Common',       size:14, url:'../formats/jpg-to-avif.html' },
    { f:'PNG',    cat:'Common',       size:18, url:null },
    { f:'WEBP',   cat:'Common',       size:16, url:null },
    { f:'GIF',    cat:'Common',       size:12, url:null },
    { f:'BMP',    cat:'Common',       size:10, url:null },
    { f:'ICO',    cat:'Common',       size:8,  url:null },
    { f:'CUR',    cat:'Common',       size:6,  url:null },
    { f:'TIFF',   cat:'Common',       size:14, url:'../formats/tiff-to-pdf.html' },
    // Modern
    { f:'AVIF',   cat:'Modern',       size:18, url:'../formats/jpg-to-avif.html' },
    { f:'HEIC',   cat:'Modern',       size:16, url:'../formats/heic-to-jpg.html' },
    { f:'HEIF',   cat:'Modern',       size:14, url:'../formats/heic-to-jpg.html' },
    { f:'JXL',    cat:'Modern',       size:16, url:null },
    { f:'JP2',    cat:'Modern',       size:12, url:null },
    { f:'JPEGXR', cat:'Modern',       size:10, url:null },
    { f:'BPG',    cat:'Modern',       size:8,  url:null },
    // Professional
    { f:'PSD',    cat:'Professional', size:18, url:'../formats/psd-to-jpg.html' },
    { f:'PSB',    cat:'Professional', size:12, url:null },
    { f:'EXR',    cat:'Professional', size:14, url:null },
    { f:'HDR',    cat:'Professional', size:12, url:null },
    { f:'DPX',    cat:'Professional', size:10, url:null },
    { f:'CIN',    cat:'Professional', size:8,  url:null },
    { f:'TGA',    cat:'Professional', size:10, url:null },
    { f:'XCF',    cat:'Professional', size:8,  url:null },
    // Vector
    { f:'SVG',    cat:'Vector',       size:18, url:'../formats/svg-to-png.html' },
    { f:'SVGZ',   cat:'Vector',       size:10, url:null },
    { f:'EPS',    cat:'Vector',       size:14, url:null },
    { f:'AI',     cat:'Vector',       size:12, url:null },
    { f:'PDF',    cat:'Vector',       size:16, url:'../formats/pdf-to-png.html' },
    { f:'CDR',    cat:'Vector',       size:10, url:null },
    { f:'DXF',    cat:'Vector',       size:10, url:null },
    { f:'WMF',    cat:'Vector',       size:8,  url:null },
    { f:'EMF',    cat:'Vector',       size:8,  url:null },
    // RAW
    { f:'CR3',    cat:'RAW',          size:18, url:'../formats/cr3-to-png.html' },
    { f:'CR2',    cat:'RAW',          size:14, url:null },
    { f:'NEF',    cat:'RAW',          size:16, url:'../formats/nef-to-webp.html' },
    { f:'NRW',    cat:'RAW',          size:10, url:null },
    { f:'ARW',    cat:'RAW',          size:16, url:null },
    { f:'SRF',    cat:'RAW',          size:8,  url:null },
    { f:'RAF',    cat:'RAW',          size:14, url:null },
    { f:'ORF',    cat:'RAW',          size:12, url:null },
    { f:'RW2',    cat:'RAW',          size:12, url:null },
    { f:'PEF',    cat:'RAW',          size:10, url:null },
    { f:'DNG',    cat:'RAW',          size:16, url:null },
    { f:'X3F',    cat:'RAW',          size:10, url:null },
    { f:'3FR',    cat:'RAW',          size:8,  url:null },
    { f:'FFF',    cat:'RAW',          size:8,  url:null },
    { f:'IIQ',    cat:'RAW',          size:8,  url:null },
    { f:'DCR',    cat:'RAW',          size:8,  url:null },
    { f:'KDC',    cat:'RAW',          size:8,  url:null },
    { f:'SRW',    cat:'RAW',          size:8,  url:null },
    { f:'RWL',    cat:'RAW',          size:8,  url:null },
    { f:'GPR',    cat:'RAW',          size:10, url:null },
    { f:'MRW',    cat:'RAW',          size:8,  url:null },
    { f:'ERF',    cat:'RAW',          size:8,  url:null },
    // Medical
    { f:'DICOM',  cat:'Medical',      size:18, url:'../formats/dicom-to-png.html' },
    { f:'DCM',    cat:'Medical',      size:14, url:'../formats/dicom-to-png.html' },
    { f:'NIfTI',  cat:'Medical',      size:10, url:null },
    { f:'NRRD',   cat:'Medical',      size:8,  url:null },
    { f:'MHA',    cat:'Medical',      size:8,  url:null },
    // Scientific
    { f:'FITS',   cat:'Scientific',   size:16, url:null },
    { f:'HDF5',   cat:'Scientific',   size:12, url:null },
    { f:'MRC',    cat:'Scientific',   size:10, url:null },
    { f:'NRRD',   cat:'Scientific',   size:8,  url:null },
    // Game
    { f:'DDS',    cat:'Game',         size:16, url:null },
    { f:'KTX',    cat:'Game',         size:12, url:null },
    { f:'KTX2',   cat:'Game',         size:14, url:null },
    { f:'ASTC',   cat:'Game',         size:10, url:null },
    { f:'VTF',    cat:'Game',         size:10, url:null },
    { f:'PKM',    cat:'Game',         size:8,  url:null },
    { f:'BASIS',  cat:'Game',         size:12, url:null },
    { f:'CRN',    cat:'Game',         size:8,  url:null },
    // Legacy
    { f:'PCX',    cat:'Legacy',       size:10, url:null },
    { f:'PICT',   cat:'Legacy',       size:8,  url:null },
    { f:'XBM',    cat:'Legacy',       size:8,  url:null },
    { f:'XPM',    cat:'Legacy',       size:8,  url:null },
    { f:'PBM',    cat:'Legacy',       size:8,  url:null },
    { f:'PGM',    cat:'Legacy',       size:8,  url:null },
    { f:'PPM',    cat:'Legacy',       size:8,  url:null },
    { f:'SGI',    cat:'Legacy',       size:8,  url:null },
    { f:'IFF',    cat:'Legacy',       size:8,  url:null },
    { f:'TGA',    cat:'Legacy',       size:8,  url:null },
    // GIS
    { f:'GeoTIFF',cat:'GIS',          size:16, url:null },
    { f:'COG',    cat:'GIS',          size:12, url:null },
    { f:'ECW',    cat:'GIS',          size:10, url:null },
    { f:'MrSID',  cat:'GIS',          size:10, url:null },
    { f:'GRIB',   cat:'GIS',          size:8,  url:null },
    { f:'HDF',    cat:'GIS',          size:8,  url:null },
    // Mobile
    { f:'ICNS',   cat:'Mobile',       size:12, url:null },
    { f:'HEIC',   cat:'Mobile',       size:10, url:null },
    { f:'9PNG',   cat:'Mobile',       size:8,  url:null },
    { f:'WebP',   cat:'Mobile',       size:10, url:null },
  ];

  // ── Node layout ──────────────────────────────────────────────
  function computeNodes(W, H) {
    const cx = W / 2, cy = H / 2;
    const nodes = [];
    const catMap = {};
    CATEGORIES.forEach(c => { catMap[c.name] = c; });

    // Group formats by category
    const groups = {};
    FORMATS.forEach(f => {
      if (!groups[f.cat]) groups[f.cat] = [];
      groups[f.cat].push(f);
    });

    CATEGORIES.forEach(cat => {
      const fmts = groups[cat.name] || [];
      const rad  = Math.PI * 2 * cat.angle / 360;
      const r    = Math.min(W, H) * 0.32;
      const gx   = cx + r * Math.cos(rad);
      const gy   = cy + r * Math.sin(rad);

      // Category center node
      nodes.push({ type:'cat', label: cat.name, color: cat.color, x: gx, y: gy, r: 14 });

      // Format nodes around category
      fmts.forEach((f, i) => {
        const spread = Math.min(W, H) * 0.10;
        const a = rad + (i - fmts.length / 2) * 0.28;
        const dr = spread + (i % 3) * 18;
        nodes.push({
          type: 'format', label: f.f, color: cat.color,
          x: gx + dr * Math.cos(a), y: gy + dr * Math.sin(a),
          r: Math.max(4, f.size * 0.45),
          url: f.url, cat: cat.name,
        });
      });
    });
    return nodes;
  }

  // ── Main init ────────────────────────────────────────────────
  function initMap(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const tooltip = document.getElementById('f-map-tooltip');
    const ctx = canvas.getContext('2d');

    let W, H, nodes = [];
    let pan = { x: 0, y: 0 }, zoom = 1;
    let dragging = false, lastMouse = null;
    let highlight = null; // search highlight set

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width  = rect.width;
      H = canvas.height = Math.max(500, rect.height || 600);
      nodes = computeNodes(W, H);
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(pan.x, pan.y);
      ctx.scale(zoom, zoom);

      // Draw edges from category to formats
      nodes.filter(n => n.type === 'cat').forEach(cat => {
        nodes.filter(n => n.type === 'format' && n.cat === cat.label).forEach(f => {
          ctx.beginPath();
          ctx.moveTo(cat.x, cat.y);
          ctx.lineTo(f.x, f.y);
          ctx.strokeStyle = cat.color + '22';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach(n => {
        const isHighlighted = highlight && highlight.has(n.label.toUpperCase());
        const alpha = highlight ? (isHighlighted ? 1 : 0.2) : 1;

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        if (n.type === 'cat') {
          ctx.strokeStyle = '#FFFFFF33';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Label
        const fontSize = n.type === 'cat' ? Math.max(8, n.r * 0.9) : Math.max(6, n.r * 0.85);
        ctx.font = `${n.type === 'cat' ? 'bold ' : ''}${fontSize}px 'Space Mono', monospace`;
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n.label, n.x, n.y + n.r + fontSize + 2);
      });

      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // ── Interaction ──────────────────────────────────────────
    function toWorld(ex, ey) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (ex - rect.left - pan.x) / zoom,
        y: (ey - rect.top  - pan.y) / zoom,
      };
    }

    function hitTest(wx, wy) {
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        const dx = wx - n.x, dy = wy - n.y;
        if (dx*dx + dy*dy <= (n.r + 6) * (n.r + 6)) return n;
      }
      return null;
    }

    canvas.addEventListener('mousemove', e => {
      if (dragging && lastMouse) {
        pan.x += e.clientX - lastMouse.x;
        pan.y += e.clientY - lastMouse.y;
        lastMouse = { x: e.clientX, y: e.clientY };
        draw(); return;
      }
      const w = toWorld(e.clientX, e.clientY);
      const hit = hitTest(w.x, w.y);
      canvas.style.cursor = hit ? 'pointer' : 'grab';
      if (hit && tooltip) {
        tooltip.innerHTML = `<div class="tt-format" style="color:${hit.color}">${hit.label}</div><div class="tt-cat">${hit.cat || hit.label}</div>`;
        tooltip.style.left = (e.clientX - canvas.getBoundingClientRect().left + 14) + 'px';
        tooltip.style.top  = (e.clientY - canvas.getBoundingClientRect().top  - 10) + 'px';
        tooltip.classList.add('visible');
      } else if (tooltip) {
        tooltip.classList.remove('visible');
      }
    });

    canvas.addEventListener('mousedown', e => {
      dragging = true; lastMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { dragging = false; lastMouse = null; });

    canvas.addEventListener('click', e => {
      if (Math.abs(e.movementX) > 3 || Math.abs(e.movementY) > 3) return;
      const w = toWorld(e.clientX, e.clientY);
      const hit = hitTest(w.x, w.y);
      if (hit && hit.url) window.location.href = hit.url;
    });

    canvas.addEventListener('wheel', e => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.1 : 0.9;
      zoom = Math.min(3, Math.max(0.4, zoom * factor));
      draw();
    }, { passive: false });

    // Touch pan
    let lastTouch = null;
    canvas.addEventListener('touchstart', e => { lastTouch = e.touches[0]; });
    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      if (lastTouch) {
        pan.x += e.touches[0].clientX - lastTouch.clientX;
        pan.y += e.touches[0].clientY - lastTouch.clientY;
        lastTouch = e.touches[0]; draw();
      }
    }, { passive: false });

    // Map controls
    const zoomIn  = document.getElementById('f-map-zoom-in');
    const zoomOut = document.getElementById('f-map-zoom-out');
    const reset   = document.getElementById('f-map-reset');
    if (zoomIn)  zoomIn.addEventListener('click',  () => { zoom = Math.min(3, zoom * 1.2); draw(); });
    if (zoomOut) zoomOut.addEventListener('click', () => { zoom = Math.max(0.4, zoom / 1.2); draw(); });
    if (reset)   reset.addEventListener('click',   () => { zoom = 1; pan = {x:0,y:0}; draw(); });

    // Search
    const searchInput = document.getElementById('f-map-search-input');
    const searchBtn   = document.getElementById('f-map-search-btn');
    function doSearch() {
      const q = (searchInput?.value || '').trim().toUpperCase();
      if (!q) { highlight = null; draw(); return; }
      highlight = new Set(nodes.filter(n => n.label.toUpperCase().includes(q)).map(n => n.label.toUpperCase()));
      draw();
    }
    if (searchBtn)   searchBtn.addEventListener('click', doSearch);
    if (searchInput) searchInput.addEventListener('input', doSearch);

    // Init
    resize();
    window.addEventListener('resize', resize);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMap('f-format-map-canvas'));
  } else {
    initMap('f-format-map-canvas');
  }

  window.FALCON_FORMAT_MAP = { initMap };
})();
