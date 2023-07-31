import React from 'react'
import './SideBar.css';


const SideBar = () => {
    return (
        <div className='SideBar-wrapper'>
            <div className='list-selected-wrapper '>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                    <path d="M8.5 11C11.25 11 16 6.25 16 6C16 5.75 11.25 1 8.5 1C5.75 1 1 5.875 1 6C1 6.125 5.75 11 8.5 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.5 7.25C9.88071 7.25 11 6.13071 11 4.75C11 3.36929 9.88071 2.25 8.5 2.25C7.11929 2.25 6 3.36929 6 4.75C6 6.13071 7.11929 7.25 8.5 7.25Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='list-selected-text'>Overview</div>
            </div>
            <div className='list-wrapper'>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 8.1">
                        <path id="Oval_26_" d="M8.05833 9.10833C9.98333 9.10833 11.6167 6.54167 11.6167 4.55833C11.6167 2.575 9.98333 1 8.05833 1C6.075 1 4.5 2.575 4.5 4.55833C4.5 6.54167 6.075 9.10833 8.05833 9.10833Z" stroke="url(#paint0_linear_8_1095)" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Rectangle_26_" d="M9.75 8.5835L10.9167 10.3335C12.8417 10.3335 14.4167 11.9085 14.4167 13.8335L15 15.5835H1L1.58333 13.8335C1.58333 11.9085 3.15833 10.3335 5.08333 10.3335L6.25 8.5835" stroke="url(#paint1_linear_8_1095)" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Path-3_6_" d="M5.08301 10.3335C7.00801 11.9085 8.99134 11.9085 10.9163 10.3335" stroke="url(#paint2_linear_8_1095)" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_8_1095" x1="8.41417" y1="-0.276312" x2="8.93521" y2="14.0831" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_1095" x1="8.7" y1="7.48164" x2="8.89761" y2="19.8914" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_8_1095" x1="8.29134" y1="10.1476" x2="8.30485" y2="12.2422" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='list-text'>User</div>
            </div>

            <div className='list-wrapper'>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                    <path d="M3.09282 1H10.4177C11.5687 1 12.5105 1.94177 12.5105 3.09282V7.38309C12.5105 8.53414 11.5687 9.47591 10.4177 9.47591H6.28436L3.40674 11.9873V9.47591H2.46497C1.62785 9.47591 1 8.84806 1 8.06326V3.09282C1 1.94177 1.94177 1 3.09282 1Z" stroke="url(#paint0_linear_8_1103)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.7085 10.4179C5.7085 10.9934 6.17938 11.4643 6.7549 11.5166L10.365 11.6212L13.2426 14.1326V11.6212H14.1844C14.9692 11.6212 15.6494 10.9934 15.6494 10.1563V5.18583C15.6494 4.03479 14.7076 3.09302 13.5566 3.09302H12.5102" stroke="url(#paint1_linear_8_1103)" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_8_1103" x1="7.33077" y1="-0.729481" x2="7.92253" y2="18.736" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_1103" x1="11.176" y1="1.3553" x2="11.8675" y2="20.9071" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='list-text'>Trade</div>
            </div>

            <div className='list-wrapper'>

                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                    <path d="M15.7175 8.35877V10.8117C15.7175 11.4862 15.1656 12.0382 14.4911 12.0382H2.22646C1.55191 12.0382 1 11.4862 1 10.8117V2.22646C1 1.55191 1.55191 1 2.22646 1H14.4911C15.1656 1 15.7175 1.55191 15.7175 2.22646V4.67938" stroke="url(#paint0_linear_8_1068)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.06641 1V12.0382" stroke="url(#paint1_linear_8_1068)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.9528 4.67993H16.3304V8.35932H9.9528C8.91031 8.17535 8.3584 7.56212 8.3584 6.51962C8.3584 5.47713 8.91031 4.8639 9.9528 4.67993Z" stroke="url(#paint2_linear_8_1068)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.1982 6.51855H10.8115" stroke="url(#paint3_linear_8_1068)" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_8_1068" x1="9.09465" y1="-0.737487" x2="9.56192" y2="18.825" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_1068" x1="4.61641" y1="-0.737487" x2="10.7406" y2="16.6833" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_8_1068" x1="12.743" y1="4.10077" x2="12.8389" y2="10.6239" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_8_1068" x1="10.5355" y1="6.36115" x2="10.6274" y2="8.12965" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='list-text'>Wallet</div>
            </div>

            <div className='list-wrapper'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_8_1073)">
                        <path d="M5.46364 3.01377L5.71352 2.58069C5.71574 2.58197 5.71729 2.5825 5.71828 2.58276C5.71934 2.58304 5.72048 2.5832 5.72178 2.5832C5.72488 2.5832 5.72831 2.58231 5.73111 2.58073C5.73236 2.58002 5.73333 2.57927 5.73412 2.57849C5.73485 2.57778 5.73586 2.57662 5.73704 2.57458L5.73705 2.57455L6.44995 1.34036L5.46364 3.01377ZM5.46364 3.01377C5.54513 3.06079 5.63401 3.0832 5.72178 3.0832C5.90042 3.0832 6.07424 2.99046 6.17001 2.82464L5.46364 3.01377ZM5.46364 3.01377L5.71373 2.58081C5.70553 2.57607 5.70273 2.56562 5.70747 2.55742L5.70757 2.55724L5.81003 2.3797L6.42844 1.30809M5.46364 3.01377L6.42844 1.30809M6.42844 1.30809L6.44376 1.31694L6.44377 1.31694C6.44765 1.31918 6.45053 1.32287 6.45176 1.32742L6.45177 1.32749C6.45285 1.3315 6.45238 1.33612 6.44998 1.34031L6.42844 1.30809ZM6.33307 1.25301L5.20718 1.65949C2.8593 2.50715 1.08517 4.56361 0.641776 7.07846L6.33307 1.25301ZM6.33307 1.25301L5.20929 0.604009C5.2009 0.599167 5.19052 0.602037 5.18579 0.610158C5.18101 0.618437 5.18391 0.628862 5.19198 0.633519L5.19206 0.633568L5.32086 0.707963L6.25984 1.25034L5.23765 1.61226C2.8568 2.4552 1.05568 4.53382 0.608141 7.07254L0.608123 7.07264C0.391394 8.30061 0.501887 9.56586 0.926958 10.7311L0.457493 10.9024L0.926959 10.7311C0.927893 10.7337 0.928819 10.7351 0.929502 10.736C0.930284 10.737 0.931373 10.7381 0.932895 10.7391C0.936335 10.7415 0.940183 10.7425 0.943113 10.7425C0.944346 10.7425 0.9462 10.7423 0.948866 10.7413L6.33307 1.25301ZM0.959154 10.7194L0.959138 10.7194C0.535709 9.55878 0.42622 8.30007 0.641762 7.07854L0.959154 10.7194ZM0.959154 10.7194C0.962339 10.7282 0.957911 10.738 0.948879 10.7413L0.959154 10.7194Z" stroke="url(#paint0_linear_8_1073)" />
                        <path d="M13.0297 12.8419L13.0297 12.8419C13.0223 12.8357 13.0116 12.8367 13.0056 12.8439L13.0055 12.8439C11.3866 14.7698 8.8452 15.6953 6.36944 15.2583C5.16764 15.0464 4.04699 14.5253 3.11461 13.7602L2.15578 12.9734L2.15527 14.2817V14.2817C2.15527 14.291 2.16285 14.2988 2.17239 14.2988L13.0297 12.8419ZM13.0297 12.8419C13.0322 12.844 13.0333 12.8456 13.0339 12.8469C13.0348 12.8485 13.0355 12.8508 13.0357 12.8535C13.0359 12.8562 13.0356 12.8585 13.0351 12.8602C13.0347 12.8616 13.0339 12.8634 13.0318 12.8658L13.0317 12.8659C11.6721 14.4833 9.66217 15.3989 7.58627 15.3989C7.17971 15.3989 6.77075 15.3638 6.36354 15.2919L6.3635 15.2919C5.12235 15.0731 3.96563 14.5259 3.01239 13.72L2.18998 13.0246L2.18957 14.1016L2.1895 14.2816L13.0297 12.8419ZM1.65851 12.8036H1.66838H1.67235H2.13048H2.13058H2.15851V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8036V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8037V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8038V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.8039V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.804V12.8283L2.15777 12.836L2.15776 12.8361L2.15615 12.8525L2.15615 12.8526L2.15622 12.8532L2.15614 12.8617L2.15607 12.8617C2.156 12.8643 2.15591 12.8668 2.15582 12.8691L2.15582 12.8737H3.43179H3.59817C3.60763 12.8737 3.61528 12.8661 3.61528 12.8566C3.61528 12.8471 3.60763 12.8395 3.59817 12.8395H2.22148H2.19792L2.17446 12.8373C2.17162 12.837 2.16921 12.8373 2.16748 12.8378C2.16611 12.8383 2.16441 12.839 2.16199 12.841L2.16193 12.8411C2.15967 12.843 2.15873 12.8444 2.15811 12.8456C2.15732 12.8471 2.15649 12.8494 2.15618 12.8525L2.15611 12.8532L2.1558 12.8563L2.15578 12.8565L2.15525 12.8617L2.15515 12.8627L2.1537 12.8729L2.15358 12.8737L1.84068 12.4579C1.73312 12.5481 1.67182 12.6728 1.65872 12.8022L1.65851 12.8036ZM1.65851 12.8036V12.804L2.04537 12.8588L2.02875 12.8564L2.02774 12.8563L1.99569 12.8517L1.66767 12.8049L1.66141 12.804L1.65851 12.8036ZM2.1895 14.2817C2.18947 14.2912 2.1818 14.2988 2.17242 14.2988L2.1895 14.2817Z" stroke="url(#paint1_linear_8_1073)" />
                        <path d="M14.1142 11.2952L14.2436 10.8122C14.2392 10.811 14.2354 10.8081 14.2331 10.8041L13.5206 9.56953C13.5157 9.56116 13.5187 9.55074 13.5267 9.54611L13.5269 9.54602C13.5297 9.5444 13.5315 9.54397 13.533 9.5438C13.5348 9.54357 13.5371 9.54365 13.5397 9.54436C13.5423 9.54506 13.5444 9.54617 13.5459 9.5473C13.5471 9.5482 13.5486 9.54956 13.5502 9.55242L13.5503 9.55247L13.626 9.68368L14.2717 10.8017L14.2566 10.8105L14.2565 10.8105C14.2539 10.812 14.251 10.8128 14.248 10.8128C14.2468 10.8128 14.2453 10.8127 14.2434 10.8122L14.1142 11.2952ZM14.1142 11.2952C14.1582 11.3069 14.2032 11.3128 14.248 11.3128C14.338 11.3128 14.4273 11.2893 14.5066 11.2435L13.8001 11.0542C13.8687 11.173 13.9817 11.2596 14.1142 11.2952ZM15.4973 10.0742L15.4974 10.0743C15.5021 10.0824 15.4994 10.093 15.491 10.0978L14.334 10.7658L14.5516 9.51962C14.8751 7.66666 14.4589 5.79551 13.3798 4.2544C12.2986 2.71011 10.6783 1.67804 8.82179 1.35097C8.81255 1.34934 8.80632 1.34046 8.80796 1.33116L8.808 1.33092C8.80958 1.32197 8.81826 1.31556 8.82785 1.31724C10.6951 1.64623 12.3201 2.68141 13.4078 4.23468C14.4954 5.78798 14.9125 7.66922 14.5832 9.53691L14.5831 9.53746C14.5798 9.55643 14.5779 9.56549 14.5752 9.57826C14.5725 9.59069 14.5691 9.60665 14.5629 9.63871L14.3561 10.7133L15.3039 10.1662L15.474 10.0681L15.4741 10.068C15.4769 10.0664 15.4787 10.066 15.4802 10.0658C15.482 10.0655 15.4844 10.0656 15.487 10.0663C15.4897 10.067 15.4917 10.0681 15.4932 10.0692C15.4943 10.0701 15.4957 10.0714 15.4973 10.0742Z" stroke="url(#paint2_linear_8_1073)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_8_1073" x1="3.82378" y1="-1.6521" x2="4.82941" y2="18.0525" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_1073" x1="8.18956" y1="11.7765" x2="8.24986" y2="18.0919" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_8_1073" x1="12.5383" y1="-0.83524" x2="13.3456" y2="17.7418" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <clipPath id="clip0_8_1073">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className='list-text'>Transaction</div>
            </div>

            <div className='list-wrapper'>
                {/* svg */}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
                    <path d="M8.03418 18.3264L8.03418 6.33816" stroke="url(#paint0_linear_8_1078)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.3037 18.3264L11.3037 3.06864" stroke="url(#paint1_linear_8_1078)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.76514 18.3264L4.76514 9.60769" stroke="url(#paint2_linear_8_1078)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.49512 18.3264L1.49512 11.7874" stroke="url(#paint3_linear_8_1078)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 8.24043L8.24043 1" stroke="url(#paint4_linear_8_1078)" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_8_1078" x1="8.19159" y1="11.7329" x2="6.41832" y2="11.7282" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_1078" x1="11.1463" y1="9.93464" x2="12.9196" y2="9.93093" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_8_1078" x1="4.60773" y1="13.5311" x2="6.38098" y2="13.5246" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_8_1078" x1="1.33771" y1="14.7299" x2="3.11094" y2="14.7213" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_8_1078" x1="4.98223" y1="-0.139697" x2="5.39073" y2="12.6866" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='list-text'>Statistics</div>
            </div>

            <div className='list-wrapper'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M13.8 6.59998L17 6.59998L17 2.59998L13.8 2.59999L13.8 6.59998Z" stroke="url(#paint0_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.3999 6.7594L15.3999 14.7594" stroke="url(#paint1_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.4001 9.79993L10.6001 9.79993L10.6001 5.79993L7.40009 5.79994L7.4001 9.79993Z" stroke="url(#paint2_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 10.7594V14.7594" stroke="url(#paint3_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 1.15942V5.15942" stroke="url(#paint4_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.3999 1.15942V1.95942" stroke="url(#paint5_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.0002 13L4.2002 13L4.20019 9.00001L1.00019 9.00001L1.0002 13Z" stroke="url(#paint6_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.6001 8.99999L2.6001 1" stroke="url(#paint7_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.6001 14.5999V13.7999" stroke="url(#paint8_linear_8_1085)" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_8_1085" x1="15.24" y1="7.22961" x2="14.9581" y2="0.147743" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_1085" x1="15.5573" y1="11.1594" x2="13.7841" y2="11.1665" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_8_1085" x1="8.8401" y1="10.4296" x2="8.55815" y2="3.34769" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_8_1085" x1="9.15741" y1="12.9594" x2="7.38424" y2="12.9735" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_8_1085" x1="9.15741" y1="3.35942" x2="7.38424" y2="3.37354" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_8_1085" x1="15.5573" y1="1.59942" x2="13.7868" y2="1.66991" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_8_1085" x1="2.4402" y1="13.6296" x2="2.15825" y2="6.54777" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_8_1085" x1="2.75751" y1="5.39999" x2="0.984258" y2="5.40705" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_8_1085" x1="2.75751" y1="14.2399" x2="0.987036" y2="14.3104" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FD749B" />
                            <stop offset="1" stop-color="#281AC8" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='list-text'>Settigs</div>
            </div>

            <div className='side-text'>Refferal</div>
            <div className='side-text'>Log Out</div>

        </div>
    )
}

export default SideBar