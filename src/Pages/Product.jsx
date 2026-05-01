import { useState } from "react"
import Footer from "../Component/Footer"
import Header from "../Component/Header"
import ProductArea from "../Component/ProductArea"
import ProductBanner from "../Component/ProductBanner"
import ProductForm from "../Component/ProductForm"

let Items =[
    {
        productID:1,
        productName:"classNameic Spring",
        productPrice:"$120.00",
        productImage:"assets/images/men-01.jpg",
        productStatus: true
    },
    {
         productID:2,
        productName:"Air Force 1 X",
        productPrice:"$90.00",
        productImage:"assets/images/men-02.jpg" ,
        productStatus: true
    },
    {
         productID:3,
        productName:"Love Nana ‘20",
        productPrice:"$150.00",
        productImage:"assets/images/men-03.jpg",
        productStatus: true
    }
]


const Product =()=>{
let  [newProduct,updateProduct]= useState(Items)

    function fetchProduct(fetch_Product){
       const productItem={
        ...fetch_Product,
        productID:Date.now(),
       }
       updateProduct(prev=>[productItem,...prev])
    }
    
    
    return(
        <>
        <Header></Header>
        <ProductBanner></ProductBanner>
        <ProductArea newProduct={newProduct}></ProductArea>
        <ProductForm fetchProduct={fetchProduct}></ProductForm>
        <Footer></Footer>
        </>
    )
}
export default Product