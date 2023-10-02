
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import App from '../CodeEditor/editor/App';
import JsSidebar from './JsSidebar';
import ContentJs from './ContentJs';



function JsHome(){
    useEffect(()=>{
        document.title='JavaScript';
    });
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-2'>
                    <JsSidebar />
                </aside>
                <section className='col-md-6'>
                    <ContentJs />
                </section>
                <section className='col-md-4'>
                    <App />
                </section>
            </div>
       </div>
    )
}
export default JsHome;