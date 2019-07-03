import React from 'react'

import './Header.css'

import { Navbar } from 'react-bootstrap'

const Header = () => (
    
    <div className="header-config">

        <Navbar bg="dark" variant="dark" className="nav">
            <div className="container">
                <Navbar.Brand href="#home" className="logo">
                    <img
                        alt=""
                        src="https://images.vexels.com/media/users/3/152659/isolated/lists/ffb11b09c3864a1412deedab4b9bcf88-sol-estrela-icone.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    <h4 className="nav-title">Mars Rover Curiosity</h4>
                </Navbar.Brand>

                <a href="https://github.com/Ricardovasconcelos"className="gitName">Github.com/Ricardovasconcelos</a>
                
            </div>
        </Navbar>





    </div>
)
export default Header