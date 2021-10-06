import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HeaderTitle from '../Header/HeaderTitle';
import ServiceData from '../ServiceData/ServiceData';


const Home = () => {
    const [servise, setService] = useState([]);
    useEffect(() => {
        fetch('./Fakedata.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <HeaderTitle></HeaderTitle>

            <Row xs={1} md={2} className="g-5 px-5 m-5" >

                {
                    servise.map(servise => <ServiceData
                        key={servise.id} servise={servise}></ServiceData>)
                }
            </Row>
        </div>

    );
};

export default Home;