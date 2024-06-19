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
