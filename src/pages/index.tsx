import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  /////////////////////////////////////////////////////////////////
  /////////////Mock loader replace when implementing apis////////////
  /////////////////////////////////////////////////////////////////
  const navigate = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
      router.replace(`/dashboard`);
    } else {
      router.replace(`/login/PreLogin`);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      navigate(false);
    }, 4000);
  }, []);
  /////////////////////////////////////////////////////////////////////

  return (
    <Box
      sx={{
        display: `flex`,
        height: `100vh`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
