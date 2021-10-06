import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HeaderTitle from '../Header/HeaderTitle';
import Serviceses from './Serviceses';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Service.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div><div>
            <HeaderTitle></HeaderTitle>

            <Row xs={1} md={2} className="g-5 px-5 m-5" >
                {
                    services.map(service => <Serviceses
                        key={service.id}
                        service={service}
                    ></Serviceses>)
                }

            </Row>
        </div>

        </div>
    );
};

export default Services;