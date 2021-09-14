import React from 'react';
import Album from '..';
import '../style';

const urls = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg'];

export default () => (
  <Album content="好好学习，天天向上发售分身乏术分身乏术这种" urls={urls} width={200}></Album>
);
