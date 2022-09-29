import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
//   height:50vh;
//   max-height:60vh;
  background-color: #e8f3fc;
  position: relative;
  padding:0px 50px;
  padding-bottom:40px;
      @media only screen and (max-width: 768px) {
           height:100vh;
  }
     @media only screen and (max-width: 680px) {
        height:100vh;          


  }
`;

export const Image = styled.img`
    height:50vh;
    max-height:60vh;
    position:absolute;
    right:40px;
    top:0px;
      @media only screen and (max-width: 680px) {
    bottom:10px;
    right:0px;
    margin-top:20%;
  }
`;

export const SearchDiv = styled.div`
  width:750px;
  height: 40%;
  max-height:40%;
  margin-top:3vh;
  z-index:1;
  border-radius: 10px;
  border-top: 10px solid #7eacfb;
  background: white;
  padding: 1rem;
  position: absolute;
  left:0%;
    @media only screen and (max-width: 960px) {
    width:90%;
    /* top:2px; */
  }
  @media only screen and (max-width: 660px) {
    width:100%;
    top:2px;
    padding-top:50px;
  }
  h3:nth-child(2) {
    margin-right:50%;
  }
  h3:nth-child(1) {
    margin-left:2%;
  }
`;

export const Flex = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`

export const Input = styled.input`
  width:35%;
  height:5.5vh;
  margin:0.5rem;
  outline:none;
  padding:1.2rem;
  font-size:1.2rem;
  border-radius: 10px;
  border:1px solid #afafaf;
  margin:none;
    @media only screen and (max-width: 990px) {
    width:30%;
  }
  @media only screen and (max-width: 768px) {
    width:90%;
  }
`;

export const SearchButton = styled.button`
  height:6vh;
  margin:0.5rem;
  width: 20%;
  border-radius: 10px;
  background-color:#085ff7;
  color:white;
  outline:none;
  border:none;
  @media only screen and (max-width: 990px) {
    width:30%;
  }
   @media only screen and (max-width: 768px) {
    width:90%;
  }
`;

export const JobContainer = styled.div`
  height: 20vh;
  border-radius: 10px;
  padding:1.3vw;
  flex-basis: 23.5vw;
  margin:0.5vw;
  flex-wrap:wrap;
  border: 1px solid #ECECEC;
`;


export const CompContainer = styled.div`
  height: 16vh;
  border-radius: 10px;
  padding: 1vw;
  margin: 0.4vw;
  border: 1px solid #ececec;
`;

export const Follow = styled.button`
  width:12vw;
  height:5vh;
  outline:none;
  border:none;
  margin:2vh;
  background:#085ff7;
  transition:0.3s ease-in-out;
  color:white;
  border-radius:30px;
  &:hover {
    cursor:pointer;
    background:#4488ff;
    transition:0.3s ease-in-out
  }
`;

export const Faq = styled.div`
  width:230px;
  height:auto;
  padding:20px;
  font-size:0.8rem;
  color:#6f6f6f;
  margin-left:-50px;
  border:1px solid #afafaf;
`;