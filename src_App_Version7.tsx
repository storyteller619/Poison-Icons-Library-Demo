import React, { useState } from "react";
import { IconButton, ICONS, COLOR_PALETTE, IconGallery } from "poison-icons";

const defaultIcon = "favorite";
const defaultColor = "#f1b7a3";
const defaultSize = 80;

function App() {
  const [icon, setIcon] = useState(defaultIcon);
  const [color, setColor] = useState(defaultColor);
  const [size, setSize] = useState(defaultSize);

  return (
    <div style={{ padding: 32, fontFamily: "sans-serif" }}>
      <h1>
        <span role="img" aria-label="poison">
          🧪
        </span>{" "}
        Poison Icons Demo
      </h1>
      <p>
        Select an icon, color, and size to preview the <code>IconButton</code> component.
      </p>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <select value={icon} onChange={e => setIcon(e.target.value)}>
          {ICONS.map(i => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <select value={color} onChange={e => setColor(e.target.value)}>
          {COLOR_PALETTE.map(c => (
            <option key={c.value} value={c.value}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          min={24}
          max={128}
          step={4}
          value={size}
          onChange={e => setSize(Number(e.target.value))}
        />{" "}
        px
        <IconButton icon={icon} color={color} size={size} />
      </div>
      <h2 style={{ marginTop: 48 }}>All Icons</h2>
      <IconGallery color={color} size={40} showNames />
    </div>
  );
}

export default App;