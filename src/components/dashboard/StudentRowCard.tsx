import { StudentProfile } from "@/graphql/__generatedTypes__";
import { SVGS } from "@/utils";
import { Avatar, Box, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AppText, NameHeading } from "../AppText";

type Props = {
  student: StudentProfile;
};
const StudentRowCard = ({ student }: Props) => {
  const router = useRouter();
  return (
    <Grid
      onClick={() => {
        router.push({
          pathname: "/dashboard/Student/StudentProfile",
          query: { studentId: student.id },
        });
      }}
      my={"1rem"}
      sx={{
        border: "1px solid #EBEBEB",
        boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
        padding: "1.5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box display={"flex"} alignItems={"center"} width={"17%"}>
        <Avatar
          sx={{ width: "6.6rem", height: "6.6rem", borderRadius: "0.6rem" }}
        />
        <Box mx={"1.5rem"}>
          <NameHeading noWrap sx={{}}>
            {`${student?.firstname || ""} ${student?.middlename || ""} ${
              student?.lastname || ""
            }`}
          </NameHeading>
          <AppText
            sx={{ fontWeight: 500, color: "primary.main", marginTop: "0.4rem" }}
          >
            {"#4692FE"}
          </AppText>
        </Box>
      </Box>

      <Box px={"1.5rem"} sx={{ borderLeft: "1px solid #EBEBEB", width: "20%" }}>
        <Box display={"flex"} alignItems="center" gap={"1rem"} mb={"0.6rem"}>
          <Image
            src={SVGS.sms}
            alt="icon"
            width={34}
            height={34}
            style={{
              aspectRatio: 1,
              objectFit: "contain",
              width: "2.2rem",
              height: "2.2rem",
            }}
          />
          <AppText>{"email"}</AppText>
        </Box>
        <Box display={"flex"} alignItems="center" gap={"1rem"}>
          <Image
            src={SVGS.call}
            alt="icon"
            width={34}
            height={34}
            style={{
              aspectRatio: 1,
              objectFit: "contain",
              width: "2.2rem",
              height: "2.2rem",
            }}
          />
          <AppText>{"phone"}</AppText>
        </Box>
      </Box>

      <Box width={"10%"}>
        <AppText sx={{ fontWeight: 300 }}>Nationality :</AppText>
        <AppText>{student?.country || ""}</AppText>
      </Box>

      <Box width={"10%"}>
        <AppText sx={{ fontWeight: 300 }}>Education :</AppText>
        <AppText>{student?.HighestLevelOfEducation || ""}</AppText>
      </Box>

      <Box width={"20%"}>
        <AppText sx={{ fontWeight: 300 }}>Test Information :</AppText>
        <AppText noWrap>{student?.gradeAverage || "Test Information"}</AppText>
      </Box>
      <Box width={"20%"}>
        <AppText noWrap sx={{ fontWeight: 300 }}>
          Destination Country/Cities :
        </AppText>
        <AppText noWrap>{student?.countryOfEducation || "Destination"}</AppText>
      </Box>
    </Grid>
  );
};

export default StudentRowCard;
