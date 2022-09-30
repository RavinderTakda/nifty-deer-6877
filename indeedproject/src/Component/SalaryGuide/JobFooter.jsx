import { Heading } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { Follow } from "./SalaryStyleComponent";

const JobByCategoryFooter = () => {
  return (
    <>         <div style={{width:"fit-content",marginTop:'50px',lineHeight:"30px",textAlign:"start"}}>
               <Heading size={"md"}>Tell us how to improve this page</Heading>
                <p>
                    What would you add or change?
                </p>
                </div>
      <Footer>
        <div>

          
        </div>
        <Wrapper >
          <Follow
            style={{ width: "220px", height: "40px", fontWeight: "bold",marginLeft:"110%" }}
          >
            Give Feedback
          </Follow>
        </Wrapper>
       
      </Footer>
    </>
  );
};

export { JobByCategoryFooter };

export const Footer = styled.div`
  width: 70%;
  border-radius: 10px;
  height: auto;
  margin: 2vh 0vh;
  text-align: left;
  display: flex;
  justify-content: space-between;
  border: 1px solid #534242;
  padding: 20px 0px 0px 20px;
`;

export const Wrapper = styled.div`
  margin-top: 15px;
  h3,
  p {
    margin-top: 15px;
  }
`;
