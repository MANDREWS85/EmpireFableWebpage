export default function BackgroundImageNoText({
  src,
  title,
  description,
  link,
  width,
  height,
}) {
  const id = "BackgroundImageNoText";
  return (
    <div
      id={id}
      className={id}
      onClick={() => {
        window.open(link, "_blank", "noopener noreferrer");
      }}
      style={{
        backgroundImage: "url(" + src + ")",
        width: width,
        height: height,
        margin: "auto",
        padding: "3px",
        overflow: "wrap",

        backgroundSize: "100% 100%",
      }}
    >
      <div id="" className="">
        <a href={link} target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
}
