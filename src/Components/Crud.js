import React, { useState } from 'react';


function Crud() {
    const [text, setText] = useState('hello india');
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(-1);
    const handelAdd = () => {
        let copy = [...data];
        if (edit === -1) {
            copy.push(text);
        } else {
            copy[edit] = text
            setEdit(-1)

        }
        setData(copy);
        setText('');
    }
    const handelDelete = (index) => {
        const copy = [...data]
        copy.splice(index, 1)
        setData(copy)
    }
    const handelUpdate = (el, i) => {
        setText(el)
        setEdit(i)

    }
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => handelAdd()}>
                {
                    edit === -1 ? 'Add' : 'Edit'
                }
            </button>

            {
                data.map((el, i) => (
                    <p key={i} id="dataList">{el} <button onClick={() => handelDelete(i)}>Delete</button><button onClick={() => handelUpdate(el, i)}>Update</button></p>
                ))
            }
        </div>
    )
}

export default Crud
