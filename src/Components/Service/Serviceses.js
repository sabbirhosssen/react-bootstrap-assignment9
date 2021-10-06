import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Serviceses = (props) => {
    const { title, discription, language, rank, img } = props.service
    return (
        <Col className="p-3">

            <Card>
                <Card.Img variant="top" height="155" src={img} />
                <Card.Body>
                    <Card.Title className="fulid">{title}</Card.Title>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                    <Card.Title>Language :  {language}</Card.Title>
                    <Card.Text> Student :
                        {rank}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Serviceses;