import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid } from "@material-ui/core";
import { getTopPayingComp } from "../Redux/TopCompanyreducer/action";
import StarRatings from "react-star-ratings";
import { Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from "./Salary.module.css";
import { CompContainer } from "./SalaryStyleComponent";

//Styling Material UI Elements
const useStyles = makeStyles(() => ({
  grid: {
    "@media (max-width:1280px)": {
      maxWidth: "60%",
    },
    "@media (max-width:768px)": {
      maxWidth: "100%",
    },
  },
}));

const TPCompany = () => {
  const classes = useStyles();
  const tpComp = useSelector((state) => state.topPayingComp.companies);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] =useState('md')

  useEffect(() => {
    dispatch(getTopPayingComp());
  }, [dispatch]);
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const sizes = [ 'xxl']

   return(

    <div className={styles.tpComp}>
      <div style={{width:"fit-content",textAlign:"start"}}>
        <Heading size={"lg"}>Browse top paying companies by company</Heading>
        <div style={{border:"0.5px solid black",width:"80%",display:"flex",justifyContent:"space-between",alignItems:"center", borderRadius:"10px",marginTop:"10px",height:"40px"}}>
        <h2>Choose an industry</h2> 
        {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          size={"sm"}
          
        ><KeyboardArrowDownIcon/></Button>))}
          <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Browse top paying companies by company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             <div style={{display:"flex",justifyContent:"space-evenly",lineHeight:"40px",fontSize:"16px", fontWeight:"bolder"}}>
                <div className={styles.linkage}  style={{display:"flex",flexDirection:"column",cursor:"pointer" }}>
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

      <div className={styles.jobsContainer}>
        {tpComp &&
          tpComp.map((item, index) => {
            return (

              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={10}
                lg={3}
                xl={10}
                className={classes.grid}
              >
                <Link
                  className={styles.companyRoute}
                  to={`/career/salaries/${item.id}`}
                >
                  <CompContainer className={styles.compCard} key={item.id}>
                    <div>
                      <img src={item.logo} alt={`${item.name}'s Logo`} />
                    </div>

                    <div>
                      <h4>{item.name}</h4>
                      <div className={styles.starRating}>
                        <StarRatings
                          rating={item.stars}
                          starRatedColor="#6F6F6F"
                          starDimension="15px"
                          starSpacing="0px"
                          numberOfStars={5}
                        />
                        <p>{item.reviews}</p>
                      </div>
                    </div>
                  </CompContainer>

                </Link>
              </Grid>
            );
          })}
      </div>
    </div>
  );
}

export { TPCompany };
