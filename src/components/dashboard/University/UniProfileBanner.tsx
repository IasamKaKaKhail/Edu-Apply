import { SubtitleBanner, TitleBanner } from "@/components/AppText";
import { DeleteButton } from "@/components/Buttons";
import { Box } from "@mui/material";
import {
  AvatarBorder,
  AvatarProfile,
  Col,
  ProfileBanner,
  Row,
  UniTypeIconWrapper,
  VrLine,
} from "../styled";
import {
  BalanceSvgIcon,
  DoctorSvgIcon,
  EngineerSvgIcon,
  LocationIcon,
  SmsIcon,
} from "../Svgs";

interface Props {
  name: string;
  address: string;
  email: string;
  avatar: string;
}

const UniProfileBanner = ({ name, address, email }: Props) => {
  return (
    <ProfileBanner
      sx={{
        marginTop: "4.5rem",
        marginBottom: "2.4rem",
        paddingLeft: "20.5rem",
      }}
    >
      <AvatarProfile
        sx={{ top: "-3.5rem" }}
        src={"https://picsum.photos/id/237/200/300"}
      />
      <AvatarBorder sx={{ top: "-3.5rem" }} />
      <Row sx={{ flex: 1, paddingRight: "2.5rem" }}>
        <Col sx={{ flex: 1, gap: 0 }}>
          <TitleBanner>{name}</TitleBanner>
          <Row>
            <LocationIcon />
            <SubtitleBanner>{address}</SubtitleBanner>
            <VrLine sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
            <SmsIcon stroke="#fff" />
            <SubtitleBanner>{email}</SubtitleBanner>
          </Row>
        </Col>
        <DeleteButton sx={{ alignSelf: "flex-end" }} />
      </Row>
      <Box
        sx={{
          position: "absolute",
          right: "2.4rem",
          top: "-3.7rem",
          display: "flex",
          gap: "1.4rem",
        }}
      >
        <UniTypeIconWrapper>
          <DoctorSvgIcon />
        </UniTypeIconWrapper>
        <UniTypeIconWrapper>
          <EngineerSvgIcon />
        </UniTypeIconWrapper>
        <UniTypeIconWrapper>
          <BalanceSvgIcon />
        </UniTypeIconWrapper>
      </Box>
    </ProfileBanner>
  );
};

export default UniProfileBanner;
