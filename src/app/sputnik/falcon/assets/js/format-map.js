(function () {
  const groups = [
    { name: "Web", color: "#f4c542", items: ["JPG", "PNG", "WEBP", "AVIF", "GIF", "BMP", "ICO", "CUR"] },
    { name: "Modern", color: "#ff6b6b", items: ["HEIC", "HEIF", "JXL", "JP2", "JPEG XR", "BPG"] },
    { name: "Print", color: "#4ecdc4", items: ["TIFF", "PSD", "PSB", "TGA", "EXR", "DPX", "PDF/X"] },
    { name: "Vector", color: "#7bd88f", items: ["SVG", "EPS", "AI", "PDF", "DXF", "DWG", "GeoJSON", "SHP"] },
    { name: "Camera RAW", color: "#b39ddb", items: ["CR2", "CR3", "NEF", "ARW", "RAF", "ORF", "RW2", "DNG", "R3D"] },
    { name: "Medical", color: "#64b5f6", items: ["DICOM", "NII", "NRRD", "MHA", "MRC", "FITS", "OME-TIFF"] },
    { name: "Game Texture", color: "#ffb74d", items: ["DDS", "KTX", "KTX2", "ASTC", "PKM", "ETC2", "PVR", "BASIS"] },
    { name: "GIS", color: "#81c784", items: ["GeoTIFF", "COG", "MBTiles", "GPKG", "ECW", "MrSID", "NetCDF"] },
    { name: "AI Dataset", color: "#f06292", items: ["COCO", "YOLO", "VOC", "TFRecord", "LMDB", "WebDataset", "NPY"] }
  ];

  function buildNodes(width, height) {
    const cx = width / 2;
    const cy = height / 2;
    const clusterRadius = Math.min(width, height) * 0.32;
    return groups.flatMap((group, groupIndex) => {
      const angle = (Math.PI * 2 * groupIndex) / groups.length - Math.PI / 2;
      const gx = cx + Math.cos(angle) * clusterRadius;
      const gy = cy + Math.sin(angle) * clusterRadius;
      return group.items.map((label, itemIndex) => {
        const itemAngle = (Math.PI * 2 * itemIndex) / group.items.length;
        const localRadius = 34 + (itemIndex % 3) * 18;
        return {
          label,
          group: group.name,
          color: group.color,
          x: gx + Math.cos(itemAngle) * localRadius,
          y: gy + Math.sin(itemAngle) * localRadius,
          r: 11 + (label.length % 4)
        };
      });
    });
  }

  function draw(canvas, ctx, nodes, hovered) {
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#0b1020";
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    nodes.forEach((node) => {
      const related = nodes.filter((candidate) => candidate.group === node.group).slice(0, 3);
      related.forEach((target) => {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
      });
    });
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, hovered === node ? node.r + 5 : node.r, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
      ctx.fillStyle = "#0b1020";
      ctx.font = "700 11px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, node.x, node.y);
    });
  }

  function mount() {
    const canvas = document.getElementById("falcon-format-map");
    if (!canvas) return;
    const tooltip = document.getElementById("falcon-format-tooltip");
    const ctx = canvas.getContext("2d");
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(rect.width * ratio));
      canvas.height = Math.max(1, Math.round(rect.height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      canvas._nodes = buildNodes(rect.width, rect.height);
      draw(canvas, ctx, canvas._nodes);
    };
    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const hovered = (canvas._nodes || []).find((node) => Math.hypot(node.x - x, node.y - y) <= node.r + 8);
      canvas.style.cursor = hovered ? "pointer" : "default";
      if (tooltip) tooltip.textContent = hovered ? `${hovered.label} - ${hovered.group}` : "";
      draw(canvas, ctx, canvas._nodes || [], hovered);
    });
    canvas.addEventListener("click", (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const clicked = (canvas._nodes || []).find((node) => Math.hypot(node.x - x, node.y - y) <= node.r + 8);
      if (clicked) {
        const prefix = window.location.pathname.includes("/formats/") ? "" : "formats/";
        window.location.href = `${prefix}${clicked.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-to-png.html`;
      }
    });
    window.addEventListener("resize", resize);
    resize();
  }

  window.FalconFormatMap = { groups, mount };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
