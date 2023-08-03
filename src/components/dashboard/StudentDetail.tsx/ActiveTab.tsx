import { IProfileTabs } from "@/utils/types";
import AssignedAgent from "./AssignedAgent";
import CompaignData from "./CompaignData";
import StudentPreferances from "./StudentPreferances";
import StudentProfile from "./StudentProfile";
import TestInformation from "./TestInformation";
import Transaction from "./Transaction";
type Props = {
  tab: IProfileTabs;
};
const ActiveTab = ({ tab }: Props) => {
  switch (tab) {
    case "Assigned Agent":
      return <AssignedAgent />;
    case "Study Preferances":
      return <StudentPreferances />;
    case "Test Information":
      return <TestInformation />;
    case "Transaction":
      return <Transaction />;
    case "Compaign Data":
      return <CompaignData />;
    default:
      return <StudentProfile />;
  }
};
export default ActiveTab;
