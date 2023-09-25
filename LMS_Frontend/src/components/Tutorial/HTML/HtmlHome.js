
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import ContentHtml from './ContentHtml';
import HtmlSidebar from './HtmlSidebar';
import App from '../CodeEditor/editor/App';



function HtmlHome(){
    useEffect(()=>{
        document.title='My Dashboard';
    });
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-2'>
                    <HtmlSidebar />
                </aside>
                <section className='col-md-6'>
                    <ContentHtml />
                </section>
                <section className='col-md-4'>
                    <App />
                </section>
            </div>
       </div>
    )
}
export default HtmlHome;