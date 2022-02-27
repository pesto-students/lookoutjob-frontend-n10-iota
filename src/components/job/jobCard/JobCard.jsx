import React from "react";
import './jobCard.css';
export default function JobCard(props) {
  return (
    <div className="card-container">
      
      <h2>{props.data.title}</h2>
      <p>{props.data.jobDetail.description}</p>
      <b>{props.data.jobDetail.salary}</b>
      <p>{props.data.jobDetail.position}</p>

      <p><b>Posted by : </b>{props.data.company.name}</p>
      <p>{props.data.company.address}</p>



    </div>
  );
}
