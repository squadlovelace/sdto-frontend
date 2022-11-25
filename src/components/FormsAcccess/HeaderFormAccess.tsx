import { Link } from 'react-router-dom';

import Logo from '../../assets/logoFormAccess.png';

const HeaderFormAccess = () => (
  <Link to="/">
    <img
      src={Logo}
      alt="logo do site"
      height="22px"
      width="71px"
      className="ml-[200px] mt-[30px] mb-[100px]"
    />
  </Link>
);

export default HeaderFormAccess;
