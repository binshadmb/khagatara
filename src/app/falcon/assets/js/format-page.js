(function () {
  const target = document.querySelector("[data-format-page]");
  if (!target) return;
  const slug = location.pathname.split("/").pop().replace(".html", "");
  const parts = slug.split("-to-");
  const input = (parts[0] || "input").replace(/-/g, " ").toUpperCase();
  const output = (parts[1] || "output").replace(/-/g, " ").toUpperCase();
  document.title = `${input} to ${output} Converter - Falcon`;
  target.innerHTML = `
    <section class="hero band-rose">
      <div>
        <p class="eyebrow">Format converter</p>
        <h1>${input} to ${output}</h1>
        <p class="lead muted">A ready SEO landing shell for this conversion pair, connected back to the Falcon upload tool.</p>
        <div class="actions"><a class="button gold" href="../tool.html">Open converter</a><a class="button ghost" href="index.html">All formats</a></div>
      </div>
    </section>
    <section>
      <div class="grid">
        <article class="card"><h3>Input</h3><p>${input} files are detected using magic bytes when possible, then extension fallback for legacy and brand-specific formats.</p></article>
        <article class="card"><h3>Output</h3><p>${output} export can be tuned for quality, size, DPI, metadata, compression, and delivery package.</p></article>
        <article class="card"><h3>Related</h3><p>Use the format hub to generate hundreds of related converter pages from the same template.</p></article>
      </div>
    </section>
    <section class="band-gold"><p class="eyebrow">FAQ</p><h2>Conversion notes</h2><p>For production, replace this shell with generated pair-specific copy, compatibility notes, and real sample outputs.</p></section>
  `;
})();
