import React  from "react";
import Typed from 'typed.js';

function Header() {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: ['Hi, Rihhard here.\n', 'I\'m a developer.'],
            typeSpeed: 90,
            backSpeed: 60,
            backDelay: 1400,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '_',
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    function openCV (event) {
        event.preventDefault();
        window.open('https://drive.google.com/file/d/1yWQaQaE_UNy5obVUrCpTBMO7CJMIW7Db/view?usp=drive_link')
    }
    return (
            <div className={'headerWrap'}>
                <ul className={'mainHeader'}>
                    <li className='headerTxt' onClick={openCV}>CV</li>
                    <li className='headerTxt'>Portfolio</li>
                    <li className='headerTxt'>Contact</li>
                </ul>
                <div className={'introWrap'}>
                    <span className={'introText'} ref={el}>
                    </span>
                </div>
            </div>
    )   
}

export default Header;