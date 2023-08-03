import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { AppText } from "../AppText";
import { DeleteButton, EditButtons, OptionsButtonThreeDots } from "../Buttons";
import { Row } from "./styled";

interface Props {
  onClickDelete?: () => void;
  onClickUpdate?: () => void;
}

export default function EditRecordButton({
  onClickDelete,
  onClickUpdate,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };
  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClickDelete && onClickDelete();
    setAnchorEl(null);
  };
  const handleUpdate = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClickUpdate && onClickUpdate();
    setAnchorEl(null);
  };

  return (
    <div>
      <OptionsButtonThreeDots
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleDelete}>
          <Row sx={{ gap: "1.4rem" }}>
            <DeleteButton />
            <AppText>Delete</AppText>
          </Row>
        </MenuItem>
        <MenuItem onClick={handleUpdate}>
          <Row sx={{ gap: "1.4rem" }}>
            <EditButtons />
            <AppText>Edit</AppText>
          </Row>
        </MenuItem>
      </Menu>
    </div>
  );
}
