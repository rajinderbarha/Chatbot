// import React from 'react'

// export default function Chatbot() {
//     return (
//         <div style={{ height: "90vh", width: "100%", padding: "20px 200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
//             <div style={{ border: "1px solid rgb(22, 223, 223)", borderRadius: "8px", height: "80%", width: "60%" }}>
//                 <iframe
//                     src="https://www.chatbase.co/chatbot-iframe/Rai2lhrhNHGCRy6YJz1sW"
//                     width="100%"
//                     style={{height: "100%", minHeight: "100%", padding: "20px"}}
//                     // frameborder="0"
//                 ></iframe>
//             </div>
//         </div>
//     )
// }


import React from 'react';

export default function Chatbot() {
  return (
    <div className='chatbot-container bg-gray-900 text-white py-24 px-6 md:px-12'>
      <div className='chatbot-frame border border-blue-400 rounded-lg h-5/6 md:h-5/6 md:w-3/6 w-5.5/6'>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/Rai2lhrhNHGCRy6YJz1sW"
          className='w-full h-full'
          style={{ minHeight: '100%' }}
          title='Chatbot'
          allow='autoplay; encrypted-media'
        />
      </div>
    </div>
  );
}
