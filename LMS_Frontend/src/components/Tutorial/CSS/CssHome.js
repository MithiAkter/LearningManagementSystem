
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import ContentCss from './ContentCss';
import CssSidebar from './CssSidebar';
import App from '../CodeEditor/editor/App';



function CssHome(){
    useEffect(()=>{
        document.title='My Dashboard';
    });
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-2'>
                    <CssSidebar />
                </aside>
                <section className='col-md-6'>
                    <ContentCss />
                </section>
                <section className='col-md-4'>
                    <App />
                </section>
            </div>
       </div>
    )
}
export default CssHome;