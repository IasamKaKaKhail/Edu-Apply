import { Grid } from "@mui/material";
import { IMAGES } from "@/utils";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AppText, TitleText } from "../AppText";
import { VerticalSeperator } from "./Seperator";
import { GridBalanceTicker, TickerIconWrapper } from "./styled";
import { TickerAgentIcon, TickerBuildingIcon, TickerStudentIcon } from "./Svgs";

const DashboardTickers = () => {
  return (
    <Grid container columnGap={"2rem"} marginBottom={"2.5rem"}>
      <GridBalanceTicker xs>
        <Box
          zIndex={99}
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          height={"100%"}
          justifyContent={"space-around"}
        >
          <TitleText
            sx={{ color: "white", fontSize: "3.5rem", lineHeight: "4.7rem" }}
          >{`$ 44,750.00`}</TitleText>
          <Box display={"flex"} flexWrap={"nowrap"}>
            <AppText sx={{ color: "white", fontSize: "1.8rem" }}>
              Total Balance
            </AppText>
            <AppText sx={{ color: "white", fontSize: "1.4rem" }}>
              &nbsp;|&nbsp;(Current Month )
            </AppText>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "11rem",
            height: "11rem",
            right: "2rem",
          }}
        >
          <Image
            src={IMAGES.computerGuyWink}
            alt="computer-guy-wink"
            fill
            style={{
              aspectRatio: 1,
              objectFit: "scale-down",
              position: "absolute",
              right: "1px",
            }}
          />
        </Box>
      </GridBalanceTicker>

      <Grid
        xs
        sx={{
          borderRadius: "0.8rem",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
        }}
      >
        <TickerIconWrapper>
          <TickerAgentIcon transform={"scale(0.75)"} />
        </TickerIconWrapper>
        <VerticalSeperator />
        <Box
          zIndex={99}
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          height={"100%"}
          justifyContent={"space-around"}
        >
          <Box display={"flex"} flexWrap={"nowrap"}>
            <AppText sx={{ fontSize: "1.8rem" }}>Total Agent&nbsp;</AppText>
            <AppText sx={{ fontSize: "1.4rem", color: "#BBBBC7" }}>
              &nbsp;|&nbsp;(Current Month )
            </AppText>
          </Box>
          <TitleText
            sx={{ fontSize: "3rem", lineHeight: "4.7rem" }}
          >{`50`}</TitleText>
        </Box>
      </Grid>

      <Grid
        xs
        sx={{
          borderRadius: "0.8rem",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
        }}
      >
        <TickerIconWrapper>
          <TickerStudentIcon transform={"scale(0.75)"} />
        </TickerIconWrapper>
        <VerticalSeperator />
        <Box
          zIndex={99}
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          height={"100%"}
          justifyContent={"space-around"}
        >
          <Box display={"flex"} flexWrap={"nowrap"}>
            <AppText sx={{ fontSize: "1.8rem" }}>Total Student&nbsp;</AppText>
            <AppText sx={{ fontSize: "1.4rem", color: "#BBBBC7" }}>
              &nbsp;|&nbsp;(Current Month )
            </AppText>
          </Box>
          <TitleText
            sx={{ fontSize: "3rem", lineHeight: "4.7rem" }}
          >{`400`}</TitleText>
        </Box>
      </Grid>

      <Grid
        xs
        sx={{
          borderRadius: "0.8rem",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
        }}
      >
        <TickerIconWrapper>
          <TickerBuildingIcon transform={"scale(0.75)"} />
        </TickerIconWrapper>
        <VerticalSeperator />
        <Box
          zIndex={99}
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          height={"100%"}
          justifyContent={"space-around"}
        >
          <Box display={"flex"} flexWrap={"nowrap"}>
            <AppText sx={{ fontSize: "1.8rem" }}>
              Total University&nbsp;
            </AppText>
            <AppText sx={{ fontSize: "1.4rem", color: "#BBBBC7" }}>
              &nbsp;|&nbsp;(Current Month )
            </AppText>
          </Box>
          <TitleText
            sx={{ fontSize: "3rem", lineHeight: "4.7rem" }}
          >{`20`}</TitleText>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardTickers;
