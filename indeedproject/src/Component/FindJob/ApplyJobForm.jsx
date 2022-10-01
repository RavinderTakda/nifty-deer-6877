import { Heading, Input, useDisclosure ,Text, Button, Box, Modal, ModalOverlay} from "@chakra-ui/react"
import { MdOutlineUploadFile} from 'react-icons/md';
import styles from './Searchbox.module.css';


 export const ApplyJobForm = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()



return(
<div>

<Modal  isOpen={isOpen} onClose={onClose}>
        
<ModalOverlay/>






</Modal>









    <Box className={styles.resumebox}>
    <Heading size={"l"}>Add your contact information</Heading>
  
 
    <Text className={styles.text}>First name</Text>
    <Input  className={styles.resumeinput} ></Input>
    <Text className={styles.text}>Last name</Text>
    <Input className={styles.resumeinput} ></Input>
    <Text className={styles.text}>Email</Text>
    <Input className={styles.resumeinput} ></Input>
    <Text className={styles.text}>City, State(optional)</Text>
    <Input className={styles.resumeinput} ></Input>
    <Text className={styles.text}>Phone number</Text>
    <Input className={styles.resumeinput} ></Input>
    <Text className={styles.text}>Upload resume</Text>
    <Box className={styles.uploadresume}>
        
    
        <MdOutlineUploadFile size={"35px"}/>
    
    <Input className={styles.uploadresumeinput}  type={"file"} placeholder={"Upload resume"}></Input>
    </Box>
    <Button className={styles.resumebutton} colorScheme='teal'>Submit</Button>


    </Box>





</div>




)





}