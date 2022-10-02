import { Button } from "@chakra-ui/react"
import styles from './Searchbox.module.css';


 export const Pagination = ({current,onChange,count}) => {

const prev = (


<Button onClick={()=>onChange(current-1)}  disabled={current===1} >PREV</Button>


)



const Current = (


    <Button >{current}</Button>
    
    
    )



    
const Next = (


    <Button  onClick={()=>onChange(current+1)} >Next</Button>
    
    
    )



return(
<div className={styles.pagination}>

<Button onClick={()=>{
    onChange(current-1) 
    count(true)}} 
    disabled={current===1}  >PREV</Button>


<Button >{current}</Button>

<Button  onClick={()=>{
    
    onChange(current+1)
   count(true)
    
    }} >Next</Button>
      
</div>
)



}