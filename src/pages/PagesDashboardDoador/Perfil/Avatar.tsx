interface Props {
  initialLettersUser: string;
  nameUser: string;
  typeUser: string;
}

const Avatar = ({ initialLettersUser, nameUser, typeUser }: Props) => (
  <div className="flex items-center gap-5">
    <div className="bg-blue-400 rounded-[50%] w-[108px] h-[108px]   flex justify-center items-center text-[36px]">
      {initialLettersUser}
    </div>
    <div className="flex flex-col">
      <span className="font-text font-bold text-[26px] leading-9 text-roxo800">
        {nameUser}
      </span>
      <span className="font-text font-normal text-[16px] leading-[22px] text-[rgba(58,1,2.05)]">
        {typeUser}
      </span>
    </div>
  </div>
);

export default Avatar;
