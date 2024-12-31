import IframeContainer from "../components/IframeContainer.jsx";

export default function Blog() {
  const id = "Blog";
  return (
    <div>
      <h3>{id}</h3>

        <IframeContainer 
          title="BLOG"
          src="https://empirefable.magwebdesigns.net/wp/"
          height="800px"
          width="100%"
          
        />
      
    </div>
  );
}
