import React from 'react';
import ReactDom from 'react-dom';
import Hello from 'components/hello/hello';

import 'common/style/lss.base.min.css'//样式初始化

ReactDom.render(
    <Hello />,
    document.getElementById('root')
);