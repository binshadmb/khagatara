/**
 * KHAGATARA FALCON — autodetect.js
 * Client-side image format detection via magic bytes.
 * Reads first 64 bytes only. No upload. Instant.
 */

const FALCON_SIGNATURES = [
  // ── JPEG family ─────────────────────────────────────────────
  { format:"JPEG",      ext:"jpg",   category:"Common",      brand:null,         magic:[[0,["FF","D8","FF"]]] },
  { format:"JPEG XL",   ext:"jxl",   category:"Modern",      brand:null,         magic:[[0,["FF","0A"]]] },
  { format:"JPEG XL",   ext:"jxl",   category:"Modern",      brand:null,         magic:[[0,["00","00","00","0C","4A","58","4C","20"]]] },
  { format:"JPEG 2000", ext:"jp2",   category:"Modern",      brand:null,         magic:[[0,["00","00","00","0C","6A","50","20","20"]]] },
  { format:"JPEG XR",   ext:"jxr",   category:"Modern",      brand:null,         magic:[[0,["49","49","BC"]]] },

  // ── PNG ─────────────────────────────────────────────────────
  { format:"PNG",       ext:"png",   category:"Common",      brand:null,         magic:[[0,["89","50","4E","47","0D","0A","1A","0A"]]] },

  // ── GIF ─────────────────────────────────────────────────────
  { format:"GIF",       ext:"gif",   category:"Common",      brand:null,         magic:[[0,["47","49","46","38"]]] },

  // ── WebP ────────────────────────────────────────────────────
  { format:"WebP",      ext:"webp",  category:"Modern",      brand:null,         magic:[[0,["52","49","46","46"]], [8,["57","45","42","50"]]] },

  // ── AVIF / HEIC / HEIF ──────────────────────────────────────
  { format:"AVIF",      ext:"avif",  category:"Modern",      brand:null,         magic:[[4,["66","74","79","70","61","76","69","66"]]] },
  { format:"HEIC",      ext:"heic",  category:"Modern",      brand:"Apple",      magic:[[4,["66","74","79","70","68","65","69","63"]]] },
  { format:"HEIC",      ext:"heic",  category:"Modern",      brand:"Apple",      magic:[[4,["66","74","79","70","68","65","69","78"]]] },
  { format:"HEIF",      ext:"heif",  category:"Modern",      brand:"Apple",      magic:[[4,["66","74","79","70","6D","69","66","31"]]] },

  // ── BMP ─────────────────────────────────────────────────────
  { format:"BMP",       ext:"bmp",   category:"Common",      brand:null,         magic:[[0,["42","4D"]]] },

  // ── ICO / CUR ───────────────────────────────────────────────
  { format:"ICO",       ext:"ico",   category:"Common",      brand:null,         magic:[[0,["00","00","01","00"]]] },
  { format:"CUR",       ext:"cur",   category:"Common",      brand:null,         magic:[[0,["00","00","02","00"]]] },

  // ── TIFF ────────────────────────────────────────────────────
  { format:"TIFF",      ext:"tiff",  category:"Professional",brand:null,         magic:[[0,["49","49","2A","00"]]] },
  { format:"TIFF",      ext:"tiff",  category:"Professional",brand:null,         magic:[[0,["4D","4D","00","2A"]]] },
  { format:"BigTIFF",   ext:"tiff",  category:"Professional",brand:null,         magic:[[0,["49","49","2B","00"]]] },

  // ── PSD / PSB ───────────────────────────────────────────────
  { format:"PSD",       ext:"psd",   category:"Professional",brand:"Adobe",      magic:[[0,["38","42","50","53"]],[4,["00","01"]]] },
  { format:"PSB",       ext:"psb",   category:"Professional",brand:"Adobe",      magic:[[0,["38","42","50","53"]],[4,["00","02"]]] },

  // ── EXR ─────────────────────────────────────────────────────
  { format:"OpenEXR",   ext:"exr",   category:"Professional",brand:null,         magic:[[0,["76","2F","31","01"]]] },

  // ── HDR (Radiance RGBE) ─────────────────────────────────────
  { format:"HDR",       ext:"hdr",   category:"Professional",brand:null,         magic:[[0,["23","3F","52","41","44","49","41","4E","43","45"]]] },

  // ── TGA (no magic — detected by extension fallback) ─────────
  // { format:"TGA", ext:"tga" }  // heuristic only

  // ── SVG ─────────────────────────────────────────────────────
  { format:"SVG",       ext:"svg",   category:"Vector",      brand:null,         magic:[[0,["3C","73","76","67"]]] },
  { format:"SVG",       ext:"svg",   category:"Vector",      brand:null,         magic:[[0,["3C","3F","78","6D","6C"]]] }, // <?xml
  { format:"SVGZ",      ext:"svgz",  category:"Vector",      brand:null,         magic:[[0,["1F","8B"]]] }, // gzip

  // ── PDF ─────────────────────────────────────────────────────
  { format:"PDF",       ext:"pdf",   category:"Document",    brand:"Adobe",      magic:[[0,["25","50","44","46"]]] },

  // ── AI (Adobe Illustrator) ──────────────────────────────────
  { format:"AI",        ext:"ai",    category:"Vector",      brand:"Adobe",      magic:[[0,["25","21","50","53","2D","41","64","6F","62","65"]]] },

  // ── EPS ─────────────────────────────────────────────────────
  { format:"EPS",       ext:"eps",   category:"Vector",      brand:null,         magic:[[0,["25","21","50","53"]]] },

  // ── DXF ─────────────────────────────────────────────────────
  { format:"DXF",       ext:"dxf",   category:"Vector",      brand:"Autodesk",   magic:[[0,["30","0D","0A"]]] },

  // ── FITS (Scientific) ───────────────────────────────────────
  { format:"FITS",      ext:"fits",  category:"Scientific",  brand:null,         magic:[[0,["53","49","4D","50","4C","45","20","20"]]] },

  // ── DICOM (Medical) ─────────────────────────────────────────
  { format:"DICOM",     ext:"dcm",   category:"Medical",     brand:null,         magic:[[128,["44","49","43","4D"]]] }, // offset 128
  { format:"DICOM",     ext:"dcm",   category:"Medical",     brand:null,         magic:[[0,["44","49","43","4D"]]] },

  // ── Camera RAW: Canon ───────────────────────────────────────
  { format:"CR3",       ext:"cr3",   category:"RAW",         brand:"Canon",      magic:[[4,["66","74","79","70","63","72","78","20"]]] },
  { format:"CR2",       ext:"cr2",   category:"RAW",         brand:"Canon",      magic:[[0,["49","49","2A","00"]],[8,["43","52"]]] },
  { format:"CRW",       ext:"crw",   category:"RAW",         brand:"Canon",      magic:[[0,["49","49","1A","00","00","00","48","45"]]] },

  // ── Camera RAW: Nikon ───────────────────────────────────────
  { format:"NEF",       ext:"nef",   category:"RAW",         brand:"Nikon",      magic:[[0,["4D","4D","00","2A"]]] }, // big-endian TIFF + Nikon IFD
  { format:"NEF",       ext:"nef",   category:"RAW",         brand:"Nikon",      magic:[[0,["49","49","2A","00"]]] }, // little-endian variant
  { format:"NRW",       ext:"nrw",   category:"RAW",         brand:"Nikon",      magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Sony ────────────────────────────────────────
  { format:"ARW",       ext:"arw",   category:"RAW",         brand:"Sony",       magic:[[0,["49","49","2A","00"]]] },
  { format:"SR2",       ext:"sr2",   category:"RAW",         brand:"Sony",       magic:[[0,["49","49","2A","00"]]] },
  { format:"SRF",       ext:"srf",   category:"RAW",         brand:"Sony",       magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Fujifilm ────────────────────────────────────
  { format:"RAF",       ext:"raf",   category:"RAW",         brand:"Fujifilm",   magic:[[0,["46","55","4A","49","46","49","4C","4D"]]] },

  // ── Camera RAW: Olympus ─────────────────────────────────────
  { format:"ORF",       ext:"orf",   category:"RAW",         brand:"Olympus",    magic:[[0,["49","49","52","4F"]]] },
  { format:"ORF",       ext:"orf",   category:"RAW",         brand:"Olympus",    magic:[[0,["4D","4D","4F","52"]]] },

  // ── Camera RAW: Panasonic ───────────────────────────────────
  { format:"RW2",       ext:"rw2",   category:"RAW",         brand:"Panasonic",  magic:[[0,["49","49","55","00"]]] },

  // ── Camera RAW: Pentax ──────────────────────────────────────
  { format:"PEF",       ext:"pef",   category:"RAW",         brand:"Pentax",     magic:[[0,["49","49","2A","00"]]] },
  { format:"PEF",       ext:"pef",   category:"RAW",         brand:"Pentax",     magic:[[0,["4D","4D","00","2A"]]] },

  // ── Camera RAW: Minolta ─────────────────────────────────────
  { format:"MRW",       ext:"mrw",   category:"RAW",         brand:"Minolta",    magic:[[0,["00","4D","52","4D"]]] },

  // ── Camera RAW: Sigma ───────────────────────────────────────
  { format:"X3F",       ext:"x3f",   category:"RAW",         brand:"Sigma",      magic:[[0,["46","4F","56","62"]]] },

  // ── Camera RAW: Hasselblad ──────────────────────────────────
  { format:"3FR",       ext:"3fr",   category:"RAW",         brand:"Hasselblad", magic:[[0,["49","49","2A","00"]]] },
  { format:"FFF",       ext:"fff",   category:"RAW",         brand:"Hasselblad", magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Phase One ───────────────────────────────────
  { format:"IIQ",       ext:"iiq",   category:"RAW",         brand:"Phase One",  magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Kodak ───────────────────────────────────────
  { format:"DCR",       ext:"dcr",   category:"RAW",         brand:"Kodak",      magic:[[0,["4D","4D","00","2A"]]] },
  { format:"KDC",       ext:"kdc",   category:"RAW",         brand:"Kodak",      magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Samsung ─────────────────────────────────────
  { format:"SRW",       ext:"srw",   category:"RAW",         brand:"Samsung",    magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Leica ───────────────────────────────────────
  { format:"RWL",       ext:"rwl",   category:"RAW",         brand:"Leica",      magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Epson ───────────────────────────────────────
  { format:"ERF",       ext:"erf",   category:"RAW",         brand:"Epson",      magic:[[0,["49","49","2A","00"]]] },

  // ── Camera RAW: Adobe DNG ───────────────────────────────────
  { format:"DNG",       ext:"dng",   category:"RAW",         brand:"Adobe",      magic:[[0,["49","49","2A","00"]]] },
  { format:"DNG",       ext:"dng",   category:"RAW",         brand:"Adobe",      magic:[[0,["4D","4D","00","2A"]]] },

  // ── Camera RAW: GoPro ───────────────────────────────────────
  { format:"GPR",       ext:"gpr",   category:"RAW",         brand:"GoPro",      magic:[[0,["49","49","2A","00"]]] },

  // ── Game / GPU textures ─────────────────────────────────────
  { format:"DDS",       ext:"dds",   category:"Game",        brand:null,         magic:[[0,["44","44","53","20"]]] },
  { format:"KTX",       ext:"ktx",   category:"Game",        brand:null,         magic:[[0,["AB","4B","54","58","20","31","31","BB"]]] },
  { format:"KTX2",      ext:"ktx2",  category:"Game",        brand:null,         magic:[[0,["AB","4B","54","58","20","32","30","BB"]]] },
  { format:"VTF",       ext:"vtf",   category:"Game",        brand:"Valve",      magic:[[0,["56","54","46","00"]]] },
  { format:"PKM",       ext:"pkm",   category:"Game",        brand:null,         magic:[[0,["50","4B","4D","20"]]] },

  // ── Legacy / Retro ──────────────────────────────────────────
  { format:"PCX",       ext:"pcx",   category:"Legacy",      brand:null,         magic:[[0,["0A"]]] },
  { format:"XBM",       ext:"xbm",   category:"Legacy",      brand:null,         magic:[[0,["23","64","65","66","69","6E","65"]]] },
  { format:"PBM",       ext:"pbm",   category:"Legacy",      brand:null,         magic:[[0,["50","31"]]] },
  { format:"PGM",       ext:"pgm",   category:"Legacy",      brand:null,         magic:[[0,["50","32"]]] },
  { format:"PPM",       ext:"ppm",   category:"Legacy",      brand:null,         magic:[[0,["50","33"]]] },
  { format:"PAM",       ext:"pam",   category:"Legacy",      brand:null,         magic:[[0,["50","37"]]] },
  { format:"XPM",       ext:"xpm",   category:"Legacy",      brand:null,         magic:[[0,["2F","2A","20","58","50","4D","20","2A","2F"]]] },
  { format:"SGI RGB",   ext:"sgi",   category:"Legacy",      brand:"SGI",        magic:[[0,["01","DA"]]] },
  { format:"IFF/ILBM",  ext:"iff",   category:"Legacy",      brand:null,         magic:[[0,["46","4F","52","4D"]]] },
  { format:"Sun Raster",ext:"sun",   category:"Legacy",      brand:null,         magic:[[0,["59","A6","6A","95"]]] },
  { format:"XWD",       ext:"xwd",   category:"Legacy",      brand:null,         magic:[[0,["00","00","00","06"]]] },
];

// ── Extension fallback table ─────────────────────────────────────────────────
const EXT_FALLBACK = {
  tga:"TGA", xbf:"XBF", cut:"CUT", pic:"PIC", pict:"PICT",
  wmf:"WMF", emf:"EMF", cgm:"CGM", plt:"PLT", hpgl:"HPGL",
  fig:"FIG", vsd:"VSD", cdr:"CDR", indd:"INDD", idml:"IDML",
  qxp:"QXP", mha:"MHA", nii:"NIfTI", nrrd:"NRRD", mrc:"MRC",
  hdf:"HDF5", hdf5:"HDF5", geotiff:"GeoTIFF", cog:"COG",
  ecw:"ECW", sid:"MrSID", img:"ERDAS IMG", raf2:"RAF",
  iiq:"IIQ", fff:"FFF", cap:"CAP", mef:"MEF", bay:"Casio RAW",
  srw:"SRW", rwl:"RWL", erf:"ERF", dcr:"DCR", kdc:"KDC",
  mrw:"MRW", x3f:"X3F", pef:"PEF", rw2:"RW2", orf:"ORF",
  nrw:"NRW", cr2:"CR2", cr3:"CR3", crw:"CRW", gpr:"GPR",
  dng:"DNG", arw:"ARW", nef:"NEF", raf:"RAF", srf:"SRF",
  sr2:"SR2", braw:"BRAW", r3d:"R3D", 
  astc:"ASTC", basis:"BASIS", pvr:"PVRTC", crn:"Crunch",
  vtf:"VTF (Valve)", pkm:"PKM", ktx:"KTX", ktx2:"KTX2", dds:"DDS",
  svgz:"SVGZ", eps:"EPS", ai:"AI", pdf:"PDF", dxf:"DXF",
  kml:"KML", kmz:"KMZ", geojson:"GeoJSON", gpx:"GPX",
  fits:"FITS", fit:"FITS", fts:"FITS",
  dcm:"DICOM", dicom:"DICOM",
  exr:"OpenEXR", hdr:"HDR", dpx:"DPX", cin:"CIN",
  jxl:"JPEG XL", jp2:"JPEG 2000", jxr:"JPEG XR", jng:"JNG",
  bpg:"BPG", avif:"AVIF", heic:"HEIC", heif:"HEIF",
  webp:"WebP", gif:"GIF", bmp:"BMP", ico:"ICO", cur:"CUR",
  png:"PNG", jpg:"JPEG", jpeg:"JPEG", tif:"TIFF", tiff:"TIFF",
  psd:"PSD", psb:"PSB", xcf:"XCF (GIMP)",
  pcx:"PCX", xbm:"XBM", xpm:"XPM", pbm:"PBM", pgm:"PGM",
  ppm:"PPM", pam:"PAM", sgi:"SGI RGB",
};

// ── Category color map (Benetton OG palette) ────────────────────────────────
const CATEGORY_COLORS = {
  "Common":       "#FF2D55",
  "Modern":       "#00AACC",
  "Professional": "#6C2BD9",
  "Vector":       "#FFD700",
  "Document":     "#FFD700",
  "RAW":          "#FF6680",
  "Scientific":   "#00C853",
  "Medical":      "#33FF7A",
  "Game":         "#9B5FFF",
  "Legacy":       "#888",
  "Unknown":      "#444",
};

// ── Main detect function ─────────────────────────────────────────────────────
/**
 * detect(file) → Promise<DetectResult>
 *
 * DetectResult {
 *   format:   string   // e.g. "CR3"
 *   ext:      string   // e.g. "cr3"
 *   category: string   // e.g. "RAW"
 *   brand:    string|null  // e.g. "Canon"
 *   color:    string   // hex color for UI badge
 *   method:   "magic"|"extension"|"unknown"
 *   confidence: "high"|"medium"|"low"
 * }
 */
function falconDetect(file) {
  return new Promise((resolve) => {
    // 1. Try magic bytes (read 192 bytes to cover DICOM offset 128)
    const reader = new FileReader();
    reader.onload = (e) => {
      const buf = new Uint8Array(e.target.result);

      for (const sig of FALCON_SIGNATURES) {
        if (_matchSig(buf, sig.magic)) {
          // For TIFF-based RAW — disambiguate by extension if available
          if ((sig.format === "TIFF" || sig.format === "DNG" ||
               sig.format === "NEF"  || sig.format === "CR2" ||
               sig.format === "ARW"  || sig.format === "PEF" ||
               sig.format === "SRW"  || sig.format === "RWL" ||
               sig.format === "ERF"  || sig.format === "GPR" ||
               sig.format === "KDC"  || sig.format === "DCR" ||
               sig.format === "SRF"  || sig.format === "SR2" ||
               sig.format === "3FR"  || sig.format === "FFF" ||
               sig.format === "IIQ"  || sig.format === "NRW") && file.name) {
            const extResult = _fromExtension(file.name);
            if (extResult && extResult.category === "RAW") {
              resolve({ ...extResult, method:"extension", confidence:"high" });
              return;
            }
          }
          resolve({
            format:   sig.format,
            ext:      sig.ext,
            category: sig.category,
            brand:    sig.brand,
            color:    CATEGORY_COLORS[sig.category] || CATEGORY_COLORS["Unknown"],
            method:   "magic",
            confidence: "high",
          });
          return;
        }
      }

      // 2. Extension fallback
      if (file.name) {
        const extResult = _fromExtension(file.name);
        if (extResult) {
          resolve({ ...extResult, method:"extension", confidence:"medium" });
          return;
        }
      }

      // 3. Unknown
      resolve({
        format:"Unknown", ext:"", category:"Unknown", brand:null,
        color: CATEGORY_COLORS["Unknown"], method:"unknown", confidence:"low",
      });
    };
    reader.onerror = () => resolve({
      format:"Unknown", ext:"", category:"Unknown", brand:null,
      color: CATEGORY_COLORS["Unknown"], method:"unknown", confidence:"low",
    });
    reader.readAsArrayBuffer(file.slice(0, 192));
  });
}

function _matchSig(buf, rules) {
  for (const [offset, bytes] of rules) {
    for (let i = 0; i < bytes.length; i++) {
      if (buf[offset + i] !== parseInt(bytes[i], 16)) return false;
    }
  }
  return true;
}

function _fromExtension(filename) {
  const ext = filename.split(".").pop().toLowerCase();
  const format = EXT_FALLBACK[ext];
  if (!format) return null;
  // Guess category from known ext groups
  const rawExts = ["cr2","cr3","crw","nef","nrw","arw","srf","sr2","raf","orf","rw2","pef","mrw","x3f","3fr","fff","iiq","dcr","kdc","srw","rwl","erf","dng","gpr","braw","r3d","bay","mef","cap"];
  const medicalExts = ["dcm","dicom","nii","nrrd","mha","mrc","fits","fit","fts","hdf","hdf5"];
  const gameExts = ["dds","ktx","ktx2","vtf","pkm","astc","basis","pvr","crn"];
  const legacyExts = ["pcx","xbm","xpm","pbm","pgm","ppm","pam","sgi","iff","tga","pict","wmf","emf","xwd","sun","cut","pic"];
  const vectorExts = ["svg","svgz","eps","ai","dxf","cdr","plt","hpgl","fig","vsd","kml","kmz","geojson","gpx"];

  let category = "Common";
  if (rawExts.includes(ext))     category = "RAW";
  else if (medicalExts.includes(ext)) category = ext === "dcm" || ext === "dicom" ? "Medical" : "Scientific";
  else if (gameExts.includes(ext))    category = "Game";
  else if (legacyExts.includes(ext))  category = "Legacy";
  else if (vectorExts.includes(ext))  category = "Vector";
  else if (["psd","psb","exr","hdr","tiff","tif","dpx"].includes(ext)) category = "Professional";
  else if (["avif","heic","heif","webp","jxl","jp2","jxr","bpg"].includes(ext)) category = "Modern";
  else if (["pdf","indd","idml","qxp"].includes(ext)) category = "Document";

  // Guess brand from ext
  const brands = {
    cr2:"Canon", cr3:"Canon", crw:"Canon",
    nef:"Nikon", nrw:"Nikon",
    arw:"Sony",  srf:"Sony",  sr2:"Sony",
    raf:"Fujifilm",
    orf:"Olympus",
    rw2:"Panasonic",
    pef:"Pentax",
    mrw:"Minolta",
    x3f:"Sigma",
    "3fr":"Hasselblad", fff:"Hasselblad",
    iiq:"Phase One", cap:"Phase One",
    dcr:"Kodak", kdc:"Kodak",
    srw:"Samsung",
    rwl:"Leica",
    erf:"Epson",
    dng:"Adobe",
    gpr:"GoPro",
    braw:"Blackmagic",
    r3d:"RED Cinema",
    psd:"Adobe", psb:"Adobe", ai:"Adobe", pdf:"Adobe",
    vtf:"Valve",
  };

  return {
    format,
    ext,
    category,
    brand: brands[ext] || null,
    color: CATEGORY_COLORS[category] || CATEGORY_COLORS["Unknown"],
  };
}

// ── Badge renderer ───────────────────────────────────────────────────────────
/**
 * renderDetectBadge(result, containerEl)
 * Injects the autodetect badge HTML into a container element.
 */
function renderDetectBadge(result, containerEl) {
  const brand = result.brand ? ` · ${result.brand}` : "";
  const conf  = result.confidence === "high" ? "✦ DETECTED" :
                result.confidence === "medium" ? "≈ GUESSED" : "? UNKNOWN";
  containerEl.innerHTML = `
    <div class="falcon-detect-badge" style="
      display:inline-flex; align-items:center; gap:10px;
      background:#1a1a1a; border:1px solid #2a2a2a;
      border-left:3px solid ${result.color};
      padding:10px 16px; font-family:'Space Mono',monospace;
    ">
      <span style="font-size:9px;letter-spacing:3px;color:${result.color};text-transform:uppercase">${conf}</span>
      <span style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:#fff;letter-spacing:2px">${result.format}</span>
      ${result.category !== "Unknown" ? `<span style="font-size:9px;letter-spacing:2px;color:#555;text-transform:uppercase">${result.category}${brand}</span>` : ""}
    </div>
  `;
}

// ── Expose globally ──────────────────────────────────────────────────────────
window.falconDetect       = falconDetect;
window.renderDetectBadge  = renderDetectBadge;
window.FALCON_CATEGORY_COLORS = CATEGORY_COLORS;
