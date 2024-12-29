import React from 'react';
import './App3.css';

export default function Card({ children, name,}) {
  return (
    React.createElement('div', {className:'card'}, //parent
        React.createElement('h2',{},name),  children //2 children
    )
  );
}

//createElement('el', {k1:'v1'}, next)