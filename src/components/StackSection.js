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
    
    function openChitChatly (event) {
        event.preventDefault();
        window.open('https://shark-app-6c43f.ondigitalocean.app/')
    }

    function openCmdFashion (event) {
        event.preventDefault();
        window.open('https://e-comm-client-eosin.vercel.app/')
    }

    function openChitChatlyGit (event) {
        event.preventDefault();
        window.open('https://github.com/Reggii/chit-chatly')
    }

    function openCmdFashionGit (event) {
        event.preventDefault();
        window.open('https://github.com/Reggii/e-comm-client')
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
                         Personal Projects
                    </div>
                    <h1 className='chitchatly'>Chit Chatly</h1>
                    <div className='ccgit' onClick={openChitChatlyGit}>Github</div>
                    <div className='chitchatlyWrapper'>
                        <a href='https://shark-app-6c43f.ondigitalocean.app/' target="_blank" rel="noopener noreferrer">
                            <img className='chitchatlygif' src={'chitchatly.png'} alt={'chitchatly'} style={{width:'400px', height:'300px'}}/>
                        </a>
                        <div className='ccdescription'>
                            <div className='cclink' onClick={openChitChatly}>Deployed Prototype</div>
                            <div className='cctech'>
                                A live chat web application written in Django<br/>
                                that utilises Daphne and Channels for ASGI<br/>
                                to enable websockets via JavaScript.<br/><br/>
                                Main functionalities:<br/>
                                - Register an account<br/>
                                - Create a chatroom<br/>
                                - Other accounts can join the chatroom<br/>
                                - Live chat communication<br/>
                                - Fully custom frontend<br/>
                            </div>
                        </div>
                    </div>
                    <h1 className='e-comm'>cmd Fashion</h1>
                    <div className='ecomgit' onClick={openCmdFashionGit}>Github</div>
                    <div className='e-commWrapper'>
                        <a href='https://e-comm-client-eosin.vercel.app/' target="_blank" rel="noopener noreferrer">
                            <img className='cmdfashion' src={'cmdfashion.png'} alt={'cmdfashion'} style={{width:'400px', height:'300px'}}/>
                        </a>
                        <div className='ecomdescription'>
                            <div className='ecomlink' onClick={openCmdFashion}>Deployed Prototype</div>
                            <div className='ecomtech'>
                                A full stack e-commerce store written in React<br/>
                                that uses a headless Strapi CMS for the backend<br/>
                                and has a functional cart and checkout system.<br/><br/>
                                Main functionalities:<br/>
                                - Browse products<br/>
                                - Add products to cart<br/>
                                - Check-out and pay<br/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default StackSection;