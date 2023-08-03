import {
  AppButton,
  InputOutlined,
  NameHeading,
  PageTitleText,
  SecondaryButton,
  Select,
} from "@/components";
import { HrLine } from "@/components/dashboard/styled";
import {
  editUniInitialVal,
  editUniValidateSchema,
} from "@/components/forms/yupSchema";
import { AdminLayout } from "@/components/layout";
import { EditUniInput } from "@/graphql/__generatedTypes__";
import { useUniversity } from "@/hooks";
import { countries } from "@/utils";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { universityId } = router.query as { universityId: string };
  const { editUni } = useUniversity();
  const submitEditUni = async (values: EditUniInput) => {
    try {
      const res = await editUni({ editUniInput: values, uniId: universityId });
      if (res) router.back();
    } catch (error) {
      console.log("error edit uni", error);
    }
  };
  console.log("inital edit: ", editUniInitialVal, universityId);
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: editUniInitialVal,
    validationSchema: editUniValidateSchema,
    onSubmit: (values) => submitEditUni(values),
  });

  return (
    <Box padding={"2.5rem"} minWidth={"100rem"}>
      <Box>
        <PageTitleText>Edit University</PageTitleText>
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
              onBlur={handleBlur}
              errorText={errors.name}
              title={"University Name"}
              id="name"
              type={"text"}
              value={values.name}
              name="name"
              placeholder="University Name"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.name}
              onBlur={handleBlur}
              errorText={errors.name}
              title={"University Id"}
              id="name"
              type={"text"}
              value={values.name}
              name="name"
              placeholder="123456"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.website}
              onBlur={handleBlur}
              errorText={errors.website}
              title={"University Website"}
              id="website"
              type={"text"}
              value={values.website}
              name="website"
              placeholder="www.oxford.com"
              onChange={handleChange}
            />

            <Select
              title={"Country"}
              placeholder="Country"
              options={countries}
              value={values.country}
              onChange={(e) => setFieldValue("country", e.target.value)}
              id="country"
              name="country"
              // touched={touched.citizenship}
              onBlur={handleBlur}
            />

            <InputOutlined
              // touched={touched.yearOfEstablished}
              // errorText={errors.yearOfEstablished}
              title={"Year of Established"}
              id="yearOfEstablished"
              type={"date"}
              value={values.yearOfEstablished}
              name="yearOfEstablished"
              onBlur={handleBlur}
              placeholder="Year of Established"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.type}
              errorText={errors.type}
              title={"University Type"}
              id="uniType"
              type={"text"}
              value={values.type}
              name="type"
              onBlur={handleBlur}
              placeholder="University Type"
              onChange={handleChange}
            />

            <HrLine
              style={{
                gridColumn: "span 3",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />

            <NameHeading sx={{ gridColumn: "span 3" }}>Address</NameHeading>

            <InputOutlined
              touched={touched.address}
              errorText={errors.address}
              title={"University Address"}
              id="address"
              type={"text"}
              value={values.address}
              name="address"
              onBlur={handleBlur}
              placeholder="Address"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.city}
              errorText={errors.city}
              title={"City"}
              id="city"
              type={"text"}
              value={values.city}
              name="city"
              onBlur={handleBlur}
              placeholder="City"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.state}
              errorText={errors.state}
              title={"State"}
              id="state"
              type={"text"}
              value={values.state}
              name="state"
              onBlur={handleBlur}
              placeholder="State"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.pincode}
              errorText={errors.pincode}
              title={"Pincode"}
              id="pincode"
              type={"text"}
              value={values.pincode}
              name="pincode"
              onBlur={handleBlur}
              placeholder="Pincode"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.phone}
              errorText={errors.phone}
              title={"Phone Number"}
              id="phone"
              type={"text"}
              value={values.phone}
              name="phone"
              onBlur={handleBlur}
              placeholder="Phone"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.faxNumber}
              errorText={errors.faxNumber}
              value={values.faxNumber}
              title={"Fax Number"}
              placeholder="Fax Number"
              id="faxNumber"
              name="faxNumber"
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

            <InputOutlined
              touched={touched.agentsRelationManager}
              errorText={errors.agentsRelationManager}
              value={values.agentsRelationManager}
              id="agentsRelationManager"
              name="agentsRelationManager"
              title={"Agent Relation Manager"}
              placeholder="Agent Relation Manager"
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

            <NameHeading sx={{ gridColumn: "span 3" }}>
              Contact Person
            </NameHeading>

            <InputOutlined
              touched={touched.contactPersonName}
              errorText={errors.contactPersonName}
              value={values.contactPersonName}
              id="contactPersonName"
              name="contactPersonName"
              title={"Name"}
              placeholder="Contact Person Name"
              type={"text"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputOutlined
              touched={touched.contactPersonEmail}
              errorText={errors.contactPersonEmail}
              value={values.contactPersonEmail}
              id="contactPersonEmail"
              name="contactPersonEmail"
              title={"Email"}
              placeholder="Contact Person Email"
              type={"email"}
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
