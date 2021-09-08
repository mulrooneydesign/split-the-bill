import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto Mono:100,400,700', 'Oswald: 100', 'sans-serif']
  }
});

ReactDOM.render(<App />,document.getElementById('root'));
