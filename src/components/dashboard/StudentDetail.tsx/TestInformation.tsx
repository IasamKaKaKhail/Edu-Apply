import React from "react";
import { PageTitleText } from "@/components/AppText";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { HrLine, Row } from "../styled";
import { BulletDrop } from "../Svgs";
import PreferenceInfo from "./PreferencesInfo";
import moment from "moment";
const results: StudentExamResult[] = [
  {
    name: "IELTS",
    date: new Date(),
    listeningScroe: "12",
    readingScroe: "11",
    speakingScore: "17",
    writingScore: "6",
    id: "123",
  },
  {
    name: "Tofel",
    date: new Date(),
    listeningScroe: "12",
    readingScroe: "11",
    speakingScore: "17",
    writingScore: "6",
    id: "146",
  },
  {
    name: "IELTS",
    date: new Date(),
    listeningScroe: "12",
    readingScroe: "11",
    speakingScore: "17",
    writingScore: "6",
    id: "12567",
  },
];

type StudentExamResult = {
  name: string;
  date: Date;
  readingScroe: string;
  listeningScroe: string;
  writingScore: string;
  speakingScore: string;
  id: string;
};

type Props = {
  result?: StudentExamResult[];
};
const TestInformation = ({ result = results }: Props) => {
  return (
    <Fragment>
      {result &&
        result.map((test, index) => (
          <Fragment key={test.id}>
            <Row sx={{ alignSelf: "start", marginBottom: "1.5rem" }}>
              <BulletDrop />
              <PageTitleText
                sx={{ color: "#111", marginLeft: "0.5rem" }}
              >{`Exam ${index + 1}`}</PageTitleText>
            </Row>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                rowGap: "2.5rem",
                marginLeft: "3rem",
              }}
            >
              <PreferenceInfo field="English Exam Type : " value={test.name} />
              <PreferenceInfo
                field="Date of Exam :"
                value={moment(test.date).format("DD/MM/YYYY")}
              />
              <PreferenceInfo
                sx={{ gridColumnStart: 1 }}
                field="Scores in Reading : "
                value={test.readingScroe}
              />
              <PreferenceInfo
                field="Scores in Listening : "
                value={test.listeningScroe}
              />
              <PreferenceInfo
                field="Scores in Writing : "
                value={test.writingScore}
              />
              <PreferenceInfo
                field="Scores in Speaking : "
                value={test.speakingScore}
              />
            </Box>
            {result?.length !== index + 1 && (
              <HrLine sx={{ marginY: "2.5rem" }} />
            )}
          </Fragment>
        ))}
    </Fragment>
  );
};

export default TestInformation;
