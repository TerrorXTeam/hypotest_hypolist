import React from 'react';
import Aux from '../../hoc/Aux';
import 'bulma/css/bulma.css';


const Layout = (props) => (
    <Aux>
        <div className='container desktop'>
            <div className='notification'>
                {props.children}
            </div>
        </div>
    </Aux>
);
export default Layout;