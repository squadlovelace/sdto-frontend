interface Props {
  letterInstituition: string;
  intituition: string;
  emailInstrituition: string;
}

const ItemInstituition = ({
  letterInstituition,
  emailInstrituition,
  intituition,
}: Props) => (
  <div className="flex mt-[70px] gap-3">
    <div className="bg-blue-400 rounded-[50%] w-10 h-10  text-center flex justify-center items-center mr-3 ">
      {letterInstituition}
    </div>
    <div>
      <h4 className="font-inter font-semibold font-[14px] leading-[20px] text-roxo800">
        {intituition}
      </h4>
      <h5 className="font-inter font-normal font-[14px] leading-5 text-gray-500">
        {emailInstrituition}
      </h5>
    </div>
  </div>
);

export default ItemInstituition;
