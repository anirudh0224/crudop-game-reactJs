import React, { useState } from 'react'

function Data() {
  const [Text, setText] = useState("Anirudh");
  const [Data, setData] = useState([]);
  const [Edit, setEdit] = useState(-1);
  const handelAdd = () => {
    const copy = [...Data];
    if (Edit === -1) {
      copy.push(Text);
    }else{
      copy[Edit] = Text;
      setEdit(-1);

    }
    setData(copy);
    setText('');
  }
  const handelDelete = (index) => {
    const copy = [...Data];
    copy.splice(index, 1);
    setData(copy);
  }
  const handelUpdate = (el, i) => {
    setText(el);
    setEdit(i);
  }
  return (
    <div>
      <input type="text" value={Text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handelAdd()}>
        {
          Edit === -1 ? 'Add' : 'Edit'
        }
      </button>

      {
        Data.map((el, i) => (
          <p key={i}>{el} <button onClick={() => handelDelete(i)}>Delete</button> <button onClick={() => handelUpdate(el, i)}>Update</button> </p>
        ))
      }
    </div>
  )
}

export default Data
