import React from 'react'
import { Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';
import MainContent from './MainContent';



const MainPage = () => {
    return (
        <div style={{ width: "100vw", paddingTop: '30px', backgroundColor: "#FFF9FE" }}>
            <Row>
                <Col className='col-md-3'>
                    <SideBar />
                </Col>
                <Col className='col-md-9'>
                    <MainContent />
                </Col>
            </Row>

        </div>
    )
}

export default MainPage