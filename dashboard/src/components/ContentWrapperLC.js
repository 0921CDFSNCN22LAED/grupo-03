import React from 'react';
import TopBar from './TopBar';
import ContentLastProductCreate from './ContentLastProductCreate';
import ContentLastUserCreate from './ContentLastUserCreate';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentLastProductCreate />
                    <TopBar />
                    <ContentLastUserCreate />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;