import React, { useState, useEffect } from "react";

import axios from "axios";

const initialItem = {
  title: "",
  director: "",
  metascore: "",
  stars: "",
  id: ""
};

const UpdateForm = props => {
  const [item, setItem] = useState(initialItem);

  const changeHandler = event => {
    let item = event.target.value;
    setItem({
      ...item,
      [event.target.value]: item
    });
  };

  //   useEffect(() => {
  //     if (props.item.length > 0) {
  //       const newItem = props.items.find(
  //         thing => `${thing.id}` === props.match.params.id
  //       );
  //       setItem(newItem);
  //     }
  //   }, [props.item, props.match.params.id]);

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .put("http://localhost:5000/api/movies/:id", item)
      .then(res => {
        props.updateItems(res.data);
        props.history.push("/movies/:id");
      })
      .catch(error => console.log(error));
  };

  //   if (props.items.length === 0) {
  //     return <h2>Loading..</h2>;
  //   }

  return (
    <>
      <h2>Update Movie</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Movie Name"
          onChange={changeHandler}
          value={item.title}
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={changeHandler}
          value={item.director}
        />
        <input
          type="number"
          name="metascore"
          placeholder="Metascore"
          onChange={changeHandler}
          value={item.metascore}
        />
        <input
          type="text"
          name="stars"
          placeholder="Stars"
          onChange={changeHandler}
          value={item.stars}
        />
        <input
          type="text"
          name="id"
          placeholder="id"
          onChange={changeHandler}
          value={item.id}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default UpdateForm;
