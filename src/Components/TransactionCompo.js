import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './Content.css'

const TransactionCompo = () => {
    return (
        <Container className='Transaction-Box'>
            <Row>
                <Col className='col-md-11 Overview'>
                    Transaction
                </Col>
                <Col className='col-md-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>
            </Row>
            <Row style={{ width: '965', height: '65', margin: '30px auto', marginBottom: "30px", display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Col className='User-col'>Date</Col>
                <Col className='User-col'>Transaction ID</Col>
                <Col className='User-col'>Type</Col>
                <Col className='User-col'>Name</Col>
                <Col className='User-col'>Value</Col>
                <Col className='User-col'>Return</Col>
                <Col className='col-md-2 User-col'>Status</Col>
                <Col className='col-md-1 User-col'>Action</Col>


            </Row>
            {/* user1 */}
            <Row style={{ width: '965', height: '65', margin: '30px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center' }}>
                <Col className='usertext'>14/01/2019</Col>
                <Col className='usertext'>12345678</Col>
                <Col className='usertext'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.1919 7.43456C11.0816 6.83594 11.6665 5.82031 11.6665 4.66747C11.6665 3.05759 10.5249 1.71384 9.00688 1.40234V0.333C9.00684 0.149406 8.85791 0 8.67381 0C8.48972 0 8.34031 0.149406 8.34031 0.333V1.33397C8.33788 1.33397 8.33544 1.33397 8.33347 1.33397H6.99312V0.333C6.99316 0.149406 6.84375 0 6.65966 0C6.47556 0 6.32616 0.149406 6.32616 0.333V1.33397H4.78709V1.333H3.33347C3.14941 1.333 3 1.48244 3 1.6665C3 1.85056 3.14941 2 3.3335 2H4.3335V14H3.3335C3.14941 14 3 14.1494 3 14.3335C3 14.5176 3.14941 14.667 3.3335 14.667H6.32619V15.6665C6.32619 15.8506 6.47559 16 6.65969 16C6.84378 16 6.99319 15.8506 6.99319 15.6665V14.667H8.34034V15.6665C8.34034 15.8506 8.48975 16 8.67384 16C8.85794 16 9.00684 15.8506 9.00684 15.6665V14.667H9.3335C11.3584 14.667 13 13.0254 13 11C13 9.2705 11.8027 7.82128 10.1919 7.43456ZM5 2.00097H8.3335C9.04541 2.00097 9.71534 2.27831 10.2188 2.78172C10.7227 3.28513 11 3.95506 11 4.66747C11 5.37987 10.7227 6.04931 10.2188 6.55272C9.72706 7.04491 9.07716 7.32078 8.38331 7.33347H5V2.00097ZM11.4546 13.1216C10.8882 13.6885 10.1347 14 9.3335 14H5V8.00097H8.3335C8.34963 8.00097 8.36572 8.00047 8.38134 8H9.3335C10.1348 8 10.8882 8.3125 11.4546 8.87891C12.0215 9.44531 12.3335 10.1987 12.3335 11C12.3335 11.8018 12.0215 12.5547 11.4546 13.1216Z" fill="url(#paint0_linear_8_910)" />
                        <defs>
                            <linearGradient id="paint0_linear_8_910" x1="8.5" y1="-2.51852" x2="9.94203" y2="25.7804" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Col>
                <Col className='usertext'>Bitcoin</Col>
                <Col className='usertext'>$100</Col>
                <Col className='usertext'>#18000</Col>
                <Col className=''><div className='user-act'>Active</div></Col>
                <Col className='col-md-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>

            {/* user2 */}
            <Row style={{ width: '965', height: '65', margin: '30px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center' }}>
                <Col className='usertext'>14/01/2019</Col>
                <Col className='usertext'>12345678</Col>
                <Col className='usertext'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                        <path d="M2.14286 1.39258H15.8571C16.4857 1.39258 17 1.90686 17 2.53544V11.1069C17 11.7354 16.4857 12.2497 15.8571 12.2497H2.14286C1.51429 12.2497 1 11.7354 1 11.1069V2.53544C1 1.90686 1.51429 1.39258 2.14286 1.39258Z" stroke="url(#paint0_linear_8_963)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 4.24934H17" stroke="url(#paint1_linear_8_963)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.2856 9.39236V9.96379" stroke="url(#paint2_linear_8_963)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.5713 9.39236V9.96379" stroke="url(#paint3_linear_8_963)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.8574 9.39236V9.96379" stroke="url(#paint4_linear_8_963)" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_8_963" x1="9.8" y1="-0.316416" x2="10.2159" y2="18.9273" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_8_963" x1="9.8" y1="4.09194" x2="9.80353" y2="5.8652" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_8_963" x1="15.8356" y1="9.30242" x2="15.8541" y2="10.3154" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_8_963" x1="14.1213" y1="9.30242" x2="14.1397" y2="10.3154" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_8_963" x1="12.4074" y1="9.30242" x2="12.4259" y2="10.3154" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Col>
                <Col className='usertext'>Amazon</Col>
                <Col className='usertext'>$100</Col>
                <Col className='usertext'>#18000</Col>
                <Col className=''><div className='user-dwn'>Failed</div></Col>
                <Col className='col-md-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>


            {/* user3 grad*/}
            <Row style={{ width: '965', height: '65', margin: '30px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center' }}>
                <Col className='usertext'>14/01/2019</Col>
                <Col className='usertext'>12345678</Col>
                <Col className='usertext'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.1919 7.43456C11.0816 6.83594 11.6665 5.82031 11.6665 4.66747C11.6665 3.05759 10.5249 1.71384 9.00688 1.40234V0.333C9.00684 0.149406 8.85791 0 8.67381 0C8.48972 0 8.34031 0.149406 8.34031 0.333V1.33397C8.33788 1.33397 8.33544 1.33397 8.33347 1.33397H6.99312V0.333C6.99316 0.149406 6.84375 0 6.65966 0C6.47556 0 6.32616 0.149406 6.32616 0.333V1.33397H4.78709V1.333H3.33347C3.14941 1.333 3 1.48244 3 1.6665C3 1.85056 3.14941 2 3.3335 2H4.3335V14H3.3335C3.14941 14 3 14.1494 3 14.3335C3 14.5176 3.14941 14.667 3.3335 14.667H6.32619V15.6665C6.32619 15.8506 6.47559 16 6.65969 16C6.84378 16 6.99319 15.8506 6.99319 15.6665V14.667H8.34034V15.6665C8.34034 15.8506 8.48975 16 8.67384 16C8.85794 16 9.00684 15.8506 9.00684 15.6665V14.667H9.3335C11.3584 14.667 13 13.0254 13 11C13 9.2705 11.8027 7.82128 10.1919 7.43456ZM5 2.00097H8.3335C9.04541 2.00097 9.71534 2.27831 10.2188 2.78172C10.7227 3.28513 11 3.95506 11 4.66747C11 5.37987 10.7227 6.04931 10.2188 6.55272C9.72706 7.04491 9.07716 7.32078 8.38331 7.33347H5V2.00097ZM11.4546 13.1216C10.8882 13.6885 10.1347 14 9.3335 14H5V8.00097H8.3335C8.34963 8.00097 8.36572 8.00047 8.38134 8H9.3335C10.1348 8 10.8882 8.3125 11.4546 8.87891C12.0215 9.44531 12.3335 10.1987 12.3335 11C12.3335 11.8018 12.0215 12.5547 11.4546 13.1216Z" fill="url(#paint0_linear_8_937)" />
                        <defs>
                            <linearGradient id="paint0_linear_8_937" x1="8.5" y1="-2.51852" x2="9.94203" y2="25.7804" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Col>
                <Col className='usertext'>Bitcoin</Col>
                <Col className='usertext'>$100</Col>
                <Col className='usertext'>#18000</Col>
                <Col className=''><div className='user-grad'>In Progress</div></Col>
                <Col className='col-md-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                        <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                        <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                    </svg>
                </Col>


            </Row>

            {/* user4 */}
            <Row style={{ width: '965', height: '65', margin: '30px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center' }}>
                <Col className='usertext'>14/01/2019</Col>
                <Col className='usertext'>12345678</Col>
                <Col className='usertext'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.1919 7.43456C11.0816 6.83594 11.6665 5.82031 11.6665 4.66747C11.6665 3.05759 10.5249 1.71384 9.00688 1.40234V0.333C9.00684 0.149406 8.85791 0 8.67381 0C8.48972 0 8.34031 0.149406 8.34031 0.333V1.33397C8.33788 1.33397 8.33544 1.33397 8.33347 1.33397H6.99312V0.333C6.99316 0.149406 6.84375 0 6.65966 0C6.47556 0 6.32616 0.149406 6.32616 0.333V1.33397H4.78709V1.333H3.33347C3.14941 1.333 3 1.48244 3 1.6665C3 1.85056 3.14941 2 3.3335 2H4.3335V14H3.3335C3.14941 14 3 14.1494 3 14.3335C3 14.5176 3.14941 14.667 3.3335 14.667H6.32619V15.6665C6.32619 15.8506 6.47559 16 6.65969 16C6.84378 16 6.99319 15.8506 6.99319 15.6665V14.667H8.34034V15.6665C8.34034 15.8506 8.48975 16 8.67384 16C8.85794 16 9.00684 15.8506 9.00684 15.6665V14.667H9.3335C11.3584 14.667 13 13.0254 13 11C13 9.2705 11.8027 7.82128 10.1919 7.43456ZM5 2.00097H8.3335C9.04541 2.00097 9.71534 2.27831 10.2188 2.78172C10.7227 3.28513 11 3.95506 11 4.66747C11 5.37987 10.7227 6.04931 10.2188 6.55272C9.72706 7.04491 9.07716 7.32078 8.38331 7.33347H5V2.00097ZM11.4546 13.1216C10.8882 13.6885 10.1347 14 9.3335 14H5V8.00097H8.3335C8.34963 8.00097 8.36572 8.00047 8.38134 8H9.3335C10.1348 8 10.8882 8.3125 11.4546 8.87891C12.0215 9.44531 12.3335 10.1987 12.3335 11C12.3335 11.8018 12.0215 12.5547 11.4546 13.1216Z" fill="url(#paint0_linear_8_910)" />
                        <defs>
                            <linearGradient id="paint0_linear_8_910" x1="8.5" y1="-2.51852" x2="9.94203" y2="25.7804" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Col>
                <Col className='usertext'>Bitcoin</Col>
                <Col className='usertext'>$100</Col>
                <Col className='usertext'>#18000</Col>
                <Col className=''><div className='user-act'>Active</div></Col>
                <Col className='col-md-1'>
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

export default TransactionCompo