interface Props {
  title: string;
  text: string;
  hour: string;
  user: string;
}

const Pots = ({ text, title, hour, user }: Props) => (
  <div className="flex  justify-center items-center gap-[10px]">
    <div className="flex-1">
      <div className="bg-blue-400 rounded-[50%] w-[48px] h-[48px]   flex justify-center items-center text-[18px]  ">
        {user}
      </div>
    </div>
    <div className="pr-[290px]  flex-grow">
      <div className="flex gap-2">
        <h3 className="font-text font-bold text-[15px] leading-[20px] text-roxo800">
          {title}
        </h3>
        <span className="font-text text-[15px] leading-[20px] text-[#5B7083]">
          {hour}
        </span>
      </div>
      <p className="font-text font-normal leading-[25px] text-justify  border-b-[1px] border-solid border-[#5B7083] ">
        {text}
      </p>
    </div>
  </div>
);

export default Pots;
