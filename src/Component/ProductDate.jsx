import { useState } from "react"



const ProductDate=()=>{
let [Get_Filter, update_Filter]=useState('')

function Get_Filter_update(event){
    const selectedValue=event.target.value
    update_Filter(selectedValue)
    console.log('selected filter:', selectedValue)
}



    return(
        <>
    <select name="Product Filter" id="" value={Get_Filter} onChange={Get_Filter_update}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
    </select>
    </>
    )
}
 export default ProductDate