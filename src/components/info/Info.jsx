import React from 'react'

import './Info.css'
import Curiosity from './curiosity.png'

import {Container, Row, Col} from 'react-bootstrap'
const Info = () =>(
    <div className="Info-config">
    <Container>
        <Row className="justify-content-md-center">
            <Col xs="12" md="6" lg="6" className="description">
                        <h2>Sobre a API</h2>
                        <p>A API foi projetada pela NASA para coletar dados de imagens reunidos pelos curadores da NASA, 
                        Curiosity, Opportunity e Spirit em Marte</p>
                        <p>O rover tem seu próprio conjunto de fotos e informações armazenadas no banco de dados, que podem 
                        ser consultadas separadamente.</p>
                        <p>Com isso, desenvolvi essa aplicação que lista as fotos e informações mais recentes do rover</p>

            </Col>
            <Col xs="12" md="6" lg="6" className="img-curiosity">
                <img src={Curiosity}/>
            </Col>
        </Row>
    </Container>
</div>
)

export default Info