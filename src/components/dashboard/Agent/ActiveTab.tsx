import { IAgentTabs } from "@/utils/types";
import AgentBankingDetails from "./AgentBankingDetails";
import AgentEmployees from "./AgentEmployees";
import AgentProfileTab from "./AgentProfileTab";
import StudentWithAgents from "./StudentWithAgents";

type Props = {
  tab: IAgentTabs;
};
const ActiveTab = ({ tab }: Props) => {
  switch (tab) {
    case "Banking Details":
      return <AgentBankingDetails />;
    case "Employee":
      return <AgentEmployees />;
    case "Student":
      return <StudentWithAgents />;
    default:
      return <AgentProfileTab />;
  }
};
export default ActiveTab;
