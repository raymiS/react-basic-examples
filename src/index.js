import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import BasicExamples from './components/';

ReactDOM.render(<BasicExamples />, document.getElementById('root'));
registerServiceWorker();
