import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddMemeForm() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
    img: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_MEME", meme: { ...formData, id: uuid() } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="topText">Top Text</label>
      <input
        type="text"
        name="topText"
        id="topText"
        maxLength={15}
        value={formData.topText}
        onChange={handleChange}
      />
      <label htmlFor="bottomText">Bottom Text</label>
      <input
        type="text"
        name="bottomText"
        id="bottomText"
        maxLength={15}
        value={formData.bottomText}
        onChange={handleChange}
      />
      <label htmlFor="img">Image URL</label>
      <input
        type="text"
        name="img"
        id="img"
        value={formData.img}
        onChange={handleChange}
      />
      <button>Add Meme</button>
    </form>
  );
}

export default AddMemeForm;
