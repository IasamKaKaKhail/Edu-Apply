import { AppText } from "@/components/AppText";
import { ChevronRight } from "@mui/icons-material";
import { Box, ButtonBase, styled } from "@mui/material";
import { useRouter } from "next/router";

type Props = {
  programs: string[];
};

export const ProgramButton = styled(ButtonBase)(() => ({
  width: "48%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingX: "1.4rem",
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
  marginTop: "1rem",
  borderRadius: "0.8rem",
  padding: "1.4rem",
}));

const Programs = ({ programs }: Props) => {
  const router = useRouter();
  const { universityId } = router.query as { universityId: string };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: "2rem" }}>
      {programs.map((program) => (
        <ProgramButton
          onClick={() => {
            router.push({
              pathname: "/dashboard/University/ProgramDetail",
              query: { universityId, program: program },
            });
          }}
          key={program}
        >
          <AppText>{program}</AppText>
          <ChevronRight />
        </ProgramButton>
      ))}
    </Box>
  );
};

export default Programs;
