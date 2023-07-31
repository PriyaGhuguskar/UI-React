import React from 'react'
import './Content.css'
import { Row, Col } from 'react-bootstrap';
import Overview from './UserOverview';
// import Statistics from './Statistics';
import Conversion from './Conversion';
import Overviewsec from './Overviewsec';
import TransactionCompo from './TransactionCompo';
import WalletCompo from './Pages/WalletCompo';


const MainContent = () => {
    return (
        <>
            {/* Top NAV */}
            <Row style={{ marginBottom: "30px" }}>
                <Col className='col-md-8 top-left-text'>
                    Agent Management System Overview
                </Col>
                <Col className='col-md-4 top-right-text'>
                    Accounts {"  "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="15" viewBox="0 0 3 15" fill="none">
                        <path opacity="0.419754" d="M1.5 1.5V13.5" stroke="#858585" stroke-width="2" stroke-linecap="square" />
                    </svg>
                    {"  "}
                    AGENT ROSE {' '}
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29102 0L9.79102 5H0.791016L5.29102 0Z" fill="#818181" />
                    </svg>
                </Col>
            </Row >

            {/* Overview Top */}
            <Row style={{ marginBottom: "30px" }}>
                <Col className='col-md-10 Overview'>Overview</Col>
                <Col className='col-md-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M19 2.82568H0.75V20.1632H19V2.82568Z" stroke="url(#paint0_linear_8_1108)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M0.75 7.38818H19" stroke="url(#paint1_linear_8_1108)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.3125 1V4.65" stroke="url(#paint2_linear_8_1108)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.4375 1V4.65" stroke="url(#paint3_linear_8_1108)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.13721 13.0786L9.50295 15.6L12.6122 10.125" stroke="url(#paint4_linear_8_1108)" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_8_1108" x1="10.7875" y1="0.0966328" x2="11.7168" y2="30.8127" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_8_1108" x1="10.7875" y1="7.23078" x2="10.7906" y2="9.00405" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_8_1108" x1="5.8625" y1="0.425463" x2="6.60486" y2="6.81162" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_8_1108" x1="14.9875" y1="0.425463" x2="15.7299" y2="6.81162" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_8_1108" x1="10.1485" y1="9.26319" x2="10.4573" y2="18.962" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD749B" />
                                <stop offset="1" stop-color="#281AC8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Col>
            </Row>


            {/* Overview Content */}

            <Overviewsec />

            {/* conversion rate */}

            <Conversion />

            {/* Widraw */}
            <WalletCompo />
            {/* <Statistics /> */}



            <Overview />

            <TransactionCompo />


        </>
    )
}

export default MainContent