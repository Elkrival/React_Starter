import React from 'react';
import ReactDom from 'react-dom';
import './logger.js'

const title = `Primo lo estoy haciendo`;

ReactDom.render(
<div>{ title }</div>,
document.getElementById('app')
)