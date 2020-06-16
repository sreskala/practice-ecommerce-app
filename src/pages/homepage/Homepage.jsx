import React from 'react';

import Directory from '../../components/directory/Directory';

//styles
import './homepage.styles.scss';

const Homepage = () => {

    return(
        <div className="homepage">
            <div className="directory-menu">
               <Directory />
                
            </div>
        </div>
    );

}

export default Homepage;