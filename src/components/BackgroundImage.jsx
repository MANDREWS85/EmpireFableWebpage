export default function BackgroundImage({
  src,
  title,
  description,
  link,
  width,
  height,
}) {
  const id = "BackgroundImage";
  return (
    <div
      id={id}
      className={id}
      onClick={() => {
        window.open(link, "_blank", "noopener noreferrer");
      }}
      style={{
        backgroundImage: "url(" + src + ")",
        minWidth: width,
        minHeight: height,
        margin: "auto",
        padding: "3px",
        overflow: "wrap",
        maxHeight: height,
        maxWidth: width,

        backgroundSize: "100% 100%",
      }}
    >
      <div id="title-container" className="title-container" style={{}}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}
