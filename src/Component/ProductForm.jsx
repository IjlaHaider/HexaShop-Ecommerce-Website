import { useState } from "react"
import Product from "../Pages/Product"

const ProductForm =(props)=>{

let [ProductName,updateProductName]=useState('')
let [ProductPrice,updateProductPrice]=useState('')
let [ProductImage,updateProductImage]=useState('')
let [productStatus,updateProductStatus]=useState(false)

// let [productInfo,updateInput,]=useState({
//  pName:'',
//  pPrice:'',
//  pImage:'',
// })

function getProductName (event){
    updateProductName(event.target.value)
    //updateInput(...event,event.target.value)
}

function getProductPrice (event){
    updateProductPrice(event.target.value)
}

function getProductStatus (event){
    updateProductStatus(event.target.checked)
}

function getProductImage (event){
    updateProductImage(event.target.value)
}

function SaveProduct(event){
    event.preventDefault()
    let Product= {
        productID:Date.now(),
        productName:ProductName,
        productPrice:ProductPrice,
        productImage:ProductImage,
        productStatus:productStatus
    }
   props.fetchProduct(Product)
   console.log(Product)

   updateProductName('')
   updateProductPrice('')
   updateProductStatus(false)
   updateProductImage('')
}

    return(
<div className="container">
            <div className="row">
                 <div className="col-4 mx-auto">


        <form onSubmit={SaveProduct}>
  <div className="form-group">
    <label >Product Name</label>
    <input type="text" className="form-control" onChange={getProductName}/>
  </div>

  <div className="form-group">
    <label >Product Price</label>
    <input type="number" className="form-control" onChange={getProductPrice}/>
  </div>


  <div className="form-group">
    <label >Product Image</label>
    <input type="file" className="form-control" onChange={getProductImage} />
  </div>

<div className="form-group form-check">
    <label className="form-check-label" >Active Status</label>
    <input type="checkbox" className="form-check-input"  checked={productStatus}onChange={getProductStatus} />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
   </div>
  </div>
  
    )
}
export default ProductForm