import { useState } from "react";

export default function Form({ onAddItems }) {
     const [description, setDescription] = useState("");
     const [quantity, setQuantity] = useState(1);
   
     function handleSubmit(e) {
       e.preventDefault();
   
       if (!description) return;
   
       const newItem = { description, quantity, packed: false, id: Date.now() };
   
       onAddItems(newItem);
   
       setDescription("");
       setQuantity(1);
     }
   
     return (
       <form className="add-form" onSubmit={handleSubmit}>
         <h3>What do you need for your trop?</h3>
         <select
           value={quantity}
           onChange={(e) => setQuantity(Number(e.target.value))}
         >
           {Array.from({ length: 20 }, (_, i) => i + 1).map(
             (
               num // make array from 1 to 20
             ) => (
               <option value={num} key={num}>
                 {num}
               </option>
             )
           )}
         </select>
         <input
           type="text"
           placeholder="Item..."
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           // console.log(e.target);
         />
         <button>Add</button>
       </form>
     );
   }