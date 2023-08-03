import { SVGS } from "@/utils";
import {
  Button as MuiButton,
  ButtonBase,
  ButtonProps,
  styled,
  SxProps,
  Theme,
} from "@mui/material";
import Image from "next/image";
import { AppText } from "./AppText";
import { FileIcon, ThreeDotsIcon, TrashIcon } from "./dashboard/Svgs";

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  textTransform: "none",
  fontSize: "2.2rem",
  padding: "1.55rem 2rem",
  lineHeight: "3rem",
  color: "white",
  fontWeight: 600,
  width: "100%",
  borderRadius: "0.8rem",
  backgroundColor: theme.palette.primary.main,
  // filter: 'drop-shadow(0 5px 1rem ${theme.palette.primary.main})',
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  //@ts-ignore
  boxShadow: `0 1rem 1rem ${theme.palette.primary["50"]}`,
  "&:hover": {
    //@ts-ignore
    backgroundColor: theme.palette.primary["900"],
    //@ts-ignore
    boxShadow: `0 0.5rem 0.5rem ${theme.palette.primary["50"]}`,
  },
  // '&:active': {
  //     boxShadow: 'none',
  //     backgroundColor: '#0062cc',
  //     borderColor: '#005cbf',
  // },
  // '&:focus': {
  //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  // },
}));

export const SecondaryButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  textTransform: "none",
  fontSize: "2.2rem",
  padding: "1.55rem 2rem",
  lineHeight: "3rem",
  color: theme.palette.primary.main,
  fontWeight: 600,
  width: "100%",
  border: `0.1rem solid ${theme.palette.primary.main}`,
  borderRadius: "0.8rem",
  backgroundColor: "white",
  //@ts-ignore
  boxShadow: `0 1rem 1rem ${theme.palette.primary["100"]}`,
  "&:hover": {
    backgroundColor: "#fefefe",
    boxShadow: "0 0.5rem 0.5rem #fefefe",
  },
}));

export default Button;

export const EditButtons = (props: ButtonProps) => {
  return (
    <ButtonBase
      sx={{
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#EDF5FF",
      }}
      {...props}
    >
      <Image
        src={SVGS.edit2}
        alt="Payment icon"
        width={22}
        height={22}
        style={{
          width: "2rem",
          height: "2rem",
        }}
      />
    </ButtonBase>
  );
};

export const OptionsButtonThreeDots = (props: ButtonProps) => {
  return (
    <ButtonBase
      sx={{
        width: "3.4rem",
        height: "3.4rem",
        borderRadius: "0.6rem",
        backgroundColor: "#EDF5FF",
      }}
      {...props}
    >
      <ThreeDotsIcon />
    </ButtonBase>
  );
};

interface IconButton extends ButtonProps {
  sx?: SxProps<Theme> | undefined;
  stroke?: string;
}

export const DeleteButton = ({ stroke, sx, ...props }: IconButton) => {
  return (
    <ButtonBase
      sx={{
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#FFE6E6",
        // border: '1px solid #EDF5FF',
        ...sx,
      }}
      {...props}
    >
      <TrashIcon stroke={stroke} />
    </ButtonBase>
  );
};

export const FileButton = ({ stroke, sx, ...props }: IconButton) => {
  return (
    <ButtonBase
      sx={{
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#EDF5FF",
        border: "1px solid #EDF5FF",
        ...sx,
      }}
      {...props}
    >
      <FileIcon stroke={stroke} />
    </ButtonBase>
  );
};

interface ITabTextButton extends ButtonProps {
  sx?: SxProps<Theme> | undefined;
  isActive?: boolean;
  title: string;
  titleStyle?: SxProps<Theme> | undefined;
}

export const TabTextButton = ({
  isActive,
  title,
  sx,
  titleStyle,
  ...props
}: ITabTextButton) => {
  return (
    <ButtonBase sx={{ borderRadius: "0.6rem", ...sx }} {...props}>
      <AppText
        sx={{
          fontSize: "2.2rem",
          lineHeight: "3rem",
          fontWeight: 500,
          color: isActive ? "primary.main" : "#BBBBC7",
          padding: "1.4rem",
          ...titleStyle,
        }}
      >
        {title}
      </AppText>
    </ButtonBase>
  );
};

export const TextButton = styled(ButtonBase)(({ theme }) => ({
  padding: "1.2rem 2.4rem",
  borderRadius: "0.8rem",
  backgroundColor: theme.palette.primary.main,
  //@ts-ignore
  boxShadow: `0 0.3rem 0.3rem ${theme.palette.primary["50"]}`,
  color: "white",
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  "&:hover": {
    //@ts-ignore
    backgroundColor: theme.palette.primary["900"],
    //@ts-ignore
    boxShadow: `0 0.3rem 0.3rem ${theme.palette.primary["50"]}`,
  },
}));
