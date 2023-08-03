import {
  AppButton,
  AppText,
  InputOutlined,
  NameHeading,
  PageTitleText,
  SecondaryButton,
  Select,
} from "@/components";
import { HrLine } from "@/components/dashboard/styled";
import {
  editAgentInitialValues,
  editAgentValidateSchema,
} from "@/components/forms/yupSchema";
import { AdminLayout } from "@/components/layout";
import { EditAgentInput } from "@/graphql/__generatedTypes__";
import { useAgent } from "@/hooks";
import { countries } from "@/utils";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { agentId } = router.query as { agentId: string };
  const { editAgent } = useAgent();

  const submitEditAgent = async (editAgentInput: EditAgentInput) => {
    try {
      const res = await editAgent({ agentId, editAgentInput });
      if (res) router.back();
    } catch (error) {
      console.log("error edit agent", error);
    }
  };

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: editAgentInitialValues,
    validationSchema: editAgentValidateSchema,
    onSubmit: (values) => submitEditAgent(values),
  });

  return (
    <Box padding={"2.5rem"} minWidth={"100rem"}>
      <Box>
        <PageTitleText>Edit Agent</PageTitleText>
      </Box>
      <Box
        sx={{
          boxShadow: "0px 2px 15px 0px #0000000F",
          border: "1px solid #EBEBEB",
          borderRadius: "0.8rem",
          minHeight: "calc(100vh - 18rem)",
          paddingBottom: "2.4rem",
        }}
      >
        <form noValidate onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: "2.5rem",
              padding: "2.5rem",
              rowGap: "1.5rem",
            }}
          >
            <NameHeading sx={{ gridColumn: "span 3" }}>
              Basic Details
            </NameHeading>
            <InputOutlined
              touched={touched.name}
              errorText={errors.name}
              value={values.name}
              id="name"
              name="name"
              title={"Name"}
              placeholder="Name"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputOutlined
              touched={touched.phone}
              errorText={errors.phone}
              value={values.phone}
              id="phone"
              name="phone"
              title={"Phone"}
              placeholder="Phone"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.designation}
              errorText={errors.designation}
              value={values.designation}
              id="designation"
              name="designation"
              title={"Designation"}
              placeholder="Designation"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.department}
              errorText={errors.department}
              value={values.department}
              id="department"
              name="department"
              title={"Department"}
              placeholder="Department"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.dob}
              errorText={errors.dob}
              title={"Birth Date"}
              id="dob"
              type={"date"}
              value={values.dob}
              name="dob"
              onBlur={handleBlur}
              placeholder="Date of Birth"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.education}
              errorText={errors.education}
              value={values.education}
              id="education"
              name="education"
              title={"Education"}
              placeholder="Education"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.website}
              errorText={errors.website}
              value={values.website}
              id="website"
              name="website"
              title={"Website"}
              placeholder="Website"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Box>
              <AppText
                mb={"1rem"}
                sx={{
                  fontSize: "1.8rem",
                  fontWeight: 400,
                }}
              >
                Gender
              </AppText>
              <RadioGroup
                row
                name="gender"
                id="gender"
                onBlur={handleBlur}
                aria-labelledby="select-gender"
                value={values.gender}
                onChange={handleChange}
                sx={{ paddingTop: "0.5rem" }}
              >
                <FormControlLabel
                  sx={{
                    color:
                      values.gender === "female" ? "primary.main" : "#A0A0A0",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                  }}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  sx={{
                    color:
                      values.gender === "male" ? "primary.main" : "#A0A0A0",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                  }}
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </Box>

            <Select
              title={"Active Agency At"}
              placeholder="Active Agenct At"
              options={countries}
              value={values.acitveAgencyAt}
              onChange={(e) => setFieldValue("acitveAgencyAt", e.target.value)}
              id="acitveAgencyAt"
              name="acitveAgencyAt"
              // touched={touched.citizenship}
              onBlur={handleBlur}
            />

            <HrLine
              style={{
                gridColumn: "span 3",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />

            <InputOutlined
              touched={touched.street}
              errorText={errors.street}
              value={values.street}
              id="street"
              name="street"
              title={"Street"}
              placeholder="Street"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputOutlined
              touched={touched.city}
              errorText={errors.city}
              value={values.city}
              id="city"
              name="city"
              title={"City"}
              placeholder="City"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.state}
              errorText={errors.state}
              value={values.state}
              id="state"
              name="state"
              title={"State"}
              placeholder="State"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.country}
              errorText={errors.country}
              title={"Country"}
              id="country"
              type={"text"}
              value={values.country}
              name="country"
              onBlur={handleBlur}
              placeholder="Country"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.postalCode}
              errorText={errors.postalCode}
              title={"Postal Code"}
              id="postalCode"
              type={"text"}
              value={values.postalCode}
              name="postalCode"
              onBlur={handleBlur}
              placeholder="Postal Code"
              onChange={handleChange}
            />

            <HrLine
              style={{
                gridColumn: "span 3",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />

            <NameHeading sx={{ gridColumn: "span 3" }}>
              Bank Details
            </NameHeading>

            <InputOutlined
              touched={touched.bankName}
              errorText={errors.bankName}
              value={values.bankName}
              id="bankName"
              name="bankName"
              title={"Bank Name"}
              placeholder="Bank Name"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.accountHolderName}
              errorText={errors.accountHolderName}
              value={values.accountHolderName}
              id="accountHolderName"
              name="accountHolderName"
              title={"Account Holder Name"}
              placeholder="Account Holder Name"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.AccountNumber}
              errorText={errors.AccountNumber}
              value={values.AccountNumber}
              id="AccountNumber"
              name="AccountNumber"
              title={"Account Number"}
              placeholder="Account Number"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.iban}
              errorText={errors.iban}
              value={values.iban}
              id="iban"
              name="iban"
              title={"IBAN"}
              placeholder="IBAN"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.branchName}
              errorText={errors.branchName}
              value={values.branchName}
              id="branchName"
              name="branchName"
              title={"Branch Name"}
              placeholder="Branch Name"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.transitNumber}
              errorText={errors.transitNumber}
              value={values.transitNumber}
              id="transitNumber"
              name="transitNumber"
              title={"Transit Number"}
              placeholder="Transit Number"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.swiftCode}
              errorText={errors.swiftCode}
              value={values.swiftCode}
              id="swiftCode"
              name="swiftCode"
              title={"Swift Code"}
              placeholder="Swift Code"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              marginX: "7.5rem",
              marginTop: "3rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SecondaryButton
              onClick={() => router.back()}
              sx={{ width: "25rem" }}
            >
              Cancel
            </SecondaryButton>
            <AppButton type="submit" sx={{ width: "25rem" }}>
              Update
            </AppButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
