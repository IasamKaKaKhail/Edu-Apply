import { DashboardTickers, EnrollmentGraph, RevenueGraph } from "@/components";
import { AdminLayout } from "@/components/layout";
import { Grid } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import List from "@/components/List";
import { GET_EVENTS } from "@/graphql";
import { useQuery } from "@apollo/client";

const Page: NextPageWithLayout = () => {
  //otherFuncationsStartHere

  const isWeekend = (date: Dayjs) => {
    const day = date.day();

    return day === 0 || day === 6;
  };

  const date = dayjs(`${new Date()}`);

  // const listArray = [
  //   {
  //     name: "Webinar",
  //     timeStart: "11:00 - 12:00",
  //     date: "08 / 09 / 2022",
  //   },
  //   {
  //     name: "Open Days Event",
  //     timeStart: "11:00 - 12:00",
  //     date: "08 / 09 / 2022",
  //   },
  //   {
  //     name: "Skill Development",
  //     timeStart: "11:00 - 12:00",
  //     date: "08 / 09 / 2022",
  //   },
  //   {
  //     name: "Paper Testing",
  //     timeStart: "11:00 - 12:00",
  //     date: "08 / 09 / 2022",
  //   },
  // ];

  //otherFunctionEndsHere

  //statesStartHere

  const [value, setValue] = React.useState<Dayjs | null>(date);

  //statesEndsHere

  //queriesStartHere

  const { data, refetch } = useQuery(GET_EVENTS);
  console.log("Date=====>", data?.getEvents);

  //queriesEndHere

  //funcationsStartHere
  useEffect(() => {
    if (value) {
      refetch({
        userDate: new Date(`${value}`),
      });
    }
  }, [value]);

  //funcationEndsHere
  return (
    <Grid container p={"2.5rem"}>
      <Grid xs={12}>
        <DashboardTickers />
      </Grid>
      <Grid container xs={12} columnGap={"2.5rem"}>
        <Grid container xs={8} rowGap={"2.5rem"}>
          <Grid xs={12}>
            <EnrollmentGraph />
          </Grid>
          <Grid xs={12}>
            <RevenueGraph />
          </Grid>
        </Grid>
        <Grid
          xs
          sx={{
            border: "1px solid #EBEBEB",
            boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
            borderRadius: "0.6rem",
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="year"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                  setValue(newValue);
                  console.log("Date=====>", newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid
            xs={12}
            sx={{
              paddingRight: "2rem",
              paddingLeft: "2em",
            }}
          >
            <hr></hr>
          </Grid>
          {data && <List listArray={data?.getEvents} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
