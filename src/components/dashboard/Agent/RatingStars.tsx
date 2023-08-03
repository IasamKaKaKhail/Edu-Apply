import { ButtonBase, styled, SxProps, Theme } from "@mui/material";
import React from "react";
import { Row } from "../styled";
import { RatingStartIcon } from "../Svgs";

const DISABLE_FILLED_COLOR = "#BBBBC7";
const DISABLE_BG_COLOR = "#BBBBC726";
const ACTIVE_FILLED_COLOR = "#F0D130";
const ACTIVE_BG_COLOR = "#F0D13026";

type Props = {
  rating: number;
  sx?: SxProps<Theme> | undefined;
  onClick?: (value: number) => void;
};

export const StarsWrapper = styled(ButtonBase)<{ isActive: boolean }>(
  ({ isActive }) => ({
    display: "flex",
    borderRadius: "0.6rem",
    padding: "1.2rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    gap: "0.5rem",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
    backgroundColor: isActive ? ACTIVE_BG_COLOR : DISABLE_BG_COLOR,
  }),
);

interface IStars {
  isActive: boolean;
  count: number;
  onClick?: (value: number) => void;
}

const Stars = ({ isActive, count, onClick }: IStars) => {
  const Stars: JSX.Element[] = [];
  for (let index = 0; index < count; index++) {
    Stars.push(
      <RatingStartIcon
        fill={isActive ? ACTIVE_FILLED_COLOR : DISABLE_FILLED_COLOR}
      />,
    );
  }
  return (
    <StarsWrapper onClick={() => onClick && onClick(count)} isActive={isActive}>
      {Stars}
    </StarsWrapper>
  );
};

const RatingStars = ({ rating, onClick, sx }: Props) => {
  return (
    <Row sx={sx}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Stars
          key={item}
          onClick={onClick}
          isActive={rating === item}
          count={item}
        />
      ))}
    </Row>
  );
};

export default RatingStars;
