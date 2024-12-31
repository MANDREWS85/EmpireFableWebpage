export default function IframeContainer({ title, src, height, width }) {
  const id = "IframeContainer";
  return (
    <div id={id} class="">
      {/*<iframe height={height} width={width} src={src} title={title}></iframe>*/}

      <iframe width="100%" height="710" src="https://www.youtube.com/embed/7AgUOWjug74" title="EMPIRE FABLE |  RPG |  EMPIREFABLE.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    </div>
        
  );
}



