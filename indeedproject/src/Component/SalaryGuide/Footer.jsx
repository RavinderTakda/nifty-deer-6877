import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { logo } from "./data";

const SalariesFooter = () => {
  return (
    <>
      <Footer>
        <Logo src={logo} alt="Indeed logo" width="15%" />

        <Flex>
          <div>
            <div>Explore Indeed</div>
            <div>Career Explorer</div>
            <div>Career Advice</div>
            <div>Browse Jobs</div>
          </div>

          <div>
            <div>Explore Indeed</div>
            <div>Browse Companies</div>
            <div>Salaries</div>
            <div>Indeed Events</div>
          </div>
          
          <div>
            <div>Explore Indeed</div>
            <div>Work at Indeed</div>
            <div>Countries</div>
            <div>About</div>
          </div>
        </Flex>

        <div>
          <SocialIcons>
            <div>Follow us</div>
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </SocialIcons>
        </div>

      </Footer>
    </>
  );
};

export {SalariesFooter};


// Styled Components
const Footer = styled.div`
  width: 100%;
  background: black;
  padding: 3%;
  height: 40vh;
  color: white;
  position: relative;
  @media (max-width: 990px) {
    height: 200vh;
  }
`;

const Flex = styled.div`
  display: flex;
  font-size: 0.9rem;
  position: absolute;
  width: 60%;
  right: 20%;
  justify-content: space-evenly;
  @media (max-width: 990px) {
    display: block;
    right: 0%;
  }
  div > div {
    padding: 10px 0px;
    &:hover {
      color: #085ff7;
      transition: 0.2s ease-in-out;
    }
  }
  div > div:nth-child(1) {
    font-weight: 600;
    font-size: 1rem;
  }
  div:nth-child(2) > div:nth-child(1),
  div:nth-child(3) > div:nth-child(1) {
    visibility: hidden;
    @media (max-width: 990px) {
      display: none;
    }
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  right: 10%;
  width: 200px;
  @media (max-width: 990px) {
    width: 50px;
    right: 5%;
  }
  div {
    margin-bottom: 10px;
    font-weight: 600;
  }
  svg {
    color: white;
    margin: 5%;
    &:hover {
      color: #085ff7;
      transition: 0.2s ease-in-out;
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 5%;
  width: 150px;
  @media (max-width: 990px) {
    width: 100px;
  }
`;
