import React from 'react';
import Typed from 'typed.js';

function Intro () {

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
    <div className={'introWrap'}>
        <span className={'introText'} ref={el}>
        </span>
    </div>
)
}


export default Intro;