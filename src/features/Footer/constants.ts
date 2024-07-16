import { FooterInformation } from "../../globals/types/structure";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";


export const socials: FooterInformation[] = [
    {
      platform: "Instagram",
      handle: "@Fika_clothing",
      icon: InstagramIcon,
    },
    {
      platform: "FaceBook",
      handle: "Fika Clothing",
      icon: Facebook,
    },
    {
      platform: "X",
      handle: "Fika",
      icon: XIcon,
    },
  ];