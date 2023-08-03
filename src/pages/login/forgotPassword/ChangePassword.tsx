import { SubTitle, TitleText } from "@/components";
import { ChangePasswordForm } from "@/components/forms";
import { AuthLayout } from "@/components/layout";
import React, { Fragment, ReactElement } from "react";

const Page = () => {
  return (
    <Fragment>
      <TitleText>Change password</TitleText>
      <SubTitle maxWidth={"70%"} mt={"1rem"} mb={"5rem"}>
        While creating new password, you can‘t use one of your old password.
      </SubTitle>
      <ChangePasswordForm />
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page;
