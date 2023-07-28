import React from "react";

function AboutSection() {
    return (
        <section className={'aboutWrap'}>
            <div className='aboutSubWrap'>
                <div className='aboutImg'>
                    <img src='https://www.linkpicture.com/q/haze-programmer-writing-code-on-laptop-1-1.png'></img>
                </div>
                <div className={'aboutSection'}>
                Thank you for deciding to check out my portfolio! <br/>

I have over a year of experience with software development, received my Python programming certificate from SD Academy (340 academic hours) this year and have an endless curiosity for learning new web technologies. <br/>

Feel free to browse my personal projects below and lets stay in touch via e-mail!
                </div>
            </div>
            <div className={'wave'}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 170" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={"shape-fill"}></path>
                </svg>
            </div>
        </section>
    )
}

export default AboutSection;
