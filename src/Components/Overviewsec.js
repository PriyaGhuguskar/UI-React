import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Content.css';




const Overviewsec = () => {
    return (
        <Row>
            <Col className='col-md-4 Overview-box'>
                <div className='Box-wrapper'>
                    <div className='image-text'>
                        <div className='image-overlap' style={{ top: '0px', left: '0px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="91" viewBox="0 0 90 91" fill="none">
                                <circle cx="44.8541" cy="45.8248" r="39.8541" stroke="#FAA9C6" stroke-width="10" />
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '0px', left: '4px', zIndex: '1' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="91" viewBox="0 0 86 91" fill="none">
                                <path d="M38.1566 6.0621C45.2976 5.57765 52.4373 7.02523 58.8257 10.2528C65.2141 13.4803 70.6155 18.3687 74.4624 24.4045C78.3093 30.4403 80.4597 37.4006 80.6879 44.5544C80.916 51.7082 79.2134 58.7914 75.7589 65.06C72.3044 71.3287 67.2255 76.5513 61.0558 80.1793C54.886 83.8074 47.853 85.707 40.6956 85.6785C33.5382 85.6501 26.5206 83.6946 20.3799 80.0176C14.2391 76.3407 9.20192 71.0778 5.79737 64.7819" stroke="url(#paint0_linear_8_1211)" stroke-width="10" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1211" x1="45.3395" y1="-13.15" x2="50.4006" y2="145.766" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '23px', left: '23px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
                                <path opacity="0.253397" fill-rule="evenodd" clip-rule="evenodd" d="M0.363836 55.6182C0.363836 55.6182 0.935032 52.4632 3.1812 59.8824C5.42737 67.3017 30.8263 83.54 39.3284 70.3892C47.8304 57.2383 59.8505 71.9953 68.1538 68.0485C76.457 64.1017 77.7722 58.8928 71.5832 46.3418C65.3942 33.7908 80.6183 18.4969 65.4426 8.66447C50.2669 -1.16797 62.0153 1.24753 62.0153 1.24753L61.938 41.3903L41.6239 59.8071L0.363836 55.6182Z" fill="url(#paint0_linear_8_1207)" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1207" x1="3.42636" y1="17.5375" x2="122.437" y2="61.5397" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '0px', left: '47px', zIndex: '0' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43" fill="none">
                                <path opacity="0.518059" fill-rule="evenodd" clip-rule="evenodd" d="M34.5929 42.5462C34.5929 42.5462 32.8284 42.4435 36.7359 40.6932C40.6435 38.9429 47.8157 23.7466 40.0485 19.9222C32.2812 16.0979 39.5445 8.42581 36.8259 4.08661C34.1073 -0.252582 31.169 -0.628557 24.7197 3.65811C18.2704 7.94478 5.82846 -3.5045 1.47187 5.58403C-2.88472 14.6725 4.51543 3.63808 4.51543 3.63808L22.6607 9.34638L34.1047 19.3673L34.5929 42.5462Z" fill="url(#paint0_linear_8_1208)" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1208" x1="12.7711" y1="43.2224" x2="29.3651" y2="-25.6748" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='text-overlap' style={{ top: '20px', left: '30px' }}>
                            15000
                        </div>

                        {/* <div className='box-image'></div> */}

                    </div>
                    <div className='text-graph'>
                        <div className='user-text'>Total Number of Users</div>
                        <div className='percent-graph'>
                            <div className='percent-text'>22.56%</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="26" viewBox="0 0 63 26" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26V10.3755L5.60289 18.645L11.8586 14.0553L17.1566 8.95548L22.5442 6.43643L27.8222 8.95548L33.8206 14.6354L39.481 8.95548L45.2619 14.0553L50.9223 3.80797C50.9223 3.80797 52.9538 5.69498 53.7891 7.26675C53.9586 7.58562 62.0776 -1.1916 62.7162 0.137052C63.3548 1.4657 62.7162 26 62.7162 26H0Z" fill="url(#paint0_linear_8_1233)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_8_1233" x1="-25.6449" y1="-18.7048" x2="-25.6449" y2="28.4624" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1CD1A1" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'flex-start' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                            <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                            <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                            <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                        </svg>
                    </div>
                </div>
            </Col>
            <Col className='col-md-4 Overview-box'>
                <div className='Box-wrapper'>
                    <div className='image-text'>
                        <div className='image-overlap' style={{ top: '0px', left: '0px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="91" viewBox="0 0 90 91" fill="none">
                                <circle cx="44.8541" cy="45.8248" r="39.8541" stroke="#FAA9C6" stroke-width="10" />
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '2px', left: '38px', zIndex: '1' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="89" viewBox="0 0 52 89" fill="none">
                                <path d="M5.20938 5.85689C15.4863 5.1597 25.6192 8.57355 33.379 15.3474C41.1389 22.1213 45.89 31.7003 46.5872 41.9772C47.2843 52.2541 43.8705 62.387 37.0966 70.1469C30.3228 77.9067 20.7437 82.6578 10.4669 83.355" stroke="url(#paint0_linear_8_1217)" stroke-width="10" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1217" x1="12.2219" y1="-13.0331" x2="17.1685" y2="142.283" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '23px', left: '23px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
                                <path opacity="0.253397" fill-rule="evenodd" clip-rule="evenodd" d="M0.363836 55.6182C0.363836 55.6182 0.935032 52.4632 3.1812 59.8824C5.42737 67.3017 30.8263 83.54 39.3284 70.3892C47.8304 57.2383 59.8505 71.9953 68.1538 68.0485C76.457 64.1017 77.7722 58.8928 71.5832 46.3418C65.3942 33.7908 80.6183 18.4969 65.4426 8.66447C50.2669 -1.16797 62.0153 1.24753 62.0153 1.24753L61.938 41.3903L41.6239 59.8071L0.363836 55.6182Z" fill="url(#paint0_linear_8_1207)" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1207" x1="3.42636" y1="17.5375" x2="122.437" y2="61.5397" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '0px', left: '47px', zIndex: '0' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43" fill="none">
                                <path opacity="0.518059" fill-rule="evenodd" clip-rule="evenodd" d="M34.5929 42.5462C34.5929 42.5462 32.8284 42.4435 36.7359 40.6932C40.6435 38.9429 47.8157 23.7466 40.0485 19.9222C32.2812 16.0979 39.5445 8.42581 36.8259 4.08661C34.1073 -0.252582 31.169 -0.628557 24.7197 3.65811C18.2704 7.94478 5.82846 -3.5045 1.47187 5.58403C-2.88472 14.6725 4.51543 3.63808 4.51543 3.63808L22.6607 9.34638L34.1047 19.3673L34.5929 42.5462Z" fill="url(#paint0_linear_8_1208)" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1208" x1="12.7711" y1="43.2224" x2="29.3651" y2="-25.6748" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='text-overlap' style={{ top: '20px', left: '30px' }}>
                            43498
                        </div>

                        {/* <div className='box-image'></div> */}

                    </div>
                    <div className='text-graph'>
                        <div className='user-text'>Total Number of Trade</div>
                        <div className='percent-graph'>
                            <div className='percent-text'>11.06%</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="26" viewBox="0 0 63 26" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26V10.3755L5.60289 18.645L11.8586 14.0553L17.1566 8.95548L22.5442 6.43643L27.8222 8.95548L33.8206 14.6354L39.481 8.95548L45.2619 14.0553L50.9223 3.80797C50.9223 3.80797 52.9538 5.69498 53.7891 7.26675C53.9586 7.58562 62.0776 -1.1916 62.7162 0.137052C63.3548 1.4657 62.7162 26 62.7162 26H0Z" fill="url(#paint0_linear_8_1233)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_8_1233" x1="-25.6449" y1="-18.7048" x2="-25.6449" y2="28.4624" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1CD1A1" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'flex-start' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                            <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                            <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                            <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                        </svg>
                    </div>
                </div>
            </Col>

            <Col className='col-md-4 Overview-box'>
                <div className='Box-wrapper'>
                    <div className='image-text'>
                        <div className='image-overlap' style={{ top: '0px', left: '0px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="91" viewBox="0 0 90 91" fill="none">
                                <circle cx="44.8541" cy="45.8248" r="39.8541" stroke="#FAA9C6" stroke-width="10" />
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '1px', left: '0px', zIndex: '1' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91" fill="none">
                                <path d="M42.5029 5.13766C51.788 4.50776 61.0042 7.11681 68.5812 12.5203C76.1583 17.9237 81.6273 25.7873 84.0565 34.771C86.4858 43.7548 85.7248 53.3029 81.9034 61.7885C78.082 70.2741 71.4365 77.1722 63.0993 81.3074C54.7621 85.4426 45.249 86.559 36.1809 84.4665C27.1128 82.3739 19.0508 77.2019 13.3685 69.8316C7.68631 62.4613 4.7354 53.3488 5.01863 44.0467C5.30186 34.7447 8.8017 25.8286 14.9218 18.8176" stroke="url(#paint0_linear_8_1223)" stroke-width="10" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1223" x1="49.7481" y1="-14.1923" x2="54.8512" y2="146.04" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '23px', left: '23px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
                                <path opacity="0.253397" fill-rule="evenodd" clip-rule="evenodd" d="M0.363836 55.6182C0.363836 55.6182 0.935032 52.4632 3.1812 59.8824C5.42737 67.3017 30.8263 83.54 39.3284 70.3892C47.8304 57.2383 59.8505 71.9953 68.1538 68.0485C76.457 64.1017 77.7722 58.8928 71.5832 46.3418C65.3942 33.7908 80.6183 18.4969 65.4426 8.66447C50.2669 -1.16797 62.0153 1.24753 62.0153 1.24753L61.938 41.3903L41.6239 59.8071L0.363836 55.6182Z" fill="url(#paint0_linear_8_1207)" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1207" x1="3.42636" y1="17.5375" x2="122.437" y2="61.5397" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='image-overlap' style={{ top: '0px', left: '47px', zIndex: '0' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43" fill="none">
                                <path opacity="0.518059" fill-rule="evenodd" clip-rule="evenodd" d="M34.5929 42.5462C34.5929 42.5462 32.8284 42.4435 36.7359 40.6932C40.6435 38.9429 47.8157 23.7466 40.0485 19.9222C32.2812 16.0979 39.5445 8.42581 36.8259 4.08661C34.1073 -0.252582 31.169 -0.628557 24.7197 3.65811C18.2704 7.94478 5.82846 -3.5045 1.47187 5.58403C-2.88472 14.6725 4.51543 3.63808 4.51543 3.63808L22.6607 9.34638L34.1047 19.3673L34.5929 42.5462Z" fill="url(#paint0_linear_8_1208)" />
                                <defs>
                                    <linearGradient id="paint0_linear_8_1208" x1="12.7711" y1="43.2224" x2="29.3651" y2="-25.6748" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD749B" />
                                        <stop offset="1" stop-color="#281AC8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='text-overlap' style={{ top: '20px', left: '30px' }}>
                            43498
                        </div>

                        {/* <div className='box-image'></div> */}

                    </div>
                    <div className='text-graph'>
                        <div className='user-text'>Total Number of Transaction</div>
                        <div className='percent-graph'>
                            <div className='percent-text'>11.86%</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="26" viewBox="0 0 63 26" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26V10.3755L5.60289 18.645L11.8586 14.0553L17.1566 8.95548L22.5442 6.43643L27.8222 8.95548L33.8206 14.6354L39.481 8.95548L45.2619 14.0553L50.9223 3.80797C50.9223 3.80797 52.9538 5.69498 53.7891 7.26675C53.9586 7.58562 62.0776 -1.1916 62.7162 0.137052C63.3548 1.4657 62.7162 26 62.7162 26H0Z" fill="url(#paint0_linear_8_1233)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_8_1233" x1="-25.6449" y1="-18.7048" x2="-25.6449" y2="28.4624" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1CD1A1" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'flex-start' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                            <path d="M1.86673 3.73333C0.8358 3.73333 6.50883e-05 2.8976 6.50883e-05 1.86667C6.50883e-05 0.835735 0.8358 0 1.86673 0C2.89766 0 3.7334 0.835735 3.7334 1.86667C3.7334 2.8976 2.89766 3.73333 1.86673 3.73333Z" fill="#858585" />
                            <path d="M8.00003 3.73333C6.9691 3.73333 6.13337 2.8976 6.13337 1.86667C6.13337 0.835735 6.9691 0 8.00003 0C9.03096 0 9.8667 0.835735 9.8667 1.86667C9.8667 2.8976 9.03096 3.73333 8.00003 3.73333Z" fill="#858585" />
                            <path d="M14.1333 3.73333C13.1024 3.73333 12.2667 2.8976 12.2667 1.86667C12.2667 0.835735 13.1024 0 14.1333 0C15.1643 0 16 0.835735 16 1.86667C16 2.8976 15.1643 3.73333 14.1333 3.73333Z" fill="#858585" />
                        </svg>
                    </div>
                </div>
            </Col>

        </Row>
    )
}

export default Overviewsec