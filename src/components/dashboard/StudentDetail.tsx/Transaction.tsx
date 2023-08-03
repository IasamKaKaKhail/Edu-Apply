import { PageTitleText } from "@/components/AppText";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { Row } from "../styled";
import { BulletDrop } from "../Svgs";
import PreferenceInfo from "./PreferencesInfo";

const Transaction = () => {
  return (
    <Fragment>
      <Row sx={{ alignSelf: "start", marginBottom: "1.5rem" }}>
        <BulletDrop />
        <PageTitleText sx={{ color: "#111", marginLeft: "0.5rem" }}>
          Transaction
        </PageTitleText>
      </Row>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          rowGap: "2.5rem",
          marginLeft: "3rem",
        }}
      >
        <PreferenceInfo
          field="Name of University: "
          value="Fielding Graduate University"
        />

        <PreferenceInfo field="Program: " value="Engineering" />

        <PreferenceInfo field="Transaction ID: " value="365894663" />

        <PreferenceInfo field="Payment date: " value="20/09/2023" />

        <PreferenceInfo field="Application fee: " value="00.00 $" />

        <PreferenceInfo field="Tuition Fee: " value="21.000 $" />

        <PreferenceInfo field="Payment method " value="UPI" />

        <PreferenceInfo field="Status: " value="Complete" />
      </Box>
    </Fragment>
  );
};

export default Transaction;
