import styles from "./Salary.module.css"
import { makeStyles, Grid } from "@material-ui/core";
import React from 'react'
// import { Grid } from "@material-ui/core";
import {
  Image,
  Input,
  SearchButton,
  Container,
  SearchDiv,
  Flex,
} from "./SalaryStyleComponent"
import { TPJobs } from "./TopJobs";
import { Heading } from "@chakra-ui/react";


const useStyles = makeStyles((theme) => ({
  search: {
    paddingTop: theme.spacing(8),
    "& h1": {
      fontSize:"40px",
      fontWeight:"bold",
      marginBottom: theme.spacing(2),
      zIndex: 1,
      position: "relative",
      "@media (max-width:660px)": {
        top: theme.spacing(-2),
        fontSize: "1rem",
        fontWeight:"bold"
      },
    },

    "& div": {
      zIndex: 1,
      position: "relative",
      "@media (max-width:660px)": {
        top: theme.spacing(-3),
        fontSize: "0.8rem",
      },
    },

    "& h3": {
      "@media (max-width:660px)": {
        display: "none",
      },
    },
  },
}));
function Salary() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={7}
            xl={7}
            className={classes.search}
          >
            <div style={{width:"fit-content",textAlign:"start",marginBottom:"5%"}}>
            <h1>Find a career you'll love</h1>
            <div>
              Explore which careers have the highest job satisfaction,
              bestsalaries, and more
            </div>
            </div>
            <SearchDiv>
              <Flex>
                <h3>What</h3>
                <h3>Where</h3>
              </Flex>
              <Flex>
                <Input type="text" placeholder="job title" />
                <Input type="text" placeholder="location" />
                <SearchButton>Search</SearchButton>
              </Flex>
            </SearchDiv>
          </Grid>

          <Grid item md={6} lg={5} xl={5}>
            <Image
              src="https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/salaries-8d20dc14bdeae8889387e0fb40e0d546.png"
              alt="Salaries Poster"
            />
          </Grid>

        </Grid>
      </Container>

    <TPJobs/>


    <div className={styles.ratingContainer}>
          <Grid container>

            <Grid item xs={12} sm={7} md={7} lg={7} xl={6}>
              <h1>How much should you be earning?</h1>
              <div style={{ color: "grey", marginTop: "2vh" }}>
                Get an estimated calculation of how much you should be earning
                and insight into your career options.
              </div>
              <div className={styles.flexBox}>
                <button>Get estimated pay range</button>
                <p> See more details</p>
              </div>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={6}>
              <img
                src="https://d3fw5vlhllyvee.cloudfront.net/mosaic-provider-salary-calculator-entries/dist/images/src/components/ResponsiveDefaultEntry/chart_desktop_janish-36baaa.svg"
                alt=""
                width="100%"
              />
            </Grid>

          </Grid>
        </div>   
    </>
  )
}

export default Salary