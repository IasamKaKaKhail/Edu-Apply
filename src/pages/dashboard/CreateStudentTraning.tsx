import {
  AppButton,
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
import { AdminLayout } from "@/components/layout";
import CircularProgress from "@mui/material/CircularProgress";
import { convertToMBOrKB, trauncateString, uploadFile } from "@/utils/common";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NextPageWithLayout } from "../_app";
import { ErrorText } from "@/components/text";
import { CREATE_STUDENT_TRAINING, GET_STUDENT_TRAINING_DATA } from "@/graphql";
import { useMutation } from "@apollo/client";

const schema = yup
  .object({
    courseName: yup.string().required("Course Name Is Required Field"),
    programeName: yup.string().required("Programe Name Is Required Field"),
    totalMarks: yup.string().required("Total Marks Is Required Field"),
    timeDuration: yup.string().required("Time Duration Is Required Field"),
    questionType: yup.string().required("Question Type  Is Required Field"),
    testDate: yup.string().required("Time Duration Is Required Field"),
  })
  .required();

type FormValues = {
  courseName: string | undefined;
  programeName: string | undefined;
  totalMarks: string | undefined;
  timeDuration: string | undefined;
  questionType: string | undefined;
  testDate: string | undefined;
};

const Page: NextPageWithLayout = () => {
  //statesStartHere

  const [docs, setDocs] = useState<File[]>([]);
  const router = useRouter();

  //statesEndHere

  //mutationsStartHere

  const [
    createStudentTraning,
    { data: createStudentTrainingData, loading: createStudentTrainingLoading },
  ] = useMutation(CREATE_STUDENT_TRAINING, {
    refetchQueries: [GET_STUDENT_TRAINING_DATA],
  });

  //mutationEndsHere

  //funcationStartsHere

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleRemoveFile = (file: File) => {
    const filtered = docs.filter(
      (item) => file.name !== item.name && file.size !== item.size,
    );
    setDocs(filtered);
  };

  const CreateStudentTraning = async (values: any) => {
    const studentTrainingInput = {
      courseName: values.courseName,
      programName: values.programeName,
      questionType: values.questionType,
      testDate: values.testDate,
      timeDuration: values.timeDuration,
      totalMarks: values.totalMarks,
      document: "",
    };
    try {
      let uploadeddocs = [];
      if (docs?.length) {
        console.log("uploading docs");
        const res = await uploadFile(docs);
        uploadeddocs = res;
      }
      console.log("uploadeddocs====>", uploadeddocs);
      if (uploadeddocs) {
        studentTrainingInput["document"] = uploadeddocs[0];
      }
      console.log("studentTrainingInput======>", studentTrainingInput);
      // const res = await createStudent({ ...values, documents: uploadeddocs });
      // if (res) router.back();
      await createStudentTraning({
        variables: {
          studentTrainingInput: studentTrainingInput,
        },
      });
    } catch (error) {
      console.log("error create student", error);
    }
  };

  const question = [
    {
      label: "ORM",
    },
  ];

  //functionEndsHere

  if (createStudentTrainingLoading) {
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>;
  }

  if (createStudentTrainingData) {
    console.log("createStudentTrainingData=====>", createStudentTrainingData);
    router.push("StudentTraining");
  }
  return (
    <Box padding={"2.5rem"} minWidth={"100rem"}>
      <Box>
        <PageTitleText>Add new paper</PageTitleText>
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
            Basic Information
          </NameHeading>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Select Course Name"}
                  id="courseName"
                  type={"text"}
                  value={value}
                  placeholder="Select Course Name"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.courseName?.message} />
              </Box>
            )}
            name={"courseName"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Program name"}
                  id="programeName"
                  type={"text"}
                  value={value}
                  name="programeName"
                  placeholder="Program name"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.programeName?.message} />
              </Box>
            )}
            name={"programeName"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Total Marks"}
                  id="totalMarks"
                  type={"text"}
                  value={value}
                  name="totalMarks"
                  placeholder="Total Marks"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.totalMarks?.message} />
              </Box>
            )}
            name={"totalMarks"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Time Duration"}
                  id="timeDuration"
                  type={"time"}
                  value={value}
                  onBlur={onBlur}
                  placeholder="Time Duration"
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.timeDuration?.message} />
              </Box>
            )}
            name={"timeDuration"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Select
                  title={"Question Types"}
                  placeholder="Question Types"
                  options={question}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  id="questionType"
                  // touched={touched.citizenship}
                  onBlur={onBlur}
                />
                <ErrorText message={errors?.questionType?.message} />
              </Box>
            )}
            name={"questionType"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Test Date"}
                  id="testDate"
                  type={"date"}
                  value={value}
                  onBlur={onBlur}
                  placeholder="Test Date"
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.testDate?.message} />
              </Box>
            )}
            name={"testDate"}
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
          <Box onClick={handleSubmit(CreateStudentTraning)}>
            <AppButton type="submit" sx={{ width: "25rem" }}>
              Save
            </AppButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
