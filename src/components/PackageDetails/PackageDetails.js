import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PackageDetail.css';

const PackageDetails = () => {
    const { tourId } = useParams();
    // full course detail store data in useState
    const [PackageDetails, setPackageDetails] = useState([]);
    // Single course detail store data in useState
    const [singlePackageDetail, setSinglePackageDetail] = useState({});
    const { user } = useAuth();

    // coursedetails data load from local json data file
    useEffect(() => {
        fetch('https://frightening-labyrinth-15528.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, [])
    // find course detail according to course id 
    useEffect(() => {
        const foundSinglePackageDetail = PackageDetails?.find(p => p._id === tourId)
        setSinglePackageDetail(foundSinglePackageDetail);
    }, [PackageDetails])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.packageName = singlePackageDetail.packageName;
        data.price = singlePackageDetail.price;
        data.duration = singlePackageDetail.duration;
        data.imgUrl = singlePackageDetail.imgUrl;
        data.status = "pending"

        /*  tourPackage.email = user.email;
         tourPackage.status = "pending"; */

        fetch(`https://frightening-labyrinth-15528.herokuapp.com/addOrder`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Confirmed successfully');
                    reset();
                }
            });

    }
    return (
        <>
            <div>
                <Row>
                    <div>
                        <img className="img-fluid" src={singlePackageDetail?.detailImgUrl} alt="" />
                    </div>
                </Row>
                <Container className="my-5">

                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md="4" className="mb-3">
                            <div>
                                <img className="img-fluid" src={singlePackageDetail?.imgUrl} alt="" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="ms-4 ps-3 text-left">
                                <h2>{singlePackageDetail?.packageName}</h2>
                                <p>Duration: {singlePackageDetail?.duration}</p>
                                <p>Best Time to Go: {singlePackageDetail?.timeToGo}</p>
                                <p>Locations: {singlePackageDetail?.location}</p>
                                <p>Price: <small>Starting from</small> ${singlePackageDetail?.price} US <small> per pax</small></p>

                            </div>
                        </Col>

                        <Row>
                            <p>{singlePackageDetail?.description}</p>
                        </Row>

                    </Row>
                    <Row className="container w-75  bg-info">
                        <h2 className="my-4">Confirm your Booking</h2>

                        <div className="place-order">
                            <form className="bg-secondary p-5" onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" />
                                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" />
                                <input defaultValue="" {...register("mobile", { required: true })} placeholder="Mobile no" />
                                <input defaultValue="" {...register("address", { required: true })} placeholder="Address" />
                                <input type="textArea" {...register("message")} placeholder="Your Message" />

                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
                                <br />
                                <input className="bg-warning p-3" type="submit" />
                            </form>
                        </div>

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default PackageDetails;