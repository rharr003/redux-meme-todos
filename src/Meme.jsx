import "./Meme.css";
function Meme({ img, topText, bottomText, removeMeme, id }) {
  console.log(bottomText);
  return (
    <div>
      <div className="meme">
        <img src={img} alt="meme" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
      <button onClick={() => removeMeme(id)}>Remove</button>
    </div>
  );
}

export default Meme;
