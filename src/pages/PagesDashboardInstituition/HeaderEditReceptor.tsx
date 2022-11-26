interface Props {
  title: string;
  type: string;
}

const HeaderEditReceptor = ({ title, type }: Props) => (
  <div className="mt-[170px] mb-[100px]">
    <h1 className="font-text font-bold text-[26px] leading-[36px] text-roxo800">
      {title}
    </h1>
    <h3 className="font-text font-normal text-[16px] leading-[22px] text-gray-500 ">
      {type}
    </h3>
  </div>
);

export default HeaderEditReceptor;
