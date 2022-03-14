import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowProducts from './ContentRowProducts';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowProducts />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;