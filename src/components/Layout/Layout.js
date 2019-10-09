import React from 'react';
import Aux from '../../hoc/Aux';
import ValueClass from './Layout.css'


const layout = (props) => (
    <Aux>
    <div>Toolbar,Options</div>
    <main className={ValueClass.siteWrapper}>
        {props.children}
    </main>
    </Aux>
);
export default layout;