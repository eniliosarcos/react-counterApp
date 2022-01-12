import React from 'react';
import ReactDOM from 'react-dom'
import CounterApp from './Components/CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={5}></CounterApp>, divRoot);