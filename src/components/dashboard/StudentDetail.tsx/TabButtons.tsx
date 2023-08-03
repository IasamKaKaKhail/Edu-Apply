import { IProfileTabs } from "@/utils/types";
import React, { Dispatch, SetStateAction } from "react";
import { TabMenuButton } from "..";
import { Row } from "../styled";
type Props = {
  setActiveTab: Dispatch<SetStateAction<IProfileTabs>>;
  activeTab: IProfileTabs;
};
const TabButtons = ({ setActiveTab, activeTab }: Props) => {
  return (
    <Row mt={"4.1rem"} sx={{ gap: "2.5rem" }}>
      <TabMenuButton
        title="Student Profile"
        onClick={() => setActiveTab("Student Profile")}
        isSelected={activeTab === "Student Profile"}
      />
      <TabMenuButton
        title="Study Preferances"
        onClick={() => setActiveTab("Study Preferances")}
        isSelected={activeTab === "Study Preferances"}
      />
      <TabMenuButton
        title="Test Information"
        onClick={() => setActiveTab("Test Information")}
        isSelected={activeTab === "Test Information"}
      />
      <TabMenuButton
        title="Compaign Data"
        onClick={() => {
          setActiveTab("Compaign Data");
        }}
        isSelected={activeTab === "Compaign Data"}
      />
      <TabMenuButton
        title="Assigned Agent"
        onClick={() => setActiveTab("Assigned Agent")}
        isSelected={activeTab === "Assigned Agent"}
      />
      <TabMenuButton
        title="Transaction"
        onClick={() => setActiveTab("Transaction")}
        isSelected={activeTab === "Transaction"}
      />
    </Row>
  );
};
export default TabButtons;
