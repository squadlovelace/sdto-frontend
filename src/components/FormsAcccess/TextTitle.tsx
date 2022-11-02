import React from 'react';

interface Props {
  title: string;
  textInfo: string;
}

const TextTitle = ({ textInfo, title }: Props) => (
  <div>
    <h1 className="font-body font-bold text-[30px] leading-[42px] text-roxo800">
      {title}
    </h1>
    <p>{textInfo}</p>
  </div>
);

export default TextTitle;
