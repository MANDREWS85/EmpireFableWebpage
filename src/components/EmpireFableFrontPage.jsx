import IframeContainer from "../components/IframeContainer.jsx";
import RoutingNav from "../components/RoutingNav.jsx";
import BackgroundImage from "../components/BackgroundImage.jsx";
import BackgroundImageNoText from "../components/BackgroundImageNoText.jsx";
import React, { useRef } from "react";
const default_height = "400px";
const default_width = "";

export default function EmpireFableFrontPage() {
  const id = "EmpireFableFrontPage";
  return (
    <div
      id={id}
      class={id}
      style={{
        maxWidth: "1200px",
        margin: "0 auto", // Centers the div horizontally
        textAlign: "center", // Centers text inside the div
      }}
    >
      <RoutingNav />
      {/* #########################################################################*/}
      <div id="OneColumnContainer" class="OneColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/EmpireFable-Map-e1735505124729.jpg"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empire-fable"
            height={default_height}
            width={default_width}
          />
        </div>
      </div>

      {/* ############################ GAMES  #################################*/}
      <div id="OneColumnContainer" class="OneColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-4-e1735489679923.webp"
            title="GAMES IN DEVELOPMENT"
            description=""
            link="#"
            height="60px"
            width="100%"
          />
        </div>
      </div>
      {/* ############################ GAME 1 #################################*/}
      <div id="ThreeColumnContainer" class="ThreeColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ GAME 1 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1nLzY3MDYwMzAuZ2lm/105x83%23/749b%2Ff.gif"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empire-fable"
            height={default_height}
            width={default_width}
          />
          {/* ############################ GAME 1 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="EMPIRE FABLE CLASSIC"
            description="Welcome to the world of Empire Fable. A Fable like 2D RPG. Plunge your self into an epic world of dungeon delving and gold piece looting. Discover new weapons and armor to equip your avatar. While exploring fantasy towns, dungeons and forests."
            link="https://mag-web-designs.itch.io/empire-fable"
            height="300px"
            width={default_width}
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ GAME 2 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1hZ2UvMjMwOTI0NC8xODkyMzMzMi5wbmc=/250x600/fzhHcd.png"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empirefable3050"
            height={default_height}
            width={default_width}
          />
          {/* ############################ GAME 2 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="EMPIRE FABLE 3050"
            description="2D Rogue like Space Adventure / RTS  set in the Grimdark.  Fly around Grimdark Space in the Year 3050  as a Space Rogue.   Summon your Henchman to fight with you.Kill Grimdark horrors and collect gold.  "
            link="https://mag-web-designs.itch.io/empirefable3050"
            height="300px"
            width={default_width}
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ GAME 3 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1nLzE1MjM4MjEzLmpwZw==/original/oAmxAE.jpg"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empire-fable-tactics-vtt"
            height={default_height}
            width={default_width}
          />
          {/* ############################ GAME 3 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="EMPIRE FABLE TACTICS VTT"
            description="Empire Fable Real Time VTT.  Work in progress Real Time  Virtual Table Top Mobile Optimized Simulation.   I wanted a simpler alternative to Roll20, Foundry VTT, and other Virtual Table Top Simulators."
            link="https://mag-web-designs.itch.io/empire-fable-tactics-vtt"
            height="300px"
            width={default_width}
          />
        </div>
      </div>

      {/* ############################ PAPER CRAFTS  #################################*/}
      <div id="OneColumnContainer" class="OneColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-4-e1735489679923.webp"
            title="FEATURED PAPER CRAFTS"
            description=""
            link="#"
            height="60px"
            width="100%"
          />
        </div>
      </div>

      {/* ############################ 1 #################################*/}
      <div id="ThreeColumnContainer" class="ThreeColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ 1 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1hZ2UvMTQ5MjY5MS84NzAyNDMzLmpwZWc=/347x500/2V58ts.jpeg"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empire-fable-terrain-set-one"
            height={default_height}
            width={default_width}
          />
          {/* ############################ 1 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="Empire Fable Terrain Set One"
            description="Welcome to the first set in Empire Fable Tactical Terrain series. Paper Craft Tactical Game.  Using some textures and artwork from the online RPG game Empire Fable.  This set includes a 12 page .pdf.  Set One is the Forest and hill terrain set. "
            link="https://mag-web-designs.itch.io/empire-fable-terrain-set-one"
            height="300px"
            width={default_width}
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ 2 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1nLzE1NzYyNzM5LnBuZw==/original/3iFD9R.png"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/roman-building-villa-paper-craft-model"
            height={default_height}
            width={default_width}
          />
          {/* ############################ 2 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="Ultra HD Roman Building Villa Paper Craft Model"
            description="Ultra HD Roman Building Villa Paper Craft Model. 8k Resolution Papercraft Model.  Designed to be Printed on Standard Printer Paper. Roughly scaled to 28 -32 mm miniatures or 2.5d paper models. "
            link="https://mag-web-designs.itch.io/roman-building-villa-paper-craft-model"
            height="300px"
            width={default_width}
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ 3 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1hZ2UvMzAzMjczNC8xODEzNjg1OS5naWY=/347x500/ag5vKh.gif"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/mind-craft-inspired-3d-block-paper-craft-terrain"
            height={default_height}
            width={default_width}
          />
          {/* ############################ 3 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="MinD-Craft Inspired 3D Print and Play Block Paper Craft Terrain"
            description="Introducing the MinD-Craft Inspired 3D Block Paper Craft Terrain, a high-resolution, 8K textured terrain set designed to bring your tabletop gaming sessions to life! "
            link="https://mag-web-designs.itch.io/mind-craft-inspired-3d-block-paper-craft-terrain"
            height="300px"
            width={default_width}
          />
        </div>
      </div>

      {/* ############################ VTT MAPS  #################################*/}
      <div id="OneColumnContainer" class="OneColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-4-e1735489679923.webp"
            title="FEATURED VTT MAPS"
            description=""
            link="#"
            height="60px"
            width="100%"
          />
        </div>
      </div>
      {/* ############################  VTT MAPS #################################*/}
      <div id="ThreeColumnContainer" class="ThreeColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ 1 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1hZ2UvMjU3Mzc4Ny8xNTMxOTU3Mi5qcGc=/original/V1014p.jpg"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empire-fable-vtt-battle-map-pack-forest-geomorphs-forestmorphs-1"
            height={default_height}
            width={default_width}
          />
          {/* ############################ 1 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="Empire Fable VTT Battle Map Pack Forest Geomorphs Forestmorphs 1"
            description="Pack of 13 High Resolution 2048px by 2048px Forest Geomorph Style Battle Maps.  Made in Inkarnate.  These are map assets I'm using in Empire Fable.  Perfect for other VTT,s like Roll20 or Foundry as well. "
            link="https://mag-web-designs.itch.io/empire-fable-vtt-battle-map-pack-forest-geomorphs-forestmorphs-1"
            height="300px"
            width={default_width}
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ 2 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1hZ2UvMjYxMDE5NC8xNTU0Njc4Mi5naWY=/original/4Dnou%2B.gif"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/bfg-style-ork-frigate-animated-vtt-battle-map-orc-gork-class-frigate"
            height={default_height}
            width={default_width}
          />
          {/* ############################ 2 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="BFG Style Ork Frigate VTT Battle Map - Orc Gork Class Frigate"
            description="BFG Style Ork Frigate VTT Battle Map - Orc Gork Class Frigate.  Map pack contains 4k high resolution battle maps. Outside view, inside view, grid and no grid."
            link="https://mag-web-designs.itch.io/bfg-style-ork-frigate-animated-vtt-battle-map-orc-gork-class-frigate"
            height="300px"
            width={default_width}
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          {/* ############################ 3 PICTURE #################################*/}
          <BackgroundImage
            src="https://img.itch.zone/aW1hZ2UvMjk2MDMxOS8xNzcxMDY2OS5qcGc=/original/b2PKNX.jpg"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empire-fable-grim-dark-city"
            height={default_height}
            width={default_width}
          />
          {/* ############################ GAME 3 DESCRIPTION #################################*/}
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735443232789.webp"
            title="Empire Fable Grim Dark City"
            description="High Resolution Epic 6 to 8mm Scale Table Top Batte Map .  VTT Map and Print and Play on standard 8.5 by 11 paper.   High resolution VTT map can be scaled up or down in Foundry or Roll20. Print and Play is scaled for Epic 6-8mm Scale."
            link="https://mag-web-designs.itch.io/empire-fable-grim-dark-city"
            height="300px"
            width={default_width}
          />
        </div>
      </div>
    </div>
  );
}
