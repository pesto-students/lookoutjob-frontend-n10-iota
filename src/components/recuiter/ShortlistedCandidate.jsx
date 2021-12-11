import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from 'react-redux'

export default function ShortlistedCandidate(props) {
  const companyId = useSelector((state) => state.companyDetailsReducer.id);
  return props.data.job.company === companyId ? (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        sx={{
            flexDirection: 'column',
          borderRadius: 10,
          width: 300,
          height: 150,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
            justifyContent: "center",
          },
        }}
      >
        <h3>Job Title : {props.data.job.title}</h3>
        <b>
          Name : <span>{props.data.candidate.name}</span>
        </b>
        <b>
          Contact :<span>{props.data.candidate.email}</span>
        </b>
      </Box>
    </div>
  ) : (
    <div></div>
  );
}
