import { TextButton } from "@/components";
import { AppText, NameHeading } from "@/components/AppText";
import { Avatar, Box, SxProps, Theme } from "@mui/material";
import { useRouter } from "next/router";
import { BulletsBlueDot, Card, Col, Row } from "../styled";

type Props = {
  avatar: string;
  tution: number;
  applicationFee: number;
  availableIntake: number;
  studyOptions: number;
  type: string;
  industry: string;
  sx?: SxProps<Theme> | undefined;
};

const CourseCard = ({
  avatar,
  tution,
  applicationFee,
  availableIntake,
  type,
  industry,
  studyOptions = 0,
  sx,
}: Props) => {
  const router = useRouter();
  return (
    <Card sx={sx}>
      <Row sx={{ gap: "2rem" }}>
        <Avatar
          sx={{ width: "6rem", height: "6rem", borderRadius: "0.6rem" }}
          src={avatar}
        />
        <Col sx={{ gap: 0 }}>
          <AppText sx={{ fontSize: "1.6rem" }}>{type}</AppText>
          <NameHeading>{industry}</NameHeading>
        </Col>
      </Row>
      <Row mb={"2.4rem"} mt={"1.4rem"}>
        <Box display={"flex"} alignItems={"center"} gap={"0.6rem"}>
          <BulletsBlueDot sx={{ backgroundColor: "#BBBBC7" }} />
          <AppText sx={{ fontSize: "1.6rem", color: "#BBBBC7" }}>
            {availableIntake} Available Inkaes
          </AppText>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"0.6rem"}>
          <BulletsBlueDot sx={{ backgroundColor: "#BBBBC7" }} />
          <AppText sx={{ fontSize: "1.6rem", color: "#BBBBC7" }}>
            {studyOptions || ""} Available Study Options
          </AppText>
        </Box>
      </Row>
      <Row justifyContent={"space-between"} alignItems={"flex-start"}>
        <Col>
          <AppText>Tuition :</AppText>
          <AppText>${tution.toLocaleString()}</AppText>
        </Col>
        <Col>
          <AppText>Application fee :</AppText>
          <AppText>${applicationFee.toLocaleString()}</AppText>
        </Col>
        <TextButton
          onClick={() => {
            router.push({
              pathname: "/dashboard/University/CourseDetail",
              query: { courseId: "courseIdGoes1234" },
            });
          }}
        >
          Learn More
        </TextButton>
      </Row>
    </Card>
  );
};

export default CourseCard;
