interface Props {
  icon: string;
  name: string;
  alt: string;
  href: string;
}

const LinkTeam = ({ icon, name, alt, href }: Props) => (
  <div className="flex gap-2 mb-[5px]">
    <img src={icon} alt={alt} width="21px" className="h-[21px]" />
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-body font-semibold text-x3 leading-[23px] text-white"
    >
      {name}
    </a>
  </div>
);

export default LinkTeam;
