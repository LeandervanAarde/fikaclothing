export const outerContainerStyles = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  minHeight: "70vh",
  padding: { sm: 0, md: 0, lg: 0, xl: 0 },
};

export const subContainerStyles = {
  width: { xs: "100%", lg: "65%" },
  padding: 3,
};

export const formControlStyles = {
  width: { xs: "100%", lg: "80%" },
};


export const optionStyles = {
  width: "30px",
  height: "30px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "5px",
}

export const calculateBorder = (value: unknown, selectedValue: unknown): string  =>  {
  return value === selectedValue 
  ? "2px solid black"
  : "0.5px solid black"
}