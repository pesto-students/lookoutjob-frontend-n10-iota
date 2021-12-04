import React from 'react'
import Header from "../../components/appBar/Header";
import { useSelector, useDispatch } from "react-redux";
import CircularSpinner from '../../components/Loaders/CircularSpinner';
import Connecion from '../../components/connections/Connecion';
import { Grid } from '@mui/material';

export default function ViewAllConnections() {
    const isFetching = useSelector((state) => state.connectionsReducer.isFetching);
    const data = useSelector((state) => state.connectionsReducer.connectionData);
    const isFetchingUser = useSelector((state) => state.userDetailsReducer.isFetching);

    
    return (
        isFetching || isFetchingUser ?<CircularSpinner />:<div>
                  <Header/>
            

            <h1 onClick={()=>{console.log(data)}}>Connections</h1>      
            <Grid container spacing={2}>

            {
                data.map(props => (
            
                    <Grid item xs={6} s={6} md={4}>
                    <Connecion key={props?.id} data={props}></Connecion>
                    </Grid>

                ))
            }    
            </Grid>
  
        </div>
    )
}
