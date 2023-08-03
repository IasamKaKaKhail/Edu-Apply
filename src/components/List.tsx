import { Grid } from "@mui/material";
import React from "react";
import { AppButton } from ".";
import { SubHeading, SubTitle, AppText } from "./AppText";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import moment from "moment";

interface ListProps {
  listArray: any[];
}

function List(props: ListProps) {
  const { listArray } = props;

  return (
    <>
      <Grid
        xs={12}
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingRight: "2rem",
          paddingLeft: "2em",
        }}
      >
        <Grid xs={8} item>
          <SubHeading
            sx={{
              fontSize: "2.6rem",
              lineHeight: "3.5rem",
            }}
          >
            Upcoming Events
          </SubHeading>
        </Grid>
        <Grid xs item>
          <AppButton type="submit" sx={{}}>
            Add Event
          </AppButton>
        </Grid>
      </Grid>

      {listArray?.map((item: any, index: any) => (
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "2rem",
            marginTop: "4.8rem",
            paddingBottom: "2rem",
          }}
          key={index}
        >
          <Brightness1Icon sx={{ color: "#4692FE", fontSize: 12 }} />
          <Grid
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <SubTitle sx={{ color: "#111111", fontSize: "1.6rem" }}>
              {item.name}
            </SubTitle>
            <AppText sx={{ fontSize: "1.4rem", color: "#BBBBC7" }}>
              {moment(item.date).format("LT")} |{" "}
              {moment(item.date).format("DD/MM/YYYY")}
            </AppText>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default List;
