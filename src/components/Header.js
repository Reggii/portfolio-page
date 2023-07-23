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
    return (
            <div className={'headerWrap'}>
                <ul className={'mainHeader'}>
                    <li className='headerTxt' href='google.com'>CV</li>
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