import React from 'react'

export default function Chatbot() {
    return (
        <div style={{ height: "90vh", width: "100%", padding: "20px 200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ border: "1px solid rgb(22, 223, 223)", borderRadius: "8px", height: "80%", width: "60%" }}>
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/Rai2lhrhNHGCRy6YJz1sW"
                    width="100%"
                    style={{height: "100%", minHeight: "100%", padding: "20px"}}
                    // frameborder="0"
                ></iframe>
            </div>
        </div>
    )
}
