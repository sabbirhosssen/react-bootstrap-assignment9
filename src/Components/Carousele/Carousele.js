import React from 'react';
import { Carousel } from 'react-bootstrap';


const Carousele = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src="https://media.istockphoto.com/vectors/design-concept-of-word-science-website-banner-vector-id935221094?k=20&m=935221094&s=612x612&w=0&h=tLjf8tPXe9SnXVKmn0dfyi2K6HNTYWGL1ZiGnpFpdBI="
                        alt="First slide"
                        height="450"
                    />
                    <Carousel.Caption>
                        <h3>Book  The Programing</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 "
                        src="https://media.istockphoto.com/photos/bookshelves-in-the-library-with-old-books-3d-render-picture-id1181643451?k=20&m=1181643451&s=612x612&w=0&h=xvsQnA6NXWelNH19yFgpeBhZig-sfl0K3GqgSDWzbUs="
                        alt="Second slide"
                        height="450"
                    />
                    <Carousel.Caption>
                        <h3>Programing Book Libery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1512503959943-9d35a3636b51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxjb3ZlciUyMGltYWdlJTIwbGliZXJ5JTIwbGVybmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                        alt="Third slide"
                        height="450"
                    />
                    <Carousel.Caption>
                        <h3>Python Book</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousele;