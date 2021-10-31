import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch(`https://frightening-labyrinth-15528.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
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
                    console.log(result);
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
    const handleBookingStatus = (data) => {
        console.log(data);
        data.status = "confirmed";
        fetch(`https://frightening-labyrinth-15528.herokuapp.com/updateStatus/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Staus updated successfully')
                }
            });
    }

    const handleCheckOut = () => {

    }



    return (
        <div>
            <h2> {user.displayName} Orders </h2>
            <div className="row container text-center">
                {
                    myOrders?.map((order) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="border border p-2 m-2">
                                <img className="img-fluid" src={order.imgUrl} alt="" />
                                <h2>Package Name: {order.packageName}</h2>
                                <h4>Customer Email: {order.email}</h4>
                                <h5>Package Price: ${order.price} USD* <span>per pax</span></h5>
                                <h5>Tour Duration: {order.duration}</h5>
                                <div>
                                    <button onClick={() => handleBookingStatus(order)} className="btn btn-primary m-2">
                                        Confirm Booking
                                    </button>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-danger m-2">
                                        Delete
                                    </button>

                                    <button onClick={() => handleCheckOut(order._id)} className="btn btn-info m-2">
                                        Check Out
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}


            </div>
        </div >
    );
};

export default MyOrders;