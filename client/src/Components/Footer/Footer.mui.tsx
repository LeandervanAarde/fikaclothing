import { Box, Container } from "@mui/material";
import React from "react";
import { globalColors } from "../../StylesSource/styles";
import { FooterInformation } from "../../interfaces/Structure";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
type Props = {};

const socials: FooterInformation[] = [
  {
    platform: "Instagram",
    handle: "@Fika_clothing",
    icon: <InstagramIcon />,
  },
  {
    platform: "FaceBook",
    handle: "Fika Clothing",
    icon: <Facebook />,
  },
  {
    platform: "X",
    handle: "Fika",
    icon: <XIcon />,
  },
];

const SupportOptions: FooterInformation[] = [
  {
    location: "Help Centre",
    link: "",
  },
  {
    location: "FAQ",
    link: "",
  },
  {
    location: "Delivery Option",
    link: "",
  },
  {
    location: "FAQ",
    link: "Payment Options",
  },
];

export default function Footer({}: Props) {
  return (
    <Container
      maxWidth="xl"
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
