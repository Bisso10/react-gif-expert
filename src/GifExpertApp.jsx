import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

const [categories, setCategories] = useState([]);

const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;
    //setCategories([...categories, 'valorant' ]);
    setCategories([newCategory,...categories]);
    //console.log(newCategory);
}

return (
  <>

  <h1>Busca tu gif putete</h1>

    <AddCategory 
    
      onNewCategory = { event =>onAddCategory(event)}
    />
    

      {categories.map( categories => (
          <GifGrid 
          key={categories}
          category={categories}/>
        ))
      }
    
  </>
)
}
