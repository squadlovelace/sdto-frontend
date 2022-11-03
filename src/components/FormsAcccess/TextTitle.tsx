import React from 'react';

interface Props {
  title: string;
  textInfo: string;
}

const TextTitle = ({ textInfo, title }: Props) => (
  <div>
    <h1 className="font-body font-bold text-[30px] leading-[42px] text-roxo800 mb-[20px]">
      {title}
    </h1>
    <p className="font-text font-normal text-x4 leading-[25px] text-roxo800 mb-[70px]">
      {textInfo}
    </p>
  </div>
);

export default TextTitle;
