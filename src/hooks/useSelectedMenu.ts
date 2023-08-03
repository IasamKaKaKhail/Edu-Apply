import { useCallback, useEffect, useState } from "react";
import useGetTitle from "./useGetTitle";

export type IMenu =
  | "Home"
  | "Search"
  | "Agent List"
  | "Student List"
  | "University Manegment"
  | "Student Training"
  | "Settings"
  | "Payment"
  | "Event Page"
  | "Log Out";

const useSelectedMenu = () => {
  const title = useGetTitle();
  const [selectedMenu, setSelectedMenu] = useState<IMenu>("Home");

  const updateSelectedMenu = useCallback(() => {
    switch (title) {
      case "Search":
        setSelectedMenu("Search");
        break;
      case "Agent List":
      case "Add Agent":
      case "Agent Profile":
        setSelectedMenu("Agent List");
        break;
      case "Student List":
      case "Add Student":
      case "Student Profile":
        setSelectedMenu("Student List");
        break;
      case "University Manegment":
      case "Add University":
      case "University Profile":
        setSelectedMenu("University Manegment");
        break;
      case "Student Training":
        setSelectedMenu("Student Training");
        break;
      case "Settings":
        setSelectedMenu("Settings");
        break;
      case "Event Page":
        setSelectedMenu("Event Page");
        break;
      case "Payment":
        setSelectedMenu("Payment");
        break;
      default:
        setSelectedMenu("Home");
        break;
    }
  }, [title]);

  useEffect(() => {
    updateSelectedMenu();
  }, [title]);

  return selectedMenu;
};

export default useSelectedMenu;
