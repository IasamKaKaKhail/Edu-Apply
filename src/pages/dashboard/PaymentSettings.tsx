import {
  AppText,
  DeleteButton,
  EditButtons,
  InfoTagText,
  PlaceholderText,
  SubHeading,
  Switch,
} from "@/components";
import AddIcon from "@/components/dashboard/AddIcon";
import {
  BankDetailWrapper,
  BankInfoWrapper,
  PaymentCardEditView,
  PaymentCardsContainer,
  PaymentCardsWrapper,
  PaymentToggleView,
  SettingsPageContainer,
  SettingsPageHeaderWrapper,
} from "@/components/dashboard/styled";
import { AdminLayout } from "@/components/layout";
import SettingsSubLayout from "@/components/layout/SettingsSubLayout";
import { IMAGES } from "@/utils";
import { Box, ButtonBase, Grid } from "@mui/material";
import Image from "next/image";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <SettingsPageContainer container>
      <Grid p={"2rem"} sx={{ borderBottom: "1px solid #EBEBEB" }}>
        <SubHeading>Payment Method</SubHeading>
        <PlaceholderText>Update your banking details.</PlaceholderText>
      </Grid>
      <SettingsPageHeaderWrapper>
        <AppText sx={{ fontSize: "2rem", fontWeight: 500 }}>
          Card Details
        </AppText>
        <ButtonBase sx={{ padding: "1rem", borderRadius: "1rem" }}>
          <AddIcon />
          <AppText sx={{ color: "primary.main", fontWeight: 500 }}>
            &nbsp;Add a new card
          </AppText>
        </ButtonBase>
      </SettingsPageHeaderWrapper>

      <PaymentCardsContainer>
        <PaymentCardsWrapper>
          <Image
            src={IMAGES.paymentVisa}
            alt="Payment icon"
            width={69}
            height={22}
            style={{
              width: "6.9rem",
              height: "2.2rem",
            }}
          />
          <Box>
            <AppText sx={{ fontWeight: 500, marginBottom: "0.2rem" }}>
              **** **** 1234
            </AppText>
            <AppText sx={{ fontSize: "1.6rem" }}>Expiry: 06/2024</AppText>
          </Box>
        </PaymentCardsWrapper>

        <Box>
          <PaymentToggleView>
            <AppText sx={{ color: "primary.main" }}>Active</AppText>
            <Switch sx={{ m: 1 }} defaultChecked />
          </PaymentToggleView>
          <PaymentCardEditView>
            <EditButtons />
            <DeleteButton />
          </PaymentCardEditView>
        </Box>
      </PaymentCardsContainer>

      <PaymentCardsContainer>
        <PaymentCardsWrapper>
          <Image
            src={IMAGES.paymentMasterCard}
            alt="Payment icon"
            width={69}
            height={44}
            style={{
              width: "6.9rem",
              height: "4.4rem",
            }}
          />
          <Box>
            <AppText sx={{ fontWeight: 500, marginBottom: "0.2rem" }}>
              **** **** 1234
            </AppText>
            <AppText sx={{ fontSize: "1.6rem" }}>Expiry: 06/2024</AppText>
          </Box>
        </PaymentCardsWrapper>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.2rem",
            }}
          >
            <AppText sx={{ color: "primary.main" }}>Active</AppText>
            <Switch sx={{ m: 1 }} defaultChecked />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <EditButtons />
            <DeleteButton />
          </Box>
        </Box>
      </PaymentCardsContainer>

      <SettingsPageHeaderWrapper>
        <AppText sx={{ fontSize: "2rem", fontWeight: 500 }}>
          Bank Details
        </AppText>
        <ButtonBase sx={{ padding: "1rem", borderRadius: "1rem" }}>
          <AddIcon />
          <AppText sx={{ color: "primary.main", fontWeight: 500 }}>
            &nbsp;Add a new Bank
          </AppText>
        </ButtonBase>
      </SettingsPageHeaderWrapper>

      <BankDetailWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Image
            src={IMAGES.paymentSbi}
            alt="Payment icon"
            width={60}
            height={60}
            style={{
              width: "6rem",
              height: "6rem",
            }}
          />

          <Box>
            <AppText sx={{ fontWeight: 500, marginBottom: "0.2rem" }}>
              State Bank of India
            </AppText>

            <BankInfoWrapper>
              <Box sx={{ width: "26.5rem" }}>
                <PlaceholderText
                  sx={{ marginTop: "2rem", marginBottom: "0.6rem" }}
                >
                  Bank Name:
                </PlaceholderText>
                <InfoTagText>State Bank of India</InfoTagText>
              </Box>

              <Box sx={{ width: "26.5rem" }}>
                <PlaceholderText
                  sx={{ marginTop: "2rem", marginBottom: "0.6rem" }}
                >
                  Bank Address :
                </PlaceholderText>
                <InfoTagText>
                  11-C, Mittal Towers, M.G. Road, Bangalore,Karnataka
                </InfoTagText>
              </Box>

              <Box sx={{ width: "26.5rem" }}>
                <PlaceholderText
                  sx={{ marginTop: "2rem", marginBottom: "0.6rem" }}
                >
                  Account Holder Name :
                </PlaceholderText>
                <InfoTagText>John Srof</InfoTagText>
              </Box>

              <Box sx={{ width: "26.5rem" }}>
                <PlaceholderText
                  sx={{ marginTop: "2rem", marginBottom: "0.6rem" }}
                >
                  Account Number :
                </PlaceholderText>
                <InfoTagText>4523987120</InfoTagText>
              </Box>

              <Box sx={{ width: "26.5rem" }}>
                <PlaceholderText
                  sx={{ marginTop: "2rem", marginBottom: "0.6rem" }}
                >
                  Swift Code :
                </PlaceholderText>
                <InfoTagText>#46d4g64</InfoTagText>
              </Box>

              <Box sx={{ width: "26.5rem" }}>
                <PlaceholderText
                  sx={{ marginTop: "2rem", marginBottom: "0.6rem" }}
                >
                  IBAN Number :
                </PlaceholderText>
                <InfoTagText>#46d4g64</InfoTagText>
              </Box>

              <Box sx={{ width: "26.5rem" }}>
                <PlaceholderText
                  sx={{ marginTop: "2rem", marginBottom: "0.6rem" }}
                >
                  Transit Number :
                </PlaceholderText>
                <InfoTagText>5458435</InfoTagText>
              </Box>
            </BankInfoWrapper>
          </Box>
        </Box>

        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <EditButtons />
            <DeleteButton />
          </Box>
        </Box>
      </BankDetailWrapper>
    </SettingsPageContainer>
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
