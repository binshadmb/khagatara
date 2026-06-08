(function () {
  const formats = [
    "AI", "AVIF", "BMP", "CR2", "CR3", "DCR", "DICOM", "DNG", "EPS", "EXR", "FITS", "GIF", "HDR", "HEIC", "HEIF", "ICO",
    "JPEG", "JPG", "JXL", "NEF", "NRW", "PCX", "PDF", "PEF", "PICT", "PNG", "PSD", "PSB", "RAF", "RAW", "RW2", "RWL",
    "SRF", "SRW", "SVG", "TGA", "TIF", "TIFF", "WEBP", "WMF", "X3F", "XBM", "XPM"
  ];
  const input = document.getElementById("file-input");
  const badge = document.getElementById("autodetect-badge");
  const preview = document.getElementById("preview-panel");
  const progress = document.getElementById("progress-bar");
  const button = document.getElementById("convert-btn");
  const ladder = document.getElementById("format-ladder");
  const output = document.getElementById("output-format");

  if (ladder) {
    const groups = formats.reduce((acc, format) => {
      const letter = format[0];
      acc[letter] = acc[letter] || [];
      acc[letter].push(format);
      return acc;
    }, {});
    ladder.innerHTML = Object.keys(groups).sort().map((letter) => `
      <div class="ladder-group">
        <span class="ladder-letter">${letter}</span>
        <div class="ladder-items">${groups[letter].map((format) => `<button type="button" data-format="${format}">${format}</button>`).join("")}</div>
      </div>
    `).join("");
    ladder.addEventListener("click", (event) => {
      const chosen = event.target.closest("[data-format]");
      if (!chosen || !output) return;
      const value = chosen.dataset.format;
      if (![...output.options].some((option) => option.value === value)) output.add(new Option(value, value));
      output.value = value;
    });
  }

  if (input && badge) {
    input.addEventListener("change", async () => {
      const file = input.files && input.files[0];
      if (!file) return;
      badge.textContent = "Detecting...";
      try {
        const result = window.falconDetect ? await window.falconDetect(file) : null;
        if (result && window.renderDetectBadge) {
          window.renderDetectBadge(result, badge);
        } else if (result) {
          badge.textContent = `Detected: ${result.format}`;
        } else {
          badge.textContent = "Detected: unknown";
        }
      } catch (error) {
        badge.textContent = "Detected: unavailable";
      }
      if (preview && file.type && file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        preview.innerHTML = `<img alt="Selected preview" src="${url}" style="max-height:300px;border-radius:8px">`;
      }
    });
  }

  if (button && progress) {
    button.addEventListener("click", () => {
      progress.value = 0;
      const timer = setInterval(() => {
        progress.value = Math.min(100, Number(progress.value) + 12);
        if (progress.value >= 100) clearInterval(timer);
      }, 120);
    });
  }
})();
