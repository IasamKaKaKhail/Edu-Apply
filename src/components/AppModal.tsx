import { SVGS } from "@/utils";
import { Box, ButtonBase, Modal } from "@mui/material";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { SubHeading } from "./AppText";

type Props = {
  open: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
};

const AppModal = ({
  open,
  close,
  children,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <Modal
      open={open}
      onClose={() => close(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "55rem",
          bgcolor: "white",
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
          borderRadius: "0.8rem",
        }}
      >
        {title && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #EBEBEB",
            }}
          >
            <SubHeading
              sx={{
                padding: "2.5rem",
                paddingBottom: "2rem",
                color: "primary.main",
              }}
            >
              Change Password
            </SubHeading>

            <ButtonBase
              sx={{
                padding: "2.5rem",
                paddingBottom: "2rem",
              }}
              onClick={() => close(false)}
            >
              <Image
                src={SVGS.closeIcon}
                alt="close"
                width={24}
                height={24}
                style={{
                  aspectRatio: 1,
                  objectFit: "contain",
                  width: "2.4rem",
                  height: "2.4rem",
                }}
              />
            </ButtonBase>
          </Box>
        )}
        <>{children}</>
      </Box>
    </Modal>
  );
};

export default AppModal;
