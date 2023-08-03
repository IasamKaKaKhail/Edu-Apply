import { AppText, NameHeading, PageTitleText } from "@/components/AppText";
import { InputOutlined } from "@/components/Input";
import { useState } from "react";
import { Card, Row } from "../styled";
import { BulletDrop } from "../Svgs";
import RatingStars from "./RatingStars";

const placeholderMessage =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consectetur cursus sed placerat nunc, libero, mattis. Aliquam a justo, orci turpis integer eleifend facilisis ut viverra. Mauris, nunc maecenas tincidunt vulputate aliquam sit feugiat. Quis adipiscing mattis blandit tortor quis volutpat. Eu odio rutrum nulla eu sit ac nec sapien. ";

const AgentReviewCard = () => {
  const [rating, setRating] = useState(3); //todo--> rating repositories
  return (
    <Card sx={{ flex: 0.675 }}>
      <Row sx={{ alignSelf: "start" }}>
        <BulletDrop />
        <PageTitleText sx={{ color: "#111", marginLeft: "0.5rem" }}>
          Your Review
        </PageTitleText>
      </Row>
      <AppText sx={{ marginY: "1.6rem" }}>
        Make an account & create Management System in less than a minute & give
        your Customres a better booking platform
      </AppText>
      <NameHeading>Rating</NameHeading>
      <RatingStars
        onClick={(e) => setRating(e)}
        rating={rating}
        sx={{ marginY: "1.5rem" }}
      />
      <NameHeading>Message/Suggestion</NameHeading>
      <InputOutlined
        id="Message"
        name="Message"
        placeholder={placeholderMessage}
        type={"text"}
        multiline
        rows={6}
        sx={{ marginTop: "2.4rem" }}
        inputStyles={{
          backgroundColor: "#F5F7F9",
          border: "1px solid #F5F7F9",
        }}
      />
    </Card>
  );
};

export default AgentReviewCard;
