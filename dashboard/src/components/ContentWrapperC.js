import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowCategory from './ContentRowCategory';

function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowCategory />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;