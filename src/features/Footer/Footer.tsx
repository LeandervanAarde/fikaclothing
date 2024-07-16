import { Box, Container } from "@mui/material";
import { globalColors } from "../../globals/styles/styles";
import { ReactComponent as StoreLogo } from "../../assets/Logo.svg";
type Props = {};


export default function Footer({}: Props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "15vh",

        backgroundColor: globalColors.black,
      }}
    >
      <Box
        width={100}
        height={"100%"}
        sx={{
          display: { xs: "none", md: "flex" },
          //   backgroundColor: 'red'
        }}
        alignContent={"center"}
      >
        <StoreLogo />
      </Box>
    </Container>
  );
}
