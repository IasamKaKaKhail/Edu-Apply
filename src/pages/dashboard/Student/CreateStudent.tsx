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
  createStudentInitialValues,
  createStudentValidateSchema,
} from "@/components/forms/yupSchema";
import { AdminLayout } from "@/components/layout";
import { CreateStudentData } from "@/graphql/__generatedTypes__";
import { useStudent } from "@/hooks";
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
  const { createStudent } = useStudent();

  const submitCreateStudent = async (values: CreateStudentData) => {
    try {
      console.log("submit createStudent");
      let uploadeddocs = [];
      if (docs?.length) {
        console.log("uploading docs");
        const res = await uploadFile(docs);
        uploadeddocs = res;
      }
      const res = await createStudent({ ...values, documents: uploadeddocs });
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
    initialValues: createStudentInitialValues,
    validationSchema: createStudentValidateSchema,
    onSubmit: (values) => submitCreateStudent({ ...values }),
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
        <PageTitleText>Add Student</PageTitleText>
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
              General Information
            </NameHeading>
            <InputOutlined
              touched={touched.firstname}
              errorText={errors.firstname}
              title={"First Name"}
              id="firstname"
              type={"text"}
              value={values.firstname}
              name="firstname"
              placeholder="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.middlename}
              errorText={errors.middlename}
              title={"Middle Name"}
              id="middle-name"
              type={"text"}
              value={values.middlename}
              name="middlename"
              placeholder="Middle Name"
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.lastname}
              errorText={errors.lastname}
              title={"Last Name"}
              id="lastname"
              type={"text"}
              value={values.lastname}
              name="lastname"
              placeholder="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.dob}
              errorText={errors.dob}
              title={"Date of Birth"}
              id="dob"
              type={"date"}
              value={values.dob}
              name="dob"
              onBlur={handleBlur}
              placeholder="Date of Birth"
              onChange={handleChange}
            />
            <Select
              title={"Country of Citizenship"}
              placeholder="Citizenship"
              options={countries}
              value={values.citizenship}
              onChange={(e) => setFieldValue("citizenship", e.target.value)}
              id="citizenship"
              name="citizenship"
              // touched={touched.citizenship}
              onBlur={handleBlur}
            />
            <InputOutlined
              touched={touched.firstLanguage}
              onBlur={handleBlur}
              errorText={errors.firstLanguage}
              title={"First Language"}
              id="first-language"
              type={"text"}
              value={values.firstLanguage}
              name="firstLanguage"
              placeholder="First Language"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.passportNumber}
              errorText={errors.passportNumber}
              title={"Passport Number"}
              id="passport-number"
              type={"text"}
              value={values.passportNumber}
              name="passportNumber"
              onBlur={handleBlur}
              placeholder="Passport Number"
              onChange={handleChange}
            />

            {/* 
            <DatePicker
              onChange={(value) => setFieldValue('passportExpiryDate', value)}
              value={values.passportExpiryDate}
            /> */}

            <InputOutlined
              touched={touched.passportExpiryDate}
              errorText={errors.passportExpiryDate}
              title={"Passport Expiry Date"}
              id="passport-expiry-date"
              type={"date"}
              value={values.passportExpiryDate}
              name="passportExpiryDate"
              onBlur={handleBlur}
              placeholder="Passport Expiry Date"
              onChange={handleChange}
            />

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box width={"50%"}>
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
              <Box width={"50%"}>
                <AppText
                  mb={"1rem"}
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: 400,
                  }}
                >
                  Martial Status
                </AppText>
                <RadioGroup
                  row
                  name="martialStatus"
                  id="martialStatus"
                  onBlur={handleBlur}
                  aria-labelledby="select-martialStatus"
                  value={values.martialStatus}
                  onChange={handleChange}
                  sx={{ paddingTop: "0.5rem" }}
                >
                  <FormControlLabel
                    value="single"
                    sx={{
                      color:
                        values.martialStatus === "single"
                          ? "primary.main"
                          : "#A0A0A0",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                    }}
                    control={<Radio />}
                    label="Single"
                  />
                  <FormControlLabel
                    value="married"
                    sx={{
                      color:
                        values.martialStatus === "married"
                          ? "primary.main"
                          : "#A0A0A0",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                    }}
                    control={<Radio />}
                    label="Married"
                  />
                </RadioGroup>
              </Box>
            </Box>

            <HrLine
              style={{
                gridColumn: "span 3",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />

            <InputOutlined
              sx={{ gridColumn: "span 2" }}
              touched={touched.address}
              errorText={errors.address}
              title={"Address"}
              id="address"
              type={"text"}
              value={values.address}
              name="address"
              onBlur={handleBlur}
              placeholder="Address"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.cityTown}
              errorText={errors.cityTown}
              title={"City/Town"}
              id="cityTown"
              type={"text"}
              value={values.cityTown}
              name="cityTown"
              onBlur={handleBlur}
              placeholder="City Town"
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
              touched={touched.postalZipCode}
              errorText={errors.postalZipCode}
              title={"Postal/Zip Code"}
              id="postal-zip-code"
              type={"text"}
              value={values.postalZipCode}
              name="postalZipCode"
              onBlur={handleBlur}
              placeholder="Postal/Zip Code"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.email}
              errorText={errors.email}
              title={"Email"}
              id="email"
              type={"email"}
              value={values.email}
              name="email"
              onBlur={handleBlur}
              placeholder="Email"
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
              Education History
            </NameHeading>

            <InputOutlined
              touched={touched.countryOfEducation}
              errorText={errors.countryOfEducation}
              title={"Country of Education"}
              id="country-of-education"
              type={"text"}
              value={values.countryOfEducation}
              name="countryOfEducation"
              onBlur={handleBlur}
              placeholder="Country of Education"
              onChange={handleChange}
            />

            <InputOutlined
              touched={touched.HighestLevelOfEducation}
              errorText={errors.HighestLevelOfEducation}
              title={"Highest Level of Education"}
              id="HighestLevelOfEducation"
              type={"text"}
              value={values.HighestLevelOfEducation}
              name="HighestLevelOfEducation"
              onBlur={handleBlur}
              placeholder="Highest Level of Education"
              onChange={handleChange}
            />
            <Select
              title={"Grading Scheme"}
              placeholder="Grading Scheme"
              options={[
                { label: "Percentage", value: "Percentage" },
                { label: "GPA", value: "GPA" },
              ]}
              value={values.gradingScheme}
              onChange={(e) => setFieldValue("gradingScheme", e.target.value)}
              id="gradingScheme"
              name="gradingScheme"
            />
            <InputOutlined
              touched={touched.gradeAverage}
              errorText={errors.gradeAverage}
              title={"Grade Average"}
              id="grade-average"
              type={"text"}
              value={values.gradeAverage}
              name="gradeAverage"
              onBlur={handleBlur}
              placeholder="Grade Average"
              onChange={handleChange}
            />

            <HrLine
              style={{
                gridColumn: "span 3",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />

            <NameHeading sx={{ gridColumn: "span 3" }}>Test Score</NameHeading>

            <InputOutlined
              touched={touched.gradeAverage}
              errorText={errors.gradeAverage}
              title={"English Exam Type"}
              id="testExamType"
              type={"text"}
              value={values.gradeAverage}
              name="testExamType"
              onBlur={handleBlur}
              placeholder="IELETS"
              onChange={handleChange}
            />

            <div style={{ gridColumn: "span 2" }} />
            <Box
              sx={{
                gridColumn: "span 3",
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                columnGap: "2.5rem",
                rowGap: "1.5rem",
              }}
            >
              <InputOutlined
                touched={touched.passportExpiryDate}
                errorText={errors.passportExpiryDate}
                title={"Date of Exam"}
                id="exam-date"
                type={"date"}
                value={values.passportExpiryDate}
                name="examDate"
                onBlur={handleBlur}
                placeholder="DD-MM-YYYY"
                onChange={handleChange}
              />
              <InputOutlined
                touched={touched.gradeAverage}
                errorText={errors.gradeAverage}
                title={"Reading Scores"}
                id="testExamType"
                type={"text"}
                value={values.gradeAverage}
                name="testExamType"
                onBlur={handleBlur}
                placeholder="IELETS"
                onChange={handleChange}
              />

              <InputOutlined
                touched={touched.passportExpiryDate}
                errorText={errors.passportExpiryDate}
                title={"Listening Scores"}
                id="exam-date"
                type={"text"}
                value={values.passportExpiryDate}
                name="examDate"
                onBlur={handleBlur}
                placeholder="DD-MM-YYYY"
                onChange={handleChange}
              />

              <InputOutlined
                touched={touched.gradeAverage}
                errorText={errors.gradeAverage}
                title={"Speaking Scores"}
                id="testExamType"
                type={"text"}
                value={values.gradeAverage}
                name="testExamType"
                onBlur={handleBlur}
                placeholder="IELETS"
                onChange={handleChange}
              />
              <InputOutlined
                touched={touched.gradeAverage}
                errorText={errors.gradeAverage}
                title={"Writing Scores"}
                id="testExamType"
                type={"text"}
                value={values.gradeAverage}
                name="testExamType"
                onBlur={handleBlur}
                placeholder="IELETS"
                onChange={handleChange}
              />
            </Box>

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
