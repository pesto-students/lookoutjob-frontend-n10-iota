import { Container } from '@material-ui/core'
import React from 'react'
import { disney, ford, samsung, tupperWare } from '../Constants/constants'
import Marquee from "react-fast-marquee";
import {useStyles} from "../style/materialStyle"

export default function CompanySlideShow() {
    const classes = useStyles()
    return (
        <div >
            <Container className="" >
              <h2 >With Great Outcomes.</h2>
              
              
              <h4 >Our customers have gotten offers from awesome companies.</h4>
              <Marquee style={{height:"100px"}}>
              <img src={samsung} alt="" className={classes.comapnyLogo} />
              <img src={tupperWare} alt="" className={classes.comapnyLogo} />
              <img src={disney} alt="" className={classes.comapnyLogo} />
              <img src={ford} alt="" className={classes.comapnyLogo} />
              <img src={samsung} alt="" className={classes.comapnyLogo} />
              <img src={tupperWare} alt="" className={classes.comapnyLogo} />
              <img src={disney} alt="" className={classes.comapnyLogo} />
              <img src={ford} alt="" className={classes.comapnyLogo} />
              </Marquee>
              <Marquee direction="right">
              <img src={samsung} alt="" className={classes.comapnyLogo} />
              <img src={tupperWare} alt="" className={classes.comapnyLogo} />
              <img src={disney} alt="" className={classes.comapnyLogo} />
              <img src={ford} alt="" className={classes.comapnyLogo} />
              <img src={samsung} alt="" className={classes.comapnyLogo} />
              <img src={tupperWare} alt="" className={classes.comapnyLogo} />
              <img src={disney} alt="" className={classes.comapnyLogo} />
              <img src={ford} alt="" className={classes.comapnyLogo} />
              </Marquee>
            </Container>
      
        </div>
    )
}