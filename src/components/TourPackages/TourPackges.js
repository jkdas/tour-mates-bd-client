import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TourPackageDisplay from '../TourPackgesDisplay/TourPackageDisplay';
// import "./TourPackages.css";

const TourPackges = () => {
    const [tourPackages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://frightening-labyrinth-15528.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our Popular Packages</h2>
            <div className="service-container">
                <Row xs={1} md={3} className="g-4">
                    {
                        tourPackages.map(tourPackage => <TourPackageDisplay
                            key={tourPackage._id}
                            tourPackage={tourPackage}

                        ></TourPackageDisplay>)

                    }
                </Row>
            </div>
        </div>
    );
};

export default TourPackges;