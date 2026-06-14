"use client";
import { useState, useRef, useEffect } from "react";
import { LOCATIONS, REGIONS, searchLocations, SearchResult } from "../data/locations";

interface LocationPickerProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function LocationPicker({
  name,
  value,
  onChange,
  placeholder,
}: LocationPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState(value || "");
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputVal(value || "");
  }, [value]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const isSearching = inputVal.trim().length > 0;
  const searchResults: SearchResult[] = isSearching ? searchLocations(inputVal) : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputVal(val);
    onChange(val);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const handleSelect = (city: string, country: string) => {
    const val = `${city}, ${country}`;
    setInputVal(val);
    onChange(val);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") setIsOpen(true);
      return;
    }
    if (isSearching) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, searchResults.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
      }
      if (e.key === "Enter" && activeIndex >= 0) {
        const r = searchResults[activeIndex];
        handleSelect(r.city, r.country);
      }
    }
  };

  const toggleRegion = (region: string) => {
    setExpandedRegion((prev) => (prev === region ? null : region));
    setExpandedCountry(null);
  };

  const toggleCountry = (country: string) => {
    setExpandedCountry((prev) => (prev === country ? null : country));
  };

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <style>{`
        .lp-wrap { position: relative; }

        .lp-input {
          width: 100%;
          background: #111;
          border: 1.5px solid #252525;
          border-radius: 10px;
          padding: 0.82rem 2.6rem 0.82rem 1rem;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .lp-input::placeholder { color: #444; }
        .lp-input:focus {
          border-color: #c8a96e;
          box-shadow: 0 0 0 3px rgba(200,169,110,0.1);
        }

        .lp-icon {
          position: absolute;
          right: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          color: #444;
          font-size: 0.85rem;
          pointer-events: none;
          transition: color 0.2s;
        }
        .lp-input:focus ~ .lp-icon { color: #c8a96e; }

        .lp-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #0d0d0d;
          border: 1.5px solid #222;
          border-radius: 12px;
          max-height: 360px;
          overflow-y: auto;
          z-index: 9999;
          box-shadow: 0 12px 40px rgba(0,0,0,0.85);
          scrollbar-width: thin;
          scrollbar-color: #252525 transparent;
        }
        .lp-dropdown::-webkit-scrollbar { width: 5px; }
        .lp-dropdown::-webkit-scrollbar-track { background: transparent; }
        .lp-dropdown::-webkit-scrollbar-thumb { background: #252525; border-radius: 3px; }

        .lp-search-item {
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          cursor: pointer;
          transition: background 0.12s;
          font-size: 0.88rem;
          color: #bbb;
          border-bottom: 1px solid #161616;
        }
        .lp-search-item:last-child { border-bottom: none; }
        .lp-search-item:hover, .lp-search-item.lp-active {
          background: rgba(200,169,110,0.1);
          color: #fff;
        }
        .lp-search-item .lp-ctag {
          margin-left: auto;
          font-size: 0.72rem;
          color: #484848;
          white-space: nowrap;
        }
        .lp-search-item:hover .lp-ctag,
        .lp-search-item.lp-active .lp-ctag { color: #887040; }

        .lp-region-row {
          padding: 0.45rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #3a3a3a;
          background: #090909;
          user-select: none;
          transition: color 0.15s;
          border-top: 1px solid #161616;
        }
        .lp-region-row:first-child { border-top: none; }
        .lp-region-row:hover { color: #555; }
        .lp-region-row.lp-region-open { color: #c8a96e88; }

        .lp-country-row {
          padding: 0.6rem 1rem 0.6rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          cursor: pointer;
          font-size: 0.87rem;
          color: #999;
          user-select: none;
          transition: background 0.12s, color 0.12s;
          border-bottom: 1px solid #141414;
        }
        .lp-country-row:hover { background: #131313; color: #ddd; }
        .lp-country-row.lp-country-open { color: #c8a96e; background: rgba(200,169,110,0.04); }
        .lp-country-name { flex: 1; }
        .lp-chev {
          font-size: 0.65rem;
          color: #444;
          transition: transform 0.2s, color 0.2s;
        }
        .lp-country-open .lp-chev { transform: rotate(90deg); color: #c8a96e; }

        .lp-city-list { background: #0b0b0b; }
        .lp-city-item {
          padding: 0.52rem 1rem 0.52rem 2.8rem;
          font-size: 0.84rem;
          color: #777;
          cursor: pointer;
          transition: background 0.1s, color 0.1s;
          border-bottom: 1px solid #111;
        }
        .lp-city-item:last-child { border-bottom: none; }
        .lp-city-item:hover {
          background: rgba(200,169,110,0.09);
          color: #c8a96e;
          padding-left: 3rem;
        }

        .lp-empty {
          padding: 1.5rem;
          text-align: center;
          color: #444;
          font-size: 0.85rem;
        }
      `}</style>

      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={inputVal}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Type city, port or country…"}
          className="lp-input"
          autoComplete="off"
        />
        <span className="lp-icon">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {isOpen && (
        <div className="lp-dropdown">
          {/* ── SEARCH MODE ── */}
          {isSearching ? (
            searchResults.length > 0 ? (
              searchResults.map((r, i) => (
                <div
                  key={`${r.country}-${r.city}`}
                  className={`lp-search-item${activeIndex === i ? " lp-active" : ""}`}
                  onMouseDown={() => handleSelect(r.city, r.country)}
                >
                  <span>{r.flag}</span>
                  <span>{r.city}</span>
                  <span className="lp-ctag">{r.country}</span>
                </div>
              ))
            ) : (
              <div className="lp-empty">No locations found for &ldquo;{inputVal}&rdquo;</div>
            )
          ) : (
            /* ── BROWSE MODE: Region → Country → Cities ── */
            REGIONS.map((region) => {
              const regionLocs = LOCATIONS.filter((l) => l.region === region);
              const isRegionOpen = expandedRegion === region;
              return (
                <div key={region}>
                  <div
                    className={`lp-region-row${isRegionOpen ? " lp-region-open" : ""}`}
                    onMouseDown={(e) => { e.preventDefault(); toggleRegion(region); }}
                  >
                    <span>{region}</span>
                    <span style={{ fontSize: "0.7rem" }}>{isRegionOpen ? "▲" : "▼"}</span>
                  </div>

                  {isRegionOpen &&
                    regionLocs.map((loc) => {
                      const isCountryOpen = expandedCountry === loc.country;
                      return (
                        <div key={loc.country}>
                          <div
                            className={`lp-country-row${isCountryOpen ? " lp-country-open" : ""}`}
                            onMouseDown={(e) => { e.preventDefault(); toggleCountry(loc.country); }}
                          >
                            <span>{loc.flag}</span>
                            <span className="lp-country-name">{loc.country}</span>
                            <span className="lp-chev">▶</span>
                          </div>

                          {isCountryOpen && (
                            <div className="lp-city-list">
                              {loc.cities.map((city) => (
                                <div
                                  key={city}
                                  className="lp-city-item"
                                  onMouseDown={() => handleSelect(city, loc.country)}
                                >
                                  {city}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
