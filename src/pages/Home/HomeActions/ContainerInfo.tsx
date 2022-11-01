import { useState } from 'react';

interface Props {
  title: string;
  iconplus: string;
  altPlus: string;
  iconMinus: string;
  altMInus: string;
  text: string;
}

const ContainerInfo = ({
  title,
  iconplus,
  altPlus,
  text,
  iconMinus,
  altMInus,
}: Props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-white w-760">
      <div className="flex justify-between ml-8 mr-5 py-5 my-auto">
        <h1 className="font-text font-extrabold text-x4 leading-6 text-roxo500 ">
          {title}
        </h1>
        {showInfo ? (
          <button
            type="button"
            className=""
            onClick={() => setShowInfo((prevState) => !prevState)}
          >
            <img src={iconMinus} alt={altMInus} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowInfo((prevState) => !prevState)}
          >
            <img src={iconplus} alt={altPlus} />
          </button>
        )}
      </div>

      {showInfo ? (
        <p className="pt-2.5 ml-8 mr-5 pb-6 text-justify font-text font-normal text-x4 leading-6 text-roxo800">
          {text}
        </p>
      ) : null}
    </div>
  );
};

export default ContainerInfo;
