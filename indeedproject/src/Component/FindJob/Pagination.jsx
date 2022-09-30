import { Button } from "@chakra-ui/react"



 export const Pagination = ({current,onChange}) => {

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
<>

{prev}
{Current}
{Next}
</>
)



}