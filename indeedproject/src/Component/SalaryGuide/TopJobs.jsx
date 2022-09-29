import React, { useEffect, useState } from "react";
import styles from "./Salary.module.css";
import { getTopPayingJobs } from "../Redux/Salaryreducer/action";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid, Divider,  Button } from "@material-ui/core";
import { Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
// import {useDisclosure} from "react"

//Styling Material UI Elements
const useStyles = makeStyles(() => ({
  grid: {
    border: "1px solid #dddddd",
    padding: "20px",
    height: "auto",
    maxWidth: "24%",
    position: "relative",
    margin: "6px",
    borderRadius: "10px",
    "@media (max-width:1280px)": {
      maxWidth: "80%",
    },
    "@media (max-width:768px)": {
      maxWidth: "100%",
     
    },
    "& h4": {
      textDecoration: "underline",
      marginBottom: "15px",
    },
    "& div": {
      textDecoration: "underline",
      marginTop: "15px",
    },
    "& hr": {
      marginTop: "25px",
    },
  },
}));

const TPJobs = () => {
  const tpJobs = useSelector((state) => state.topPayingJobsReducer.jobs);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] =useState('md')
  
  useEffect(() => {
    dispatch(getTopPayingJobs());
  }, [dispatch]);
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
const sizes = [ 'xxl']
  return (
    <>
      <div className={styles.tpJobs}>
         <div style={{width:"fit-content",textAlign:"start"}}>
        <Heading size={"lg"}>Browse top paying jobs by industry</Heading>
        <div style={{border:"0.5px solid black",width:"80%",display:"flex",justifyContent:"space-between",borderRadius:"10px",marginTop:"10px"}}>
        <h2>Choose an industry</h2> 
        {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        ><KeyboardArrowDownIcon/></Button>))}
          <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Browse top-paying jobs by industry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div style={{display:"flex",justifyContent:"space-evenly",lineHeight:"40px",fontSize:"16px", fontWeight:"bolder"}}>
                <div  className={styles.linkage}  style={{display:"flex",flexDirection:"column"}}>
                    <Link>All Industries</Link>
                    <Link>  Agriculture, Fishing & Forestry</Link>
                   <Link> Architecture & Engineering</Link>
                   <Link>  Business Management, Administrative & Customer Support</Link>
                   <Link> Cleaning & Grounds Maintenance</Link>
                   <Link> Community & Social Services</Link>
                   <Link> Construction & Extraction</Link>
                   <Link> Education & Instruction</Link>
                </div>
                <div  className={styles.linkage}  style={{display:"flex",flexDirection:"column"}}>
                <Link>Finance & Accounting</Link>
                <Link>Food & Beverage</Link>
                <Link>Healthcare</Link>
                <Link>Legal</Link>
                <Link>Manufacturing & Utilities</Link>
                <Link>Marketing, Advertising & Public Relations</Link>
                <Link>Media, Arts & Design</Link>
                <Link>Personal Service</Link>
                </div>
                <div  className={styles.linkage}  style={{display:"flex",flexDirection:"column"}}>
                <Link>Repair, Maintenance & Installation</Link>
                <Link>Safety, Security & Defence Service</Link>
                <Link>Sales & Retail</Link>
                <Link>Science & Research</Link>
                <Link>Supply Chain & Logistics</Link>
                <Link>Technology</Link>
                <Link>Transportation</Link>
                <Link>Travel, Attractions & Events</Link>
                </div>
            </div>
            
          </ModalBody>
         <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
        </div>
        </div>
        <div className={styles.compContainer}>
          {tpJobs &&
            tpJobs.map((item, index) => {
              return (

                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={8}
                  lg={3}
                  xl={6}
                  className={classes.grid}
                >
                  <Heading size={"sm"}>{item.title}</Heading>
                  <div style={{display:"flex"}}>
                    Average Salary
                    <span>{item.Avg_salary}</span>
                  </div>
                  <Divider component="hr" />
                  <Link style={{color:"blue",borderBottom:"1px solid blue"}}>Job Openings</Link>
                </Grid>
              );
            })}

        </div>
      </div>
    </>
  );
};

export { TPJobs };
