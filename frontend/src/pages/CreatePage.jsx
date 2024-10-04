import { useState } from 'react';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleAddProduct = () => {
   console.log(newProduct);
   
  }

  return (
    <div className='p-8 bg-cyan-600 dark:bg-black dark:text-white'>
      <h1 className='text-4xl font-bold mb-6'>Create new product</h1>
      <form action='' className='p-8 border rounded-xl flex flex-col gap-6 items-center'>
        <input
          type='text'
          className='p-2 rounded w-1/2'
          placeholder='Product Name'
          name='name'
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
         
          className='p-2 rounded w-1/2'
          placeholder='Price'
          type='number'
          name='price'
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          
          className='p-2 rounded w-1/2'
          placeholder='Image URL'
          name='image'
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />

        <button onClick={handleAddProduct} className="bg-blue-500 px-3 py-2 font-bold text-white rounded-xl w-1/2">Add product</button>
      </form>
    </div>
  );
};

export default CreatePage;
