(function () {
  const palette = [
    "#FF2D55", "#FF5C7A", "#FF8AA0",
    "#FFD700", "#FFE14D", "#FFEB80",
    "#00AACC", "#33BBD6", "#66CCE0",
    "#6C2BD9", "#8959E2", "#A787EA",
    "#00C853", "#33D975", "#66E397",
    "#111111", "#242424", "#FFFFFF"
  ];

  document.querySelectorAll("[data-swatches]").forEach((target) => {
    target.innerHTML = palette.map((color) => `<span class="swatch" title="${color}" style="background:${color}"></span>`).join("");
  });
})();
