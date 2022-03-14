import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentUser from './ContentUser';

function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentUser />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;