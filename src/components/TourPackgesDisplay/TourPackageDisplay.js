import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourPackageDisplay = ({ tourPackage }) => {
    // Destructuring from courses
    const { _id, packageName, description, imgUrl } = tourPackage;
    //Dynamic route url 
    const url = `/package/${_id}`;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="center" className="service-img" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>{packageName}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-center">

                        <Link to={url}>
                            <Button>
                                Book Now
                            </Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default TourPackageDisplay;