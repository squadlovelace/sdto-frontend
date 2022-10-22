interface Props {
  href: string;
  textLink: string;
}

const LiNavbar = ({ href, textLink }: Props) => (
  <li className="font-inter font-semibold text-x3 capitalize text-white h-10 leading-x1.5">
    <a href={href}>{textLink}</a>
  </li>
);

export default LiNavbar;
