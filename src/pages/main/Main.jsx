import React, { Component } from 'react';

import api from '../../services/api'
import './Main.css'

import { Card, Button } from 'react-bootstrap'

class Main extends Component {

    state = {
        infoRover: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('')
        //console.log(response.data.photos)

        this.setState({
            infoRover: response.data.photos
        })
    }
    render() {

        const { infoRover } = this.state;

        return (
            <div className="infoRover-list">
                {infoRover.map(item => (

                    <Card className="Content">
                        <Card.Img variant="top" src={item.img_src} />
                        <Card.Body>
                            <Card.Title className="title-content">{item.camera.full_name}</Card.Title>
                            <Card.Text className="description-content">Data da foto: {item.rover.max_date}</Card.Text>
                            <Card.Text className="description-content">Número do registro: {item.id}</Card.Text>
                            <Button variant="primary" className="button">Status mission {item.rover.status}</Button>
                        </Card.Body>
                    </Card>

                ))
                }
            </div >

        )
    }
}

export default Main
