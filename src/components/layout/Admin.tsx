import useGetTitle from "@/hooks/useGetTitle";
import React, { ReactElement } from "react";
import { SubHeading, TitleText } from "../AppText";
import { HeaderMenuAdmin, SideBarMenuAdmin } from "../dashboard";
import { AdminLayoutContainer, Header, Main, SideBar } from "./styled";

type Props = {
  children: ReactElement;
};

const AdminLayout = ({ children }: Props) => {
  const title = useGetTitle();
  return (
    <AdminLayoutContainer>
      <SideBar>
        <TitleText>Logo</TitleText>
        <SideBarMenuAdmin />
      </SideBar>
      <Header>
        <SubHeading sx={{ fontSize: "2.6rem", lineHeight: "3.5rem" }}>
          {title}
        </SubHeading>
        <HeaderMenuAdmin />
      </Header>
      <Main>{children}</Main>
    </AdminLayoutContainer>
  );
};

export default AdminLayout;
