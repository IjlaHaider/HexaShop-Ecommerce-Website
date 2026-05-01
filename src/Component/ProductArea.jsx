import { useState } from "react"
import Product from "../Pages/Product"
import ProductItem from "./ProductItem"




const ProductArea =(props)=>{
    const [selectedFilter, setSelectedFilter]=useState('all')
    const product =props.newProduct || []
    let displayProducts =product
if (selectedFilter==='available'){
    displayProducts=product.filter(product=>product.productStatus===true)
}
else if (selectedFilter==='unavailable'){
    displayProducts = product.filter(product=>product.productStatus===false)

}
else{
    displayProducts=product
}

    // console.log(props.newProduct)
    return(
        // <!-- ***** Products Area Starts ***** -->
    <section className="section" id="products">
       <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Our Latest Products</h2>
                        <span>Check out all of our products.</span>
                        
                    </div>
                    <div>
                        <select value={selectedFilter}  onChange={event=>setSelectedFilter(event.target.value)}>
                             <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
   <div className="container">
    <div className="row">
       {
         displayProducts.map((Product)=>{
         return <ProductItem 
         key ={Product.productID}
         pID={Product.productID}
         pName={Product.productName}
         pPrice={Product.productPrice}
         pImage={Product.productImage}
       
         ></ProductItem>

          })
        }
  
  </div>
  </div>

       {/* <ProductItem 
       pID={Item[0].productID}
       pName={Item[0].productName}
       pPrice={Item[0].productPrice}
       pImage={Item[0].productImage}
       
       ></ProductItem>
        <ProductItem
        pID={Item[1].productID}
       pName={Item[1].productName}
       pPrice={Item[1].productPrice}
       pImage={Item[1].productImage}
       
        ></ProductItem>
         <ProductItem
         pID={Item[2].productID}
       pName={Item[2].productName}
       pPrice={Item[2].productPrice}
       pImage={Item[2].productImage}
       
         ></ProductItem> */}

          <div className="col-lg-12">
                    <div className="pagination">
                        <ul>
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li className="active">
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            
    </section>
    
    )
}
export default ProductArea