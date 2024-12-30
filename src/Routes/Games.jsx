import BackgroundImage from "../components/BackgroundImage.jsx";

export default function Games() {
  const id = "Games";
  return (
    <div>
      <div id="ThreeColumnContainer" class="ThreeColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage
            src="https://img.itch.zone/aW1nLzE4OTIzMjIwLmdpZg==/105x83%23/ASt8zi.gif"
            title=""
            description=""
            link="https://mag-web-designs.itch.io/empirefable3050"
            height="150px"
            width="150px"
          />

          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735002626841.webp"
            title="Empire Fable 3050"
            description="2D Rogue like Space Adventure / RTS set in the Grimdark. Fly around Grimdark Space in the Year 3050 as a Space Rogue. Summon your Henchman to fight with you.Kill Grimdark horrors and collect gold."
            link="https://mag-web-designs.itch.io/empirefable3050"
            height="150px"
            width="150px"
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage
            src="https://img.itch.zone/aW1nLzY3MDYwMzAuZ2lm/105x83%23/749b%2Ff.gif"
            title="Empire Fable Classic"
            description="Welcome to the world of Empire Fable. A Fable like 2D RPG. Plunge your self into an epic world of dungeon delving and gold piece looting. Discover new weapons and armor to equip your avatar. While exploring fantasy towns, dungeons and forests."
            link="https://mag-web-designs.itch.io/empire-fable"
            height="150px"
            width="150px"
          />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage
            src="https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2024/12/banner-gui-2-1-e1735002626841.webp"
            title="GAME 3"
            description=""
            link=""
            height="150px"
          />
        </div>
      </div>
    </div>
  );
}
