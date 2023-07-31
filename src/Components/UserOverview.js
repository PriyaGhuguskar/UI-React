import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './Content.css'
import user1 from '../Assets/user1.png'
import user3 from '../Assets/user3.png'
import user2 from '../Assets/user2.png'
import user4 from '../Assets/user4.png'
import user5 from '../Assets/user5.png'


const Overview = () => {
    return (
        <Container className='Overview-status'>
            <Row>
                <Col className='col-md-11 Overview'>
                    Users
                </Col>
                <Col className='col-md-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>
            </Row>
            <Row style={{ width: '965', height: '65', margin: '20px auto', marginBottom: "30px", display: 'flex', alignItems: 'center' }}>
                <Col className='col-md-3 User-col'>Account Status</Col>
                <Col className='col-md-3 User-col'>User Name</Col>
                <Col className='col-md-4 User-col'>Email</Col>
                <Col className='col-md-2 User-col'>Action</Col>

            </Row>
            {/* user1 */}
            <Row style={{ width: '965', height: '65', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: '' }}>
                <Col className='col-md-3'><div className='user-act'>Active</div></Col>
                <Col className='col-md-3 usertext' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={user1} alt='profile' style={{ width: "40px", height: "36px", borderRadius: "100px" }} />
                    {/*  */}
                    <div className='profile-text'>amon Ridwan</div>
                </Col>
                <Col className='col-md-4 usertext'>Ramonridwan@protonmail.com</Col>
                <Col className='col-md-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>

            {/* user2 */}

            <Row style={{ width: '965', height: '65', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Col className='col-md-3'><div className='user-dwn'>Down</div></Col>
                <Col className='col-md-3 usertext' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={user2} alt='profile' style={{ width: "40px", height: "36px", borderRadius: "100px" }} />
                    {/*  */}
                    <div className='profile-text'>Ramon Ridwan</div>
                </Col>
                <Col className='col-md-4 usertext'>Ramonridwan@protonmail.com</Col>
                <Col className='col-md-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>

            {/* user3*/}

            <Row style={{ width: '965', height: '65', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Col className='col-md-3'><div className='user-act'>Active</div></Col>
                <Col className='col-md-3 usertext' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={user3} alt='profile' style={{ width: "40px", height: "36px", borderRadius: "100px" }} />
                    {/*  */}
                    <div className='profile-text'>amon Ridwan</div>
                </Col>
                <Col className='col-md-4 usertext'>Ramonridwan@protonmail.com</Col>
                <Col className='col-md-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>

            {/* user4 */}

            <Row style={{ width: '965', height: '65', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Col className='col-md-3'><div className='user-grad'>Down</div></Col>
                <Col className='col-md-3 usertext' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={user4} alt='profile' style={{ width: "40px", height: "36px", borderRadius: "100px" }} />
                    {/*  */}
                    <div className='profile-text'>amon Ridwan</div>
                </Col>
                <Col className='col-md-4 usertext'>Ramonridwan@protonmail.com</Col>
                <Col className='col-md-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>

            {/* user5 */}

            <Row style={{ width: '965', height: '65', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Col className='col-md-3'><div className='user-dwn'>Active</div></Col>
                <Col className='col-md-3 usertext' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={user5} alt='profile' style={{ width: "40px", height: "36px", borderRadius: "100px" }} />
                    {/*  */}
                    <div className='profile-text'>amon Ridwan</div>
                </Col>
                <Col className='col-md-4 usertext'>Ramonridwan@protonmail.com</Col>
                <Col className='col-md-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>

            <div className='user-view'>View More</div>
        </Container>
    )
}

export default Overview