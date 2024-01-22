import './home.css';
import Qrcode from 'react-qr-code';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';

function Home() {
    const qrCodeRef = useRef(null);
    const [value, setValue] = useState('');
    const [bcolor, setBcolor] = useState('white');
    const [fcolor, setFcolor] = useState('black');
    const [qrCode, setQRCode] = useState('https://yashhkumarrrr.netlify.app');

    const icon = require('./images/qr-btn-light.png');
    const downIcon = require('./images/down-btn.png');

    const handleSubmit = (event) => {
        setQRCode(value);
        event.preventDefault();
    };

    const handleDownload = () => {
        if (qrCodeRef.current) {
            html2canvas(qrCodeRef.current, { useCORS: true }).then((canvas) => {
                const link = document.createElement('a');
                link.download = 'qrcode.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    };

    return (
        <div className="body">
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <div className='content'>
                        <div className="input-area">
                            <input
                                value={value}
                                id="textfield"
                                variant="outlined"
                                label="Enter Content"
                                placeholder="Enter QR Code Content"
                                onChange={(e) => setValue(e.target.value)}
                            />

                            <button
                                type="submit"
                                id='create-btn'
                                aria-label="search"
                            >
                                <img
                                    alt=''
                                    src={icon}
                                    height='40px'
                                />
                            </button>
                        </div>

                        <div
                            ref={qrCodeRef}
                            className="home-qr-code"
                        >
                            <Qrcode
                                size={220}
                                value={qrCode}
                                fgColor={fcolor}
                                bgColor={bcolor}
                                id="qr-code-image"
                            />
                        </div>

                        <div className='download-btn'>
                            <div
                                id='download-btn'
                                onClick={handleDownload}
                            >
                                <div className='down-btn-txt'>
                                    Download QR Code
                                </div>
                                <div className='down-icon-div'>
                                    <img
                                        alt=''
                                        src={downIcon}
                                        id='down-icon'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="footer">
                <div>Developed by -&nbsp;</div>
                <div>
                    <Link target="_blank" id="footer-link" to="https://yashhkumarrrr.netlify.app">
                        Yash
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;