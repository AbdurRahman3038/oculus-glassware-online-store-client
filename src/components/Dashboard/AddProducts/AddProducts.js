import React, { useState } from 'react';
import axios from 'axios';
import './AddProducts.css';

const AddProducts = () => {

    const [data, setData] = useState({ name: '', description: '', price: '', imgUrl: '' });

    const handleOnBlur = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        console.log(newData);
        setData(newData);

    }
    // console.log(data);

    const handleAddProduct = (e) => {
        e.preventDefault();

        axios.post('https://floating-peak-58852.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A new product added successfully');
                    document.getElementById('products').reset();
                }
            })

    }

    return (
        <div className="review-container">
            <div class="container">
                <form id="products" onSubmit={handleAddProduct}>
                    <h4 className="text-center">Add a new glass!</h4>
                    <hr />

                    <label htmlFor="name"><b>Glass Name</b></label>
                    <input onBlur={handleOnBlur} type="text" placeholder="Enter Glass Name" name="name" id="name" required />

                    <label htmlFor="description"><b>Description</b></label>
                    <input onBlur={handleOnBlur} type="text" placeholder="Enter Glass Description" name="description" id="description" required />

                    <label htmlFor="price"><b>Price</b></label>
                    <input onBlur={handleOnBlur} type="number" placeholder="Enter Glass Price" name="price" id="price" required />

                    <label htmlFor="rating"><b>Image URL</b></label>
                    <input onBlur={handleOnBlur} type="text" placeholder="Enter Img URL" name="imgUrl" id="imgUrl" required />
                    <hr />
                    <button type="submit" class="registerbtn">Submit</button>

                </form>
            </div>

        </div>
    );
};

export default AddProducts;

// 1: https://images.unsplash.com/photo-1619089662078-7fda3fdec77a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=845&q=80

// 2: https://images.unsplash.com/photo-1619089662706-11b2f8542913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80

// 3: https://images.unsplash.com/photo-1619089662138-d884da64e589?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80

// 4: https://images.unsplash.com/photo-1619089662345-27c00eab41a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80

//5: https://images.unsplash.com/photo-1602703522866-fb486308da5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80

//6: https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80

// 7: https://images.unsplash.com/photo-1603578993309-152651e511c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80

// 8: https://images.unsplash.com/photo-1625591339971-4c9a87a66871?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=744&q=80

// 9: https://images.unsplash.com/photo-1625591338875-e2cca9de80a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80

// 10: https://images.unsplash.com/photo-1625591341337-13dc6e871cee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=790&q=80