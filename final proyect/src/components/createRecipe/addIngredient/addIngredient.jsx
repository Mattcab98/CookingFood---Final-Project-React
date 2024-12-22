
import { useState } from 'react';
import './addIngredient.css';
import Items from '../items/items.jsx'

const AddIngredient = () => {

  const startingData = [
    { title: '#1 ITEM', id: Date.now() + 1 },
    { title: '#2 ITEM', id: Date.now() + 2 },
    { title: '#3 ITEM', id: Date.now() + 3 },
  ]

  const [currentItems, setCurrentItem] = useState(startingData);
  const [newItemTitle, setNewItemTitle] = useState("");

  function addItem(newItem) {
    setCurrentItem([...currentItems, newItem]);
  }

  function deleteItem(itemToDelete) {
    setCurrentItem(currentItems.filter((item) => item.id !== itemToDelete));
  }

  return (
    <>
      <div className="container__ingredientes">
        <h2>Ingredientes</h2>
        <div className="ingredientes__list-input">
          <input
            value={newItemTitle}
            onChange={(e) => {
              setNewItemTitle(e.target.value);
            }}
            type="text" placeholder='Agregue sus ingredientes' />
          <button
            onClick={() => {
              const trimmedTitle = newItemTitle.trim();
              if (trimmedTitle) {
                const newItem = {
                  title: trimmedTitle,
                  id: Date.now()
                };
                addItem(newItem);
                setNewItemTitle("")
              }
            }}
            id='submit'
            disabled={!newItemTitle}
          >+</button>
        </div>
        <div className="ingredientes__list-items">
          <ul className="elementos__list">
            {currentItems.map((item) => (
              <Items deleteCallBack={deleteItem} id={item.id} key={item.id}>
                {item.title}
              </Items>
            ))}
          </ul>
        </div>
      </div>
    </>
  )

}

export default AddIngredient;