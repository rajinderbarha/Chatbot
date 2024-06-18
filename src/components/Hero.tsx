import Link from 'next/link';
import React from 'react';

export default function Hero() {
    return (
        <div className='hero'>
            <div style={{ padding: '200px 200px' }}>
                <div>
                    <h2 style={{ color: 'white', fontWeight: '800', fontSize: '20px', padding: '20px 20px 10px 20px' }}>
                        {'&gt; '}The Next Gen
                    </h2>
                    <h1 style={{ color: 'white', fontWeight: '600', fontSize: '60px', maxWidth: '900px' }}>
                        WE PROVIDE SERVICES AND SOLUTIONS To <span style={{ fontFamily: 'cursive', color: 'rgb(22, 223, 223)' }}>Enterprise</span>
                    </h1>
                    <div style={{ padding: '50px 20px', display: 'flex' }}>
                        <div className='bot-btn' style={{ padding: '35px 20px 20px 10px' }}>
                            <button>
                                <Link href="/chatbot">Let&apos;s Chat with Bot</Link>
                            </button>
                        </div>
                        <div>
                            <h3 style={{ maxWidth: '550px', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                                Fuvay offers comprehensive support, ensuring seamless integration of their solutions into existing agency workflows. This saves agencies time and resources during implementation.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
