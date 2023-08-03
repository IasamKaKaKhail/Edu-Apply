import { SubtitleBanner, TitleBanner } from "@/components/AppText";
import { DeleteButton } from "@/components/Buttons";
import StatusPill from "@/components/StatusPill";
import { formatPhone } from "@/utils";
import React from "react";
import {
  AvatarBorder,
  AvatarProfile,
  Col,
  ProfileBanner,
  Row,
  VrLine,
} from "../styled";
import { PhoneIcon, SmsIcon } from "../Svgs";

interface Props {
  name: string;
  regNumber: string;
  email: string;
  phone: string;
}

const Banner = ({ email, name, phone, regNumber }: Props) => {
  return (
    <ProfileBanner sx={{ marginY: "2.5rem", paddingLeft: "20.5rem" }}>
      <AvatarProfile src="https://picsum.photos/id/237/200/300" />
      <AvatarBorder />
      <Row sx={{ flex: 1, paddingRight: "2.5rem" }}>
        <Col sx={{ flex: 1, gap: 0 }}>
          <TitleBanner>
            {name} | #{regNumber}
          </TitleBanner>
          <Row>
            <SmsIcon stroke="#fff" />
            <SubtitleBanner>{email}</SubtitleBanner>
            <VrLine sx={{ marginLeft: "2rem", marginRight: "2rem" }} />
            <PhoneIcon stroke="#fff" />
            <SubtitleBanner>{formatPhone(phone)}</SubtitleBanner>
            <VrLine sx={{ marginLeft: "2rem", marginRight: "2rem" }} />
            <StatusPill status="New Lead" />
          </Row>
        </Col>
        <DeleteButton />
      </Row>
    </ProfileBanner>
  );
};

export default Banner;
