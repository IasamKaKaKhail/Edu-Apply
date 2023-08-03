import useSelectedMenu, { IMenu } from "@/hooks/useSelectedMenu";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { SidebarMenuText } from "../AppText";
import { MenuItemWrapper } from "./styled";
import {
  BuildingIcon,
  CalendarIcon,
  DashboardIcon,
  PaymentIcon,
  SearchIcon,
  TwoUsersIcon,
  UniCapIcon,
  UserIcon,
} from "./Svgs";

const MenuIcon = ({ icon }: { icon: IMenu }) => {
  const selectedMenu = useSelectedMenu();
  switch (icon) {
    case "University Manegment":
      return <BuildingIcon isSelected={selectedMenu === icon} />;
    case "Event Page":
      return <CalendarIcon isSelected={selectedMenu === icon} />;
    case "Student Training":
      return <UniCapIcon isSelected={selectedMenu === icon} />;
    case "Payment":
      return <PaymentIcon isSelected={selectedMenu === icon} />;
    case "Student List":
      return <UserIcon isSelected={selectedMenu === icon} />;
    case "Agent List":
      return <TwoUsersIcon isSelected={selectedMenu === icon} />;
    case "Search":
      return <SearchIcon isSelected={selectedMenu === icon} />;
    case "Home":
      return <DashboardIcon isSelected={selectedMenu === icon} />;
    default:
      return null;
  }
};
type Props = {
  isCollapsed: boolean;
  title: IMenu;
  link: string;
};
const MenuItem = ({ isCollapsed, title, link }: Props) => {
  const selectedMenu = useSelectedMenu();
  return (
    <Tooltip disableInteractive title={!isCollapsed && title} placement="right">
      <Link href={link}>
        <MenuItemWrapper>
          <MenuIcon icon={title} />
          <SidebarMenuText
            sx={{
              opacity: isCollapsed ? 1 : 0,
              color: selectedMenu === title ? "#4692FE" : "#BBBBC7",
            }}
          >
            {isCollapsed && `${title}`}
          </SidebarMenuText>
        </MenuItemWrapper>
      </Link>
    </Tooltip>
  );
};

export default MenuItem;
