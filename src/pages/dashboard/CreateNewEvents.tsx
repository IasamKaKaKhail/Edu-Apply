import {
  AppButton,
  InputOutlined,
  NameHeading,
  PageTitleText,
  SecondaryButton,
} from "@/components";
import { HrLine } from "@/components/dashboard/styled";
import { AdminLayout } from "@/components/layout";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NextPageWithLayout } from "../_app";
import { ErrorText } from "@/components/text";
import { CREATE_EVENT, GET_EVENTS } from "@/graphql";
import { useMutation } from "@apollo/client";

const schema = yup
  .object({
    eventName: yup.string().required("Event Name Is Required Field"),
    organize: yup.string().required("Organize  Is Required Field"),
    eventPlace: yup.string().required("Event Place Is Required Field"),
    eventTime: yup.string().required("Event Time Is Required Field"),
    eventHost: yup.string().required("Event Host  Is Required Field"),
    eventDate: yup.string().required("Event Date Is Required Field"),
    chiefGuest: yup.string().required("Chief Guest Is Required Field"),
    subject: yup.string().required(" Subject Is Required Field"),
    description: yup.string().required("Description Is Required Field"),
  })
  .required();

type FormValues = {
  eventName: string | undefined;
  organize: string | undefined;
  eventPlace: string | undefined;
  eventTime: string | undefined;
  eventHost: string | undefined;
  eventDate: string | undefined;
  chiefGuest: string | undefined;
  subject: string | undefined;
  description: string | undefined;
};

const Page: NextPageWithLayout = () => {
  //statesStartHere
  const router = useRouter();
  //statesEndHere

  //mutationsStartHere

  const [createEvent, { data: createEventData, loading: createEventLoading }] =
    useMutation(CREATE_EVENT, {
      refetchQueries: [GET_EVENTS],
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

  const CreateNewEvent = async (values: any) => {
    const myDateTimeString =
      new Date(values.eventDate).toISOString().split("T")[0] +
      "T" +
      values.eventTime;
    const myDateTime = new Date(myDateTimeString);
    console.log(
      "const myDateTime = new Date(myDateTimeString);======>",
      myDateTime,
    );
    const createEvents = {
      chiefGuest: values.chiefGuest,
      date: myDateTime,
      description: values.description,
      host: values.eventHost,
      name: values.eventName,
      organize: values.organize,
      place: values.eventPlace,
      subject: values.subject,
      type: values.eventTime,
    };
    try {
      // const res = await createStudent({ ...values, documents: uploadeddocs });
      // if (res) router.back();
      await createEvent({
        variables: {
          createEvent: createEvents,
        },
      });
    } catch (error) {
      console.log("error create student", error);
    }
  };

  //functionEndsHere

  if (createEventLoading) {
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

  if (createEventData) {
    console.log("createStudentTrainingData=====>", createEventData);
    router.push("Event");
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
          minHeight: "35,3rem",
          mb: "2.4rem",
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
          <NameHeading sx={{ gridColumn: "span 3" }}>Basic Details</NameHeading>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Event Name"}
                  id="eventName"
                  type={"text"}
                  value={value}
                  placeholder="Event Name"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.eventName?.message} />
              </Box>
            )}
            name={"eventName"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Organize"}
                  id="organize"
                  type={"text"}
                  value={value}
                  placeholder="Organize"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.organize?.message} />
              </Box>
            )}
            name={"organize"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Event Place"}
                  id="eventPlace"
                  type={"text"}
                  value={value}
                  name="totalMarks"
                  placeholder="Event Place"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.eventPlace?.message} />
              </Box>
            )}
            name={"eventPlace"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Event Date"}
                  id="eventDate"
                  type={"date"}
                  value={value}
                  onBlur={onBlur}
                  placeholder="Event Date"
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.eventDate?.message} />
              </Box>
            )}
            name={"eventDate"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Event Time"}
                  id="eventTime"
                  type={"time"}
                  value={value}
                  onBlur={onBlur}
                  placeholder="Event Time"
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.eventTime?.message} />
              </Box>
            )}
            name={"eventTime"}
          />
          <HrLine
            style={{
              gridColumn: "span 3",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          boxShadow: "0px 2px 15px 0px #0000000F",
          border: "1px solid #EBEBEB",
          borderRadius: "0.8rem",
          minHeight: "35,3rem",
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
          <NameHeading sx={{ gridColumn: "span 3" }}>Information</NameHeading>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Event Host"}
                  id="eventHost"
                  type={"text"}
                  value={value}
                  placeholder="Event Host"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.eventHost?.message} />
              </Box>
            )}
            name={"eventHost"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Chief Guest"}
                  id="chiefGuest"
                  type={"text"}
                  value={value}
                  placeholder="Chief Guest"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.chiefGuest?.message} />
              </Box>
            )}
            name={"chiefGuest"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputOutlined
                  title={"Subject"}
                  id="subject"
                  type={"text"}
                  value={value}
                  name="totalMarks"
                  placeholder="Subject"
                  onBlur={onBlur}
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.subject?.message} />
              </Box>
            )}
            name={"subject"}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <InputOutlined
                  title={"Short Description"}
                  id="description"
                  type={"time"}
                  value={value}
                  onBlur={onBlur}
                  multiline
                  placeholder="Short Description"
                  onChange={(inputValue) => onChange(inputValue)}
                />
                <ErrorText message={errors?.description?.message} />
              </Box>
            )}
            name={"description"}
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
          <Box onClick={handleSubmit(CreateNewEvent)}>
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
