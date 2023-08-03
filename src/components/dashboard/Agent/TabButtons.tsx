import { IAgentTabs } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";
import { TabMenuButton } from "..";
import { Row } from "../styled";
type Props = {
  setActiveTab: Dispatch<SetStateAction<IAgentTabs>>;
  activeTab: IAgentTabs;
};
const TabButtons = ({ setActiveTab, activeTab }: Props) => {
  return (
    <Row mt={"4.1rem"} sx={{ gap: "2.5rem" }}>
      <TabMenuButton
        title="Profile Details"
        onClick={() => setActiveTab("Profile Details")}
        isSelected={activeTab === "Profile Details"}
      />
      <TabMenuButton
        title="Banking Details"
        onClick={() => setActiveTab("Banking Details")}
        isSelected={activeTab === "Banking Details"}
      />
      <TabMenuButton
        title="Employee"
        onClick={() => setActiveTab("Employee")}
        isSelected={activeTab === "Employee"}
      />
      <TabMenuButton
        title="Student"
        onClick={() => setActiveTab("Student")}
        isSelected={activeTab === "Student"}
      />
    </Row>
  );
};
export default TabButtons;
