import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import Games from "../Routes/Games";
import PaperCrafts from "../Routes/PaperCrafts";
import VTTMaps from "../Routes/VTTMaps";

export default function RoutingNav() {
  const id = "RoutingNav";

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BrowserRouter>
      <div
        id={id}
        className={id}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px",
        }}
      >
        {/* === Navigation Buttons Section === */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0px",
          }}
        >
          {/* Home Button */}
          <div
            id="LinkContainer"
            style={{
              border: "none",
              display: "inline-flex",
              flexDirection: "column",
              backgroundImage:
                "url('https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-e1734993352335-234x300.webp')",
              backgroundSize: "110% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              width: "80px",
              height: "80px",
              justifyContent: "center",
              alignItems: "left",
              textAlign: "left",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              HOME
            </Link>
          </div>

          {/* Games Button */}
          <div
            id="LinkContainer"
            style={{
              border: "none",
              display: "inline-flex",
              flexDirection: "column",
              backgroundImage:
                "url('https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-e1734993352335-234x300.webp')",
              backgroundSize: "110% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              width: "80px",
              height: "80px",
              justifyContent: "center",
              alignItems: "left",
              textAlign: "left",
            }}
          >
            <Link
              to="/games"
              style={{ textDecoration: "none", color: "black" }}
            >
              GAMES
            </Link>
          </div>

          {/* Paper Crafts Button */}
          <div
            id="LinkContainer"
            style={{
              border: "none",
              display: "inline-flex",
              flexDirection: "column",
              backgroundImage:
                "url('https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-e1734993352335-234x300.webp')",
              backgroundSize: "110% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              width: "80px",
              height: "80px",
              justifyContent: "center",
              alignItems: "left",
              textAlign: "left",
            }}
          >
            <Link
              to="/papercrafts"
              style={{ textDecoration: "none", color: "black" }}
            >
              PAPER
              <br />
              CRAFT
            </Link>
          </div>

          {/* VTT Maps Button */}
          <div
            id="LinkContainer"
            style={{
              border: "none",
              display: "inline-flex",
              flexDirection: "column",
              backgroundImage:
                "url('https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-e1734993352335-234x300.webp')",
              backgroundSize: "110% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              width: "80px",
              height: "80px",
              justifyContent: "center",
              alignItems: "left",
              textAlign: "left",
            }}
          >
            <Link
              to="/vttmaps"
              style={{ textDecoration: "none", color: "black" }}
            >
              VTT MAPS
            </Link>
          </div>
        </div>
        {/* === End of Navigation Buttons Section === */}

        {/* === Route Components Section === */}
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            padding: "0px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <Routes>
            {/* Games Route */}
            <Route path="games" element={<Games />} />

            {/* Paper Crafts Route */}
            <Route path="papercrafts" element={<PaperCrafts />} />

            {/* VTT Maps Route */}
            <Route path="vttmaps" element={<VTTMaps />} />
          </Routes>
        </div>
        {/* === End of Route Components Section === */}
      </div>
    </BrowserRouter>
  );
}
