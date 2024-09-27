import React from 'react'

export default function About(props) {
    let myStyle = {
        color : props.mode === 'dark'?'white':'#2C3A47',
        backgroundColor : props.mode === 'dark'?'#2C3A47':'white',
    }
  return (
    <>
    <div className="container my-3 mx-5" style={myStyle}>
        <h1>About us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item ">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About TextUtils</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body " style={myStyle}>
                        <p>
                        Welcome to TextUtils, your go-to tool for simple, fast, and efficient text manipulation. Whether you're working on a document, crafting a message, or just playing with text, our versatile set of tools is designed to make text editing quick and easy.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>1. Convert to Upper Case</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>
                        Instantly transform your entire text into capital letters with a single click. Perfect for emphasizing key points or headings.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>2. Convert to Lower Case</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>
                        Simplify your text by converting everything to lowercase. Ideal for situations where consistency matters, or when you're following specific style guidelines.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapsefour">
                    <strong>3. Clear Content</strong>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>
                        Need a fresh start? Quickly erase all the text in the input box, allowing you to start again without hassle.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <strong>4. Copy Text</strong>
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>
                        Effortlessly copy your processed text to the clipboard for use elsewhere—no need for manual highlighting or right-clicking.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <strong>5. Remove Extra Spaces</strong>
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>
                        Clean up your text by removing any unnecessary spaces between words or sentences. This helps make your content neat and professional.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    <strong>Our mission</strong>
                    </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>
                        At TextUtils, our mission is to simplify the way you interact with text, making everyday tasks more convenient. Whether you're formatting an email or just experimenting with words, we've got the tools you need.
                        Feel free to explore and experience the efficiency of TextUtils!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> 
  )
}
