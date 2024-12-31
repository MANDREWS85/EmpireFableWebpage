import IframeContainer from "../components/IframeContainer.jsx";

export default function Videos() {
  const id = "Videos";
  return (
    <div>
      <h3>{id}</h3>

        <IframeContainer 
          title="BLOG"
          src="https://www.youtube.com/watch?v=7AgUOWjug74"
          height="800px"
          width="100%"

        />

    </div>
  );
}





