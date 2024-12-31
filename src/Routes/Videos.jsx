import IframeContainer from "../components/IframeContainer.jsx";

export default function Videos() {
  const id = "Videos";
  return (
    <div>
      <h3>{id}</h3>

        <IframeContainer 
          title="BLOG"
          src="https://empirefable.magwebdesigns.net/wp/EMPIRE-FABLE-OCEAN-DEEP-FINAL-3-19-23-b.html"
          height="800px"
          width="100%"

        />

    </div>
  );
}