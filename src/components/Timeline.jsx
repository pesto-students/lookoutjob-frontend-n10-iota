import { Container } from "@material-ui/core";
import React from "react";
import Post from "./Post";

import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { timelineActions } from "../app/reducers/timelineReducer";
import CircularSpinner from "./Loaders/CircularSpinner";

export default function Timeline(props) {
  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.timelineReducer.isFetching);
  const timeline = useSelector((state) => state.timelineReducer);
  const [timelineArr,setTimeline ] = useState([]);

  useEffect(() => {
    try {
      dispatch(timelineActions.fetchtimeline({ id: props.userId }));
      
    } catch (error) {}
    console.log(timeline);
  }, []);


  useEffect(() => {
    try {
      if(timeline){
        setTimeline(timeline.timelineData[0]["timeline"]);
        console.log(timelineArr)
      }
      
    } catch (error) {}
    console.log(timeline);
  }, [timeline]);



  
  return (
    isFetching?<CircularSpinner />:<div>
      {timelineArr.map((d) => (
        <Post key={d.id} data={d}></Post>
      ))}
    </div>
  );
}
