import React from 'react'

import './About.css'

import {Container, Row, Col} from 'react-bootstrap'

const About = () =>(
    <div className="About-config">
        <Container>
            <Row className="justify-content-md-center">
                <Col xs="12" md="6" lg="6">
                <div id="frame-video">
                <iframe src="https://player.vimeo.com/video/345829553?autoplay=1&loop=1&color=ffffff" frameborder="0" allow="autoplay; fullscreen" allowfullscreen id="frame-config"></iframe>
                </div>
                
                </Col>
                <Col xs="12" md="6" lg="6" className="description">
                <h2>Mars Rover Curiosity</h2>
                    <p>Curiosity é um rover do tamanho aproximado de um carro médio destinado a 
                    explorar a superfície de Marte como parte da missão Mars Science Laboratory.</p>
                    <p>A missão contendo o rover Curiosity teve início com o lançamento, efetuado em 
                    26 de novembro de 2011 a partir da Estação da Força Aérea de Cabo Canaveral, tendo 
                    pousado com sucesso em Marte, mais precisamente em Aeolis Palus na cratera Gale em 6 de agosto de 2012.</p>
                    <p>Esse ponto de pouso, batizado de Bradbury Landing estava a apenas 1,5 milhas (2,4 quilômetros) do ponto
                    de pouso originalmente previsto, depois de uma jornada de 350 000 000 milhas (560 000 000 quilômetros).</p>
                </Col>
            </Row>
        </Container>
    </div>
)

export default About