import { useState } from 'react';
import MyList from './MyList';



const MyContainer = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState([
        {id: "1", text: "This is an item", clicked: false},
        {id: "2", text: "Also this", clicked: false},
    ]);

    const updateItem = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, clicked: !item.clicked } : item
            )
        );
    } 

   const handleInputChange = (e) => {
    setText(e.target.value);
   };

   const handleAddItem = () => {
        if(text.trim() !== ''){
            const newId = items.length > 0 ? items[items.length -1].id +1 :1; 
            const newItem = {id: newId, text: text, clicked: false }
            setItems([...items, newItem]);
            setText('');
        }
   };

    return (
        <div>
            <h2>My Container</h2>
            <MyList
            header = "Really epic list component"
            items = {items}
            onItemClick = {updateItem}
            />
            <textarea placeholder="Add list item" rows="3" cols="40" onChange={handleInputChange} value={text} />
            <button onClick={handleAddItem}>Add</button>
        </div>
    )
    
}

export default MyContainer;