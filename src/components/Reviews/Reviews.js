import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Review.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://frightening-labyrinth-15528.herokuapp.com/allReviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <>
            <div className="container">
                <h2> Visitors Review</h2>
                {
                    reviews.map(review => (
                        <div>
                            <div className="d-flex my-3 reviewer-profile ">
                                <div className="ms-2 p-2 profile-img">
                                    <img src={review.profileImg} alt="" />
                                </div>
                                <div className="ms-2 p-2 ">
                                    <h6>{review.visitorName}</h6>
                                    <p>Location: {review.country}</p>
                                </div>
                            </div>

                            <Row className="review-img mb-4">
                                <Col md="4">
                                    <img src={review.imgUrl1} alt="" />
                                </Col>
                                <Col md="4">
                                    <img src={review.imgUrl2} alt="" />
                                </Col>
                                <Col md="4">
                                    <img src={review.imgUrl3} alt="" />
                                </Col>
                            </Row>
                            <Row className="review-text">
                                <Col md="12">
                                    <h3>Review of: {review.tourName}</h3>
                                    <p>
                                        {review.review}
                                    </p>
                                    <p><small>Date of experience: {review.dateOfReview}</small></p>
                                </Col>
                            </Row>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default Reviews;