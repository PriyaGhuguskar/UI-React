import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import searchIcon from '../Assets/magnifying-glass-solid.svg'
import profileImage from '../Assets/profile.png'
import NotificationIcon from '../Assets/Group 254.svg'

const NavCompo = () => {
    return (

        <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light">
            <Container style={{ width: "100vw" }}>
                <Navbar.Brand href="#home" style={{ fontWeight: 'bold', fontSize: '30px' }}>MagSway</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className='nav-forv-div'>
                        <img src={searchIcon} alt='searchIcon' style={{ width: "25px", height: "20px", marginLeft: "10px" }} />
                        <input placeholder='Search here' type='text' style={{ border: "none", marginLeft: "10px" }} />
                    </div>
                    <div className='Profile-div'>
                        <img src={profileImage} alt='profile' style={{ width: "60px", height: "40px", marginLeft: "10px", borderRadius: "100px" }} />
                        {/*  */}
                        <div className='profile-text'>Agent Rose</div>
                    </div>
                    <div style={{ display: 'flex', marginRight: "20px", width: "60px" }}>
                        <img src={NotificationIcon} alt='NotificationIcon' style={{ width: "35px", height: "27px", marginLeft: "10px" }} />
                        <div className='noti-text'>4</div>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavCompo