import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';


const Statistics = () => {
    return (
        <Container className='Statistics-box'>
            <Row>
                <Col className='col-md-11 Overview'>
                    Statistics
                </Col>
                <Col className='col-md-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>
            </Row>
            <Row className='Overview' style={{ margin: "35px 30px" }}>
                My Own Report
            </Row>
            <Row style={{ height: "400px", display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end', position: 'relative' }}>
                <Col style={{ marginBottom: "50px" }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className='Stat-text'>70</div>
                        <div className='Stat-text'>60</div>
                        <div className='Stat-text'>50</div>
                        <div className='Stat-text'>40</div>
                        <div className='Stat-text'>30</div>
                        <div className='Stat-text'>20</div>
                        <div className='Stat-text'>10</div>

                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '242px' }}></div>
                        <div className='Stat-bar-text'>Amazon</div>
                    </div>
                </Col>



                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '282px' }}></div>
                        <div className='Stat-bar-text'>Google</div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '122px' }}></div>
                        <div className='Stat-bar-text'>iTunes</div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '212px' }}></div>
                        <div className='Stat-bar-text'>Payoneer</div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '252px', zIndex: '5' }}></div>
                        <div className='Stat-bar-text'>Bitcoin</div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '221px' }}></div>
                        <div className='Stat-bar-text'>Etherem</div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '152px' }}></div>
                        <div className='Stat-bar-text'>Tecno</div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '242px' }}></div>
                        <div className='Stat-bar-text'>Paypal</div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '282px' }}></div>
                        <div className='Stat-bar-text'>Aliexpress
                        </div>
                    </div>
                </Col>

                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '292px' }}></div>
                        <div className='Stat-bar-text'>Konga</div>
                    </div>
                </Col>
                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='Stat-bar' style={{ height: '274px' }}></div>
                        <div className='Stat-bar-text'>Jumia</div>
                    </div>
                </Col>
                <div style={{ marginBottom: "34px", position: 'absolute', left: '50px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="364" viewBox="0 0 4 364" fill="none">
                        <path opacity="0.60681" d="M1.59166 1.5977V361.643" stroke="#B0BEC5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='average-scare-div'>

                    <div className='score-text'>Avarage score</div>
                    <div className='score-num'>146/217</div>
                    <div className='linear-bar'>
                        <div></div>
                    </div>
                </div>
                <div className='range-wrap'>
                </div>
                <div className='inner-div'></div>
                <div className='inner-two'></div>

            </Row>

        </Container>
    )
}

export default Statistics