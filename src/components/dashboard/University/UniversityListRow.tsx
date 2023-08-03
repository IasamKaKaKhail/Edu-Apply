import { editTheUni } from "@/components/forms/yupSchema";
import { UniversityProfile } from "@/graphql/__generatedTypes__";
import { useUniversity } from "@/hooks";
import { Avatar, Box } from "@mui/material";
import { useRouter } from "next/router";
import { SubTitle } from "../../AppText";
import EditRecordButton from "../EditRecordButton";
import { TableRowItem } from "../styled";

type Props = {
  university: UniversityProfile;
};

const UniversityListRow = ({ university }: Props) => {
  const router = useRouter();
  const { deleteUniById } = useUniversity();
  const { id: universityId } = university;
  const handleUpdate = () => {
    editTheUni({
      address: university.address,
      agentsRelationManager: university.agentsRelationManager,
      city: university.city,
      contactPersonEmail: university.contactPersonEmail,
      contactPersonName: university.contactPersonName,
      country: university.country,
      faxNumber: university.faxNumber,
      name: university.name,
      phone: university.phone,
      pincode: university.pincode,
      state: university.state,
      type: university.type,
      website: university.website,
      yearOfEstablished: university.yearOfEstablished,
    });
    router.push({
      pathname: "/dashboard/University/EditUniversity",
      query: { universityId },
    });
  };
  return (
    <TableRowItem
      onClick={() => {
        router.push({
          pathname: "/dashboard/University/UniversityProfile",
          query: { universityId },
        });
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: "1.2rem",
          overflow: "hidden",
        }}
      >
        <Avatar
          sx={{ width: "4.2rem", height: "4.2rem", borderRadius: "4.2rem" }}
        />
        <SubTitle sx={{ color: "#111111" }}>{university?.name || ""}</SubTitle>
      </Box>
      <Box sx={{ display: "flex", width: "16%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>
          {/* program */}
          {"Engineering"}
        </SubTitle>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>
          {/* location */}
          {university?.city || university?.country || ""}
        </SubTitle>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>
          {/* application fee */}$ 1,000
        </SubTitle>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>
          {/* tution fee */}$ 19,000
        </SubTitle>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>
          {/* next intake */}
          20/09/2024
        </SubTitle>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>{/* comission */}$ 8,000</SubTitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "5%",
          overflow: "hidden",
          padding: "1rem",
          paddingLeft: "1%",
        }}
      >
        <EditRecordButton
          onClickDelete={() => deleteUniById({ universityId })}
          onClickUpdate={handleUpdate}
        />
      </Box>
    </TableRowItem>
  );
};

export default UniversityListRow;
