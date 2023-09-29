// import './home.css';
// import { useState } from 'react';
// import QRCode from 'react-qr-code';

// function Home() {

//     const [value, setValue] = useState();
//     const [result, setResult] = useState(false);

//     const handleSubmit = (event) => {
//         setResult(true);
//         event.preventDefault();
//     }

//     return (
//         <div className='body'>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input
//                         type="text"
//                         onChange={(e) => setValue(e.target.value)}
//                     />
//                 </div>

//                 <button>Submit</button>

//                 <div>
//                     {result && (
//                         <div>
//                             <QRCode
//                                 value={value}
//                             />
//                         </div>
//                     )}
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Home;

import './home.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';

function Home() {

    const [value, setValue] = useState('');
    const [qrCode, setQRCode] = useState(null);

    const handleSubmit = (event) => {
        setQRCode(value);
        event.preventDefault();
    };

    return (
        <div className='body'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>

                <button>Submit</button>

                <div>
                    {qrCode && (
                        <div>
                            <QRCode value={qrCode} />
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Home;
