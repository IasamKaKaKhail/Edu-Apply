import {
  AppText,
  DeleteButton,
  FileButton,
  NameHeading,
  PlaceholderText,
  SubHeading,
} from "@/components";
import AppModal from "@/components/AppModal";
import {
  BadgeIconStyles,
  BorderBoxView,
  IconStyles,
  SettingsPageContainer,
} from "@/components/dashboard/styled";
import { ChangePasswordFromSettings } from "@/components/forms";
import { AdminLayout } from "@/components/layout";
import SettingsSubLayout from "@/components/layout/SettingsSubLayout";
import { SVGS } from "@/utils";
import { Avatar, Badge, Box, ButtonBase, Grid } from "@mui/material";
import Image from "next/image";
import React, { Fragment, ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [changeProfilePhotoModal, setChangeProfilePhotoModal] = useState(false);
  return (
    <Fragment>
      <SettingsPageContainer container>
        <Grid p={"2rem"} sx={{ borderBottom: "1px solid #EBEBEB" }}>
          <SubHeading>Account Method</SubHeading>
          <PlaceholderText>
            Update your Profile Picture and Account Password.
          </PlaceholderText>
        </Grid>
        <Grid paddingTop={"3.5rem"}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <ButtonBase
                  sx={{ borderRadius: "0.8rem", overflow: "hidden" }}
                  onClick={() => setChangeProfilePhotoModal(true)}
                >
                  <Image
                    src={SVGS.edit}
                    alt="edit profile photo"
                    width={34}
                    height={34}
                    style={BadgeIconStyles}
                  />
                </ButtonBase>
              }
            >
              <Avatar
                src={"../../../public/static/images/dummyProfile.png"}
                sx={{ width: "12rem", height: "12rem" }}
              />
            </Badge>
          </Grid>

          {/* row */}
          <Grid container mt={"2.5rem"}>
            <Grid
              item
              xs={6}
              display={"flex"}
              justifyContent={"flex-end"}
              paddingX={"2rem"}
            >
              <Box>
                <AppText sx={{ fontSize: "1.8rem" }}>First Name</AppText>
                <BorderBoxView>
                  <Image
                    src={SVGS.profile}
                    alt="edit profile photo"
                    width={34}
                    height={34}
                    style={IconStyles}
                  />
                  <PlaceholderText
                    textAlign={"center"}
                    sx={{ fontSize: "1.6rem", lineHeight: "2.2rem" }}
                  >
                    Devid
                  </PlaceholderText>
                </BorderBoxView>
              </Box>
            </Grid>

            <Grid item xs={6} paddingX={"2rem"}>
              <Box>
                <AppText sx={{ fontSize: "1.8rem" }}>Last Name</AppText>
                <BorderBoxView>
                  <Image
                    src={SVGS.profile}
                    alt="edit profile photo"
                    width={34}
                    height={34}
                    style={IconStyles}
                  />
                  <PlaceholderText
                    textAlign={"center"}
                    sx={{ fontSize: "1.6rem", lineHeight: "2.2rem" }}
                  >
                    Smith
                  </PlaceholderText>
                </BorderBoxView>
              </Box>
            </Grid>
          </Grid>

          {/* row */}
          <Grid container mt={"2.5rem"}>
            <Grid
              item
              xs={6}
              display={"flex"}
              justifyContent={"flex-end"}
              paddingX={"2rem"}
            >
              <Box>
                <AppText sx={{ fontSize: "1.8rem" }}>Email Id</AppText>
                <BorderBoxView>
                  <Image
                    src={SVGS.sms}
                    alt="edit profile photo"
                    width={34}
                    height={34}
                    style={IconStyles}
                  />
                  <PlaceholderText
                    textAlign={"center"}
                    sx={{ fontSize: "1.6rem", lineHeight: "2.2rem" }}
                  >
                    devidsmith9@gmail.com
                  </PlaceholderText>
                </BorderBoxView>
              </Box>
            </Grid>

            <Grid item xs={6} paddingX={"2rem"}>
              <Box>
                <AppText sx={{ fontSize: "1.8rem" }}>Phone Number</AppText>
                <BorderBoxView>
                  <Image
                    src={SVGS.call}
                    alt="edit profile photo"
                    width={34}
                    height={34}
                    style={IconStyles}
                  />
                  <PlaceholderText
                    textAlign={"center"}
                    sx={{ fontSize: "1.6rem", lineHeight: "2.2rem" }}
                  >
                    + 91 2635 265 3975
                  </PlaceholderText>
                </BorderBoxView>
              </Box>
            </Grid>
          </Grid>

          {/* row */}
          <Grid container mt={"2.5rem"}>
            <Grid
              item
              xs={6}
              display={"flex"}
              justifyContent={"flex-end"}
              paddingX={"2rem"}
            >
              <Box>
                <AppText sx={{ fontSize: "1.8rem" }}>Password</AppText>
                <BorderBoxView onClick={() => setChangePasswordModal(true)}>
                  <Image
                    src={SVGS.profile}
                    alt="edit profile photo"
                    width={34}
                    height={34}
                    style={IconStyles}
                  />
                  <PlaceholderText
                    sx={{
                      fontSize: "1.6rem",
                      lineHeight: "2.2rem",
                      flex: 1,
                      textAlign: "start",
                    }}
                  >
                    * * * * * * * *
                  </PlaceholderText>
                  <Image
                    src={SVGS.eye}
                    alt="edit profile photo"
                    width={34}
                    height={34}
                    style={IconStyles}
                  />
                </BorderBoxView>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </SettingsPageContainer>

      <AppModal
        open={changePasswordModal}
        close={setChangePasswordModal}
        title="Change Password"
      >
        <Box p={"2.5rem"} pt={"2rem"}>
          <ChangePasswordFromSettings
            onPressCancel={() => setChangePasswordModal(false)}
            onPressSave={() => setChangePasswordModal(false)}
          />
        </Box>
      </AppModal>

      <AppModal
        open={changeProfilePhotoModal}
        close={setChangeProfilePhotoModal}
        title="Photo"
      >
        <Box p={"2.5rem"} pt={"2rem"}>
          <Box display={"flex"} alignItems={"center"} gap={"1.5rem"}>
            <FileButton sx={{ borderRadius: "10rem" }} />
            <NameHeading>Choose New Photo From File Manager</NameHeading>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"1.5rem"}
            mt={"2.5rem"}
          >
            <DeleteButton sx={{ borderRadius: "10rem" }} />
            <NameHeading>Remove Photo</NameHeading>
          </Box>
        </Box>
      </AppModal>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <SettingsSubLayout>{page}</SettingsSubLayout>
    </AdminLayout>
  );
};

export default Page;
