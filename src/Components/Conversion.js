import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const Conversion = () => {
    return (
        <Container className='conversion-box'>
            <Row>
                <Col className='col-md-11 Overview'>
                    Conversion Rate to Naira
                </Col>
                <Col className='col-md-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>
            </Row>
            <Row className='Conver-box-line'>
                <div className='box-col'>
                    <Row>
                        <Col className='col-md-8 box-line-div'>Tunes Card</Col>
                        <Col className='col-md-4'></Col></Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>USA Physical</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>USA E-Code card</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>UK Physical Card</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>UK E-Code Card</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                </div>

                <div className='box-col'>
                    <Row>
                        <Col className='col-md-8 box-line-div'>Amazon Card</Col>
                        <Col className='col-md-4'></Col></Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>USA Physical</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>USA E-Code card</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>UK Physical Card</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>UK E-Code Card</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                </div>

                <div className='box-col'>
                    <Row>
                        <Col className='col-md-8 box-line-div'>Bitcoin</Col>
                        <Col className='col-md-4'></Col></Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>Bitcoin BTC</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>Bitcoin BTC</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>Bitcoin BTC</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                    <Row>
                        <Col className='col-md-7 box-line-col'>Bitcoin BTC</Col>
                        <Col className='col-md-5 box-line-num'>N400.00</Col>
                    </Row>
                </div>



                <div style={{ width: '44px', height: '44px', borderRadius: '100PX', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--4, linear-gradient(185deg, #FD749B 0%, #281AC8 100%))' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L15 8L8 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 8H13.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </Row>
        </Container>
    )
}

export default Conversion