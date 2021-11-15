import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
    const [managePackages, setManagePackages] = useState([]);

    useEffect(() => {
        fetch('https://floating-peak-58852.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManagePackages(data));

    }, []);

    let serial = 1;

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete this?');
        if (proceed) {
            const url = `https://floating-peak-58852.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingPackages = managePackages.filter(managePackage => managePackage._id !== id);
                        setManagePackages(remainingPackages);
                    }
                });
        }
    }

    return (
        <div>
            <h2 className="top-title text-center my-3">All Available Package List</h2>
            <p className="top-title text-center" >*This special route is for Admin to manage all packages</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Glass Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        managePackages.map(managePackage => <tr key={managePackages._id}>
                            <td data-label="serial">{serial++}</td>
                            <td data-label="name">{managePackage.name}</td>
                            <td data-label="email">{managePackage.description.slice(0, 65)}</td>
                            <td data-label="phone">{managePackage.price}</td>
                            <td data-label="action"> <button onClick={() =>
                                handleDeleteUser(managePackage._id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;