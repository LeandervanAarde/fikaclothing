import { AspectRatio } from "@mui/icons-material";
import { globalColors } from "../../StylesSource/styles";

export const outerCardContainer = {
  width: {xs: "260px", sm: '380px',  md: "380px"},
  aspectRatio: '16/7',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const innnerCard = {
  width: "100%",
  height: "100%",
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  padding: 0,
  borderRadius: "10px",
  boxShadow: "0 0 25px 2px rgba(black, 0.2)",
};

export const cardContent = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  padding: "10px",
  overflow: "hidden",
  backfaceVisibility: "hidden",
  background: "linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%)",
  transition: "transform 300ms ease-in-out",
};

export const card = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "12px",
};

export const tapAndChip = {
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  padding: "5px",
  marginTop: "10px",
};

export const Chip = {
  width: "38px",
  height: "28px",
  borderRadius: "5px",
  backgroundColor: "#ffda7b",
  overflow: "hidden",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "49%",
    top: "-8%",
    transform: "translateX(-50%)",
    background: "#ffda7b",
    border: "1px solid #a27c1f",
    width: "25%",
    height: "110%",
    borderRadius: "100%",
    zIndex: 2,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "30%",
    left: "-10%",
    background: "transparent",
    border: "1px solid #a27c1f",
    width: "120%",
    height: "33%",
  },
};

export const cardText = {
  color: globalColors.white,
  letterSpacing: "0.2em",
  filter: " drop-shadow(1px 1px 1px rgba(black, 0.3))",
};

export const cardTextContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  marginTop: "10px",
};
