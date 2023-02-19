import React from 'react';

function StackSection() {

    const biggerStyles = {
        width: 'auto',
        height: '6.2rem',
        left: '32rem',
        margintop: '1rem',
        padding: '1rem',
    }

    const smallerStyles = {
        width: 'auto',
        height: '5.6rem',
        left: '32rem',
        margintop: '1rem',
        padding: '1rem',
    }

    const djangoStyles = {
        width: 'auto',
        height: '6.2rem',
        left: '32rem',
        margintop: '1rem',
        padding: '0.5rem',
    }

    return (
        <div className={'stackWrap'}>
            <div className={'stackIntro'}>
                Some of the technologies I've been working with recently
            </div>
            <div className={'stackIcons'}>
                    <img  src={'https://www.svgrepo.com/show/452091/python.svg'} alt={'Python'}
                    style={biggerStyles}/>
              
                    <img src={'https://www.svgrepo.com/show/353925/javascript.svg'} alt={'Javascript'}
                    style={smallerStyles}/>
                
                    <img src={'https://www.svgrepo.com/show/452092/react.svg'} alt={'React'}
                    style={biggerStyles}/>
                
                    <img src={'https://www.svgrepo.com/show/355133/mysql.svg'} alt={'MySQL'}
                    style={biggerStyles}/>
                
                    <img src={'https://www.svgrepo.com/show/373554/django.svg'} alt={'Django'}
                    style={djangoStyles}/>
                    {/* <div className={'djangoTxt'}>Django</div> */}
            </div>
            <div  className={'stackIconsText'}>
                <div className={'pythonTxt'}>Python</div>
                <div className={'jsTxt'}>JavaScript</div>
                <div className={'reactTxt'}>ReactJS</div>
                <div className={'mysqlTxt'}>MySQL</div>
                
            </div>
        </div>
    )
}

export default StackSection;