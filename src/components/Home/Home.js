import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [tourPackages, setPackages] = useState([])

    useEffect(() => {
        fetch('https://frightening-labyrinth-15528.herokuapp.com/packages')
            .then(res => res?.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <>
            <div className="mt-3">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/banner-1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/banner-2.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/banner-3.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/banner-4.png"
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/banner-5.png"
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="bg-secondary text-white text-center py-4 my-4">
                <h2>Featured Tour Packages</h2>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-4">

                    {
                        tourPackages.slice(0, 6).map((tourPackage) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="service-img" src={tourPackage.imgUrl} />
                                    <Card.Body>
                                        <Card.Title>{tourPackage.packageName}</Card.Title>
                                        <Card.Text>
                                            {tourPackage.description.slice(0, 100)}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">

                                        <Link to={`/package/${tourPackage._id}`}>
                                            <Button>Book Now

                                            </Button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <div className="bg-secondary text-white text-center py-4 my-4">
                <h2>What We Ensure?</h2>
            </div>
            <div className="container">
                <Row className="d-flex align-items-center justify-content-center border ">
                    <Col md="4">
                        <h3>UNPARALLED SUPPORT</h3>
                        <p>Weather its day or night or windy/rainy day or a hot summer day, we will be there to provide any required support that you need</p>
                    </Col>
                    <Col md="4">
                        <h3>SECURITY and INSURANCE </h3>
                        <p>We consider our guest security and privacy with high priority which is one of the most inevitable part of our service. We also arrange travel insurance for our guest of they are willing to take one.</p>
                    </Col>
                    <Col md="4">
                        <h3> TAILORED TRIP FOR YOU</h3>
                        <p>We can customize trip to all destinaton as per our guests requirements. You have freedom to add days, places, foods and activities as you wish</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center justify-content-center border ">
                    <Col md="4">
                        <h3>SATISFACTION GUARANTEED</h3>
                        <p>We make sure our guest get most our of the tour has to offer and make arrangement to make your satisfied</p>
                    </Col>
                    <Col md="4">
                        <h3>AFORDABLE PRICING</h3>
                        <p>Initially you may argue with the price but when you start your tour you will find it justified. If you are not happy with us we will refund you back.</p>
                    </Col>
                    <Col md="4">
                        <h3>TOUR LAYOUT</h3>
                        <p>Before each tour with us, we will share a details tour itinerary with you so that you get well prepared for the tour. We will be committed to deliver the service as spicified in the outline</p>
                    </Col>
                </Row>
            </div>


            <div className="bg-secondary text-white text-center py-4 my-4">
                <h2 className="mb-3">Why Us? Excellence in All we Do</h2>
            </div>
            <Row>
                <div>
                    <img src="./images/why-us.png" alt="" />
                </div>
                <div>
                    <p>Pathfriend Tour Operator is a leading local tour operators in Bangladesh, committed to give you a lifetime Bangladesh experience. As Bangladesh is full of natural beauty and hidden treasure, its underdeveloped infrastructure can disrupt your travel plans. And this is why we are here to make your trip perfect with your needs. Our tour planning, time management, best accommodation, good quality food, local experience, freedom to blend in with this country and knowledgeable guides will impress you. Whether you are in Bangladesh for a private tour or a group tour, we can be a new and unique experience for your trip.</p>
                </div>
            </Row>
        </>
    );
};

export default Home;