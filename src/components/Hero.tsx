// import Link from 'next/link';
// import React from 'react';

// export default function Hero() {
//     return (
//         <div className='hero'>
//             <div style={{ padding: '200px 200px' }}>
//                 <div>
//                     <h2 style={{ color: 'white', fontWeight: '800', fontSize: '20px', padding: '20px 20px 10px 20px' }}>
//                     The Next Gen
//                     </h2>
//                     <h1 style={{ color: 'white', fontWeight: '600', fontSize: '60px', maxWidth: '900px' }}>
//                         WE PROVIDE SERVICES AND SOLUTIONS To <span style={{ fontFamily: 'cursive', color: 'rgb(22, 223, 223)' }}>Enterprise</span>
//                     </h1>
//                     <div style={{ padding: '50px 20px', display: 'flex' }}>
//                         <div className='bot-btn' style={{ padding: '35px 20px 20px 10px' }}>
//                             <button>
//                                 <Link href="/chatbot">Let&apos;s Chat with Bot</Link>
//                             </button>
//                         </div>
//                         <div>
//                             <h3 style={{ maxWidth: '550px', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
//                                 Fuvay offers comprehensive support, ensuring seamless integration of their solutions into existing agency workflows. This saves agencies time and resources during implementation.
//                             </h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import Link from 'next/link';

export default function Hero() {
  return (

    <div className='hero bg-gradient-to-r from-black to-blue-400 text-white py-24 md:py-40 px-6 md:px-12'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>The Next Gen</h2>
        <h1 className='text-4xl md:text-6xl font-bold mb-8 md:mb-12'>
          WE PROVIDE SERVICES AND SOLUTIONS To <span className='font-cursive text-cyan-500 '>Enterprise</span>
        </h1>
        <div className='flex justify-evenly flex-col md:flex-row items-center '>
          <div className='bot-btn mb-6 md:mb-0'>
            <button className='bg-cyan-500 hover:bg-cyan-700  text-white font-bold py-2 px-4 rounded'>
              <Link href="/chatbot">Let's Chat with Bot</Link>
            </button>
          </div>
          <div className='text-center md:text-left'>
            <h3 className='text-sm font-bold text-white max-w-[500px] md:text-lg py-5 px-10'>
              Fuvay offers comprehensive support, ensuring seamless integration of their solutions into existing agency workflows. This saves agencies time and resources during implementation.
            </h3>
          </div>
        </div>
      </div>
    </div>
    
  );
}
