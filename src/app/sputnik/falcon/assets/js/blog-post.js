(function () {
  const posts = {
    "how-to-convert-heic-windows": ["How to Convert HEIC on Windows", "HEIC keeps phone photos small, but JPG is still the easiest handoff format for older apps, forms, and Windows workflows."],
    "best-dpi-for-printing": ["Best DPI for Printing", "Use 300 DPI for sharp close-view prints, but always check the actual pixel dimensions before trusting a DPI label."],
    "what-is-avif-format": ["What Is AVIF?", "AVIF is a modern web image format that can deliver smaller files than JPG and PNG while keeping strong visual quality."],
    "jpg-vs-webp-comparison": ["JPG vs WebP", "JPG is universal and predictable; WebP is usually smaller and better for modern websites."],
    "how-to-read-camera-raw": ["How to Read Camera RAW", "RAW files are camera sensor containers. They often need brand-aware parsing before preview or conversion."],
    "image-compression-guide": ["Image Compression Guide", "Compression is a balance between file size, visible artifacts, transparency, color depth, and downstream use."],
    "dicom-for-beginners": ["DICOM for Beginners", "DICOM is a medical imaging format that can include patient metadata, so privacy-safe handling matters."]
  };
  const main = document.querySelector("[data-post]");
  if (!main) return;
  const key = main.dataset.post;
  const post = posts[key] || ["Falcon Guide", "A practical image-format guide."];
  document.title = `${post[0]} - Falcon`;
  main.innerHTML = `
    <section class="hero band-violet"><div><p class="eyebrow">Falcon guide</p><h1>${post[0]}</h1><p class="lead muted">${post[1]}</p></div></section>
    <section><div class="split"><article><h2>What to know</h2><p>${post[1]}</p><p>Falcon pairs this guide content with the converter workflow so readers can move from learning to action without hunting for another tool.</p></article><aside class="panel"><h3>Try it now</h3><p>Use auto-detect first if you are not sure which format you have.</p><a class="button primary" href="../tool.html">Open converter</a></aside></div></section>
    <section class="band-gold"><p class="eyebrow">Next step</p><h2>Compare output settings</h2><p>For final production copy, expand this article with screenshots, example files, compatibility notes, and related converter links.</p></section>
  `;
})();
