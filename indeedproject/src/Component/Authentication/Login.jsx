import {
    Button,
    Container,
    FormControl,
    Heading,
    Highlight,
    Input,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { StarIcon } from "@chakra-ui/icons";
  import { ImArrowRight2 } from "react-icons/im";
  import { FcGoogle } from "react-icons/fc";
  import { BsFacebook, BsApple } from "react-icons/bs";
  import { useNavigate } from "react-router-dom";
  import {signInWithEmailAndPassword,updateProfile ,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
  import {auth} from "../../Firebase"


  
export const Login = () => {
    const navigate=useNavigate()
    const [value, setValue] = useState({
      email: "",
      pass: "",
    });
     const [submitButtonDisable,setSubmitButtonDisable] = useState(false);
    const [errMgs,setErrMsg] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value.email || !value.pass) {
        alert("Please fill details")
          return;
      }
      // console.log(value);
      signInWithEmailAndPassword(auth,value.email,value.pass)
      .then(async(res)=>{
        setSubmitButtonDisable(false);
       
        const user = res.user;
        await updateProfile(user,{
          email:value.email
        });
           navigate("/")
      }).catch((err)=>{
           setSubmitButtonDisable(false);
          setErrMsg(err.message)
          // console.log(err)
      })
    };

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res.data);
          const email = res.user.email;
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    
  return (
    <div>
           <Container my="5vh" centerContent>
        {/* <Image src={logo} height="10" width="80" my="30px" /> */}
        <VStack
          bg={"white"}
          w={"100%"}
          py="8"
          px="5"
          rounded="md"
          align={"left"}
          boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          }
        >
          <Heading fontSize={22}>Login In</Heading>
          <Text>before applying on company site1</Text>
          <div></div>
          <Text fontSize={"xs"}>
            <Highlight
              query={["Terms", "Cookie", "Privacy"]}
              styles={{ color: "blue", cursor: "pointer" }}
            >
              You may also apply directly on the company’s website. By creating
              an account or logging in, you understand and agree to Indeed's
              Terms. You also acknowledge our Cookie and Privacy policies.
            </Highlight>
          </Text>
          <Button
            leftIcon={<FcGoogle />}
            fontWeight={"600"}
            variant={"outline"}
            justifyContent="space-between"
            rightIcon={<div />}
            onClick={signInWithGoogle}
            navigate="/"
          >
            Continue with Google
          </Button>

          <Button
            leftIcon={<BsApple />}
            fontWeight={"600"}
            variant={"outline"}
            justifyContent="space-between"
            rightIcon={<div />}
          >
            Continue with Apple
          </Button>
          <Button
            leftIcon={<BsFacebook color="rgb(24 119 242)" />}
            fontWeight={"600"}
            variant={"outline"}
            justifyContent="space-between"
            rightIcon={<div />}
          >
            Continue with Facebook
          </Button>
          <form>
            <FormControl>
              <Text>
                <b>
                  Email address <StarIcon w="2" mt={-3} color="red.500" />
                </b>
              </Text>
              <Input
                placeholder="Enter email address"
                size="md"
                type={"email"}
                _focus={{
                  borderColor: "rgb(37, 87, 167)",
                  boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
                }}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
              <Text>
                <b>
                  Password <StarIcon w="2" mt={-3} color="red.500" />
                </b>
              </Text>
              <Input
                placeholder="Enter password"
                size="md"
                type={"password"}
                _focus={{
                  borderColor: "rgb(37, 87, 167)",
                  boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
                }}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, pass: e.target.value }))
                }
                required
              />
            </FormControl>

            <Button
              w="100%"
              my="5"
              type="submit"
              colorScheme="facebook"
              fontWeight={"bold"}
              rightIcon={<ImArrowRight2 />}
              onClick={handleSubmit}
              disabled={submitButtonDisable}
              
              //   isLoading={state.isLoading ? "YES" : ""}
              //   loadingText="Verifying Email address"
            >
              Continue
            </Button>
          </form>
        </VStack>
      </Container>
    </div>
  )
}
