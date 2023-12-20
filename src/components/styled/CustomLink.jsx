import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

// const StyledLink = styled(Link)`
//   display: inline-block;
//   margin: 0 10px;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 20px;
// `;
export const CustomLink = ({ children }) => {
  return (
    <Link underline="none" style={{ textDecoration: "none" }}>
      <Typography color="primary" fontWeight="bold">
        {children}
      </Typography>
    </Link>
  );
};
