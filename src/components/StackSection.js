import React from 'react';

function StackSection() {

    const biggerStyles = {
        width: 'auto',
        height: '6.2rem',
        left: '32rem',
        // margintop: '1rem',
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
        <div className='stackWrap'>
            <div className={'stackIntro'}>
                Some of the technologies I've been working with recently
            </div>
            <div className={'stackIcons'}>
                <div className="icons">
                    <img  src={'https://www.svgrepo.com/show/452091/python.svg'} alt={'Python'}
                    style={biggerStyles}/>
                     <div >Python</div>
                </div>
                <div className="icons">
                    <img src={'https://www.svgrepo.com/show/373554/django.svg'} alt={'Django'}
                    style={djangoStyles}/>
                    <div >Django</div>
                </div>
                <div className="icons">
                    <img src={'https://www.svgrepo.com/show/353925/javascript.svg'} alt={'Javascript'}
                    style={biggerStyles}/>
                    <div >JavaScript</div>
                </div>
                <div className="icons">
                    <img src={'https://www.svgrepo.com/show/452092/react.svg'} alt={'React'}
                    style={biggerStyles}/>
                    <div >ReactJS</div>
                </div>
                <div className='icons'>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png'} alt={'HTML'}
                    style={biggerStyles}/>
                    <div >HTML</div>
                </div>
                <div className="icons">
                    <img src={'https://cdn.cdnlogo.com/logos/c/18/css.svg'} alt={'CSS'}
                    style={biggerStyles}/>
                    <div >CSS</div>
                </div>
                <div className="icons">
                    <img src={'https://www.svgrepo.com/show/355133/mysql.svg'} alt={'MySQL'}
                    style={biggerStyles}/>
                    <div >MySQL</div>
                </div>
            </div>
            <div className='projectsWrap'>
                    <div className='projectsIntro'>
                    You can view my projects here
                    You can view my projects here
                    You can view my projects here
                    You can view my projects here
                    You can view my projects here
                    You can view my projects here
                    </div>
            </div>
        </div>
    )
}

export default StackSection;