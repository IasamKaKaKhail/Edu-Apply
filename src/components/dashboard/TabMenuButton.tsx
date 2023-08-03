import React from "react";
import { PageTitleText } from "../AppText";
import { TabMenuButton, TabMenuButtonLeftBorder } from "./styled";

type Props = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isSelected?: boolean;
};

const Button = ({ title, onClick, isSelected }: Props) => {
  return (
    <TabMenuButton
      sx={{ backgroundColor: isSelected ? "#E7F1FF" : "white" }}
      onClick={onClick}
    >
      <TabMenuButtonLeftBorder />
      <PageTitleText sx={{ color: "#111" }}>{title}</PageTitleText>
    </TabMenuButton>
  );
};

export default Button;
