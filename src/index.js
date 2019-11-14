import React from 'react';
import ReactDom from 'react-dom';
import App from './app/App'

const title = `Como un mago :p`;

ReactDom.render(
<App title={ title} />,
document.getElementById('app')
);

module.hot.accept();