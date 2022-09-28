import React, { useEffect, useState } from "react";
import styles from "./Salary.module.css";
import { getTopPayingJobs } from "../Redux/Salaryreducer/action";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid, Divider,  Button } from "@material-ui/core";
import { Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
      maxWidth: "48%",
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            hello
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
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
                  md={10}
                  lg={3}
                  xl={6}
                  className={classes.grid}
                >
                  <h4>{item.title}</h4>
                  <div style={{display:"flex"}}>
                    Average Salary
                    <span>{item.Avg_salary}</span>
                  </div>
                  <Divider component="hr" />
                  <div>Job Openings</div>
                </Grid>
              );
            })}

        </div>
      </div>
    </>
  );
};

export { TPJobs };
