import React from "react";

function AboutSection() {
    return (
        <section className={'aboutWrap'}>
            <div className='aboutSubWrap'>
                <div className='aboutImg'>
                    <img src='https://www.linkpicture.com/q/haze-programmer-writing-code-on-laptop-1-1.png'></img>
                </div>
                <div className={'aboutSection'}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
