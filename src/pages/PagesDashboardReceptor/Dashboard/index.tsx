import SidebarReceptor from '../../../components/sidebar/sidebarreceptor';
import CreatePost from './CreatePost';
import Pots from './Pots';

const DashboardReceptor = () => (
  <div className="flex gap-[90px]">
    <SidebarReceptor />;
    <div className="flex flex-col">
      <CreatePost letterInitialUser="US" />
      <div className="flex flex-col gap-12">
        <Pots
          user="US"
          hour="- 15h"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
        />
        <Pots
          user="US"
          hour="- 15h"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
"
        />
        <Pots
          user="US"
          hour="- 15h"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
        />
      </div>
    </div>
  </div>
);

export default DashboardReceptor;
