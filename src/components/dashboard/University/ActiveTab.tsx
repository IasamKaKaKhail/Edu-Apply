import React from "react";
import OverviewTab from "./OverviewTab";
import SubjectsTab from "./SubjectsTab";

type Props = {
  tab: "Overview" | "Subjects";
};

const ActiveTab = ({ tab }: Props) => {
  switch (tab) {
    case "Subjects":
      return <SubjectsTab />;
    default:
      return <OverviewTab />;
  }
};

export default ActiveTab;
