import Meme from "./Meme";
import AddMemeForm from "./AddMemeForm";
import { useSelector, useDispatch } from "react-redux";

function MemeContainer() {
  const memes = useSelector((store) => store.memes);
  const dispatch = useDispatch();
  const removeMeme = (id) => {
    dispatch({ type: "REMOVE_MEME", id });
  };
  console.log(memes);
  return (
    <div className="MemeContainer">
      <AddMemeForm />
      {memes.map((meme) => (
        <Meme
          key={meme.id}
          id={meme.id}
          topText={meme.topText}
          bottomText={meme.bottomText}
          img={meme.img}
          removeMeme={removeMeme}
        />
      ))}
    </div>
  );
}

export default MemeContainer;
