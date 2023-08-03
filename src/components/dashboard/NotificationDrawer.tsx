import { notifications } from "@/utils/mockData";
import { Avatar } from "@mui/material";
import moment from "moment";
import { AppText, PlaceholderText } from "../AppText";
import { DeleteButton } from "../Buttons";
import { Card, Col, NotificationDrwaerContainer, Row } from "./styled";

const NotificationDrawer = () => {
  return (
    <NotificationDrwaerContainer sx={{ padding: "2rem", gap: "2rem" }}>
      {notifications.map((item) => (
        <Card key={item.id} sx={{ width: "100%", padding: "1.5rem" }}>
          <Row sx={{ alignItems: "flex-start" }}>
            <Avatar src={item.photo} sx={{ width: "6rem", height: "6rem" }} />
            <Col sx={{ flex: 1, gap: "0.5rem", paddingRight: "2rem" }}>
              <AppText>{item.title}</AppText>
              <PlaceholderText>{item.body}</PlaceholderText>
              <PlaceholderText>
                {moment(item.date).fromNow()}&nbsp;
                {moment(item.date).format("(DD/MM/YYYY h:m)")}
              </PlaceholderText>
            </Col>
            <DeleteButton sx={{ alignSelf: "flex-start" }} />
          </Row>
        </Card>
      ))}
    </NotificationDrwaerContainer>
  );
};

export default NotificationDrawer;
