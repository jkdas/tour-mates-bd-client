import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch(`https://frightening-labyrinth-15528.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [isDeleted])

    const handleDelete = (id) => {
        const deleteConfirm = window.confirm("Are you sure want to delete?");
        if (deleteConfirm) {
            fetch(`https://frightening-labyrinth-15528.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIsDeleted(true);
                        alert('Order deleted successfully');
                    }
                    else {
                        setIsDeleted(false);
                    }
                });
        }

    }

    return (
        <div>
            <h2>All available Orders </h2>
            <div className="row container text-center">
                {
                    allOrders?.map((order) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="border border p-2 m-2">
                                <img className="img-fluid" src={order.imgUrl} alt="" />
                                <h2>{order.packageName}</h2>
                                <h4>{order.email}</h4>
                                <h5>{order.price}</h5>
                                <h5>{order.duration}</h5>
                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger m-2">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}


            </div>
        </div>
    );
};

export default ManageAllOrders;