import React from 'react';

interface Props {
  title: string;
  textInfo: string;
}

const TextTitle = ({ textInfo, title }: Props) => (
  <div>
    <h1>{title}</h1>
    <p>{textInfo}</p>
  </div>
);

export default TextTitle;
