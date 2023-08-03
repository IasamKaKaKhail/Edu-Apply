import {
  AppButton,
  AppText,
  DeleteButton,
  DragAndDropFile,
  InputOutlined,
  NameHeading,
  PageTitleText,
  SecondaryButton,
  Select,
  SubTitle,
} from "@/components";
import {
  BulletsBlueDot,
  Col,
  HrLine,
  Row,
} from "@/components/dashboard/styled";
import {
  createAgentInitialValues,
  createAgentValidateSchema,
} from "@/components/forms/yupSchema";
import { AdminLayout } from "@/components/layout";
import { CreateAgentData } from "@/graphql/__generatedTypes__";
import { useAgent } from "@/hooks";
import { countries } from "@/utils";
import { convertToMBOrKB, trauncateString, uploadFile } from "@/utils/common";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const [docs, setDocs] = useState<File[]>([]);
  const router = useRouter();
  const { createAgent } = useAgent();

  const submitCreateAgent = async (values: CreateAgentData) => {
    try {
      let uploadeddocs = [];
      if (docs?.length) {
        console.log("uploading docs");
        const res = await uploadFile(docs);
        uploadeddocs = res;
      }
      const res = await createAgent({ ...values, documents: uploadeddocs });
      if (res) router.back();
    } catch (error) {
      console.log("error create student", error);
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
    initialValues: createAgentInitialValues,
    validationSchema: createAgentValidateSchema,
    onSubmit: (values) => submitCreateAgent({ ...values }),
  });

  const handleRemoveFile = (file: File) => {
    const filtered = docs.filter(
      (item) => file.name !== item.name && file.size !== item.size,
    );
    setDocs(filtered);
  };

  return (
    <Box padding={"2.5rem"} minWidth={"100rem"}>
      <Box>
        <PageTitleText>Add Agent</PageTitleText>
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
              touched={touched.email}
              errorText={errors.email}
              value={values.email}
              id="email"
              name="email"
              title={"Email"}
              placeholder="Email"
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

            <HrLine
              style={{
                gridColumn: "span 3",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
            <Box sx={{ gridColumn: "span 3" }}>
              <NameHeading>Upload Documents</NameHeading>
              <Col gap={"1.2rem"} my={"2rem"}>
                <Row gap={"1.5rem"}>
                  <BulletsBlueDot />
                  <SubTitle sx={{ fontWeight: 600 }}>
                    Upload passport and all academic documents
                  </SubTitle>
                </Row>
                <Row gap={"1.5rem"}>
                  <BulletsBlueDot />
                  <SubTitle sx={{ fontWeight: 600 }}>
                    The acceptable formats of the copy are .PDF, .JPEG or .PNG
                  </SubTitle>
                </Row>
              </Col>

              <DragAndDropFile setFiles={setDocs} />
              <Col gap={"1.2rem"} my={"2rem"}>
                {docs?.length > 0 &&
                  docs.map((file, index) => (
                    <Row key={index} gap={"1.5rem"}>
                      <DeleteButton onClick={() => handleRemoveFile(file)} />
                      <SubTitle sx={{ fontWeight: 600 }}>{`${trauncateString({
                        str: file.name,
                        keepExtension: true,
                      })} - ${convertToMBOrKB(file.size)}`}</SubTitle>
                    </Row>
                  ))}
              </Col>
            </Box>
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
              Save
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
