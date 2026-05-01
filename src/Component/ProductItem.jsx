

const ProductItem =(props)=>{
    return(
 
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src={props.pImage}/>
                        </div>
                        <div className="down-content">
                            <h4>{props.pName}</h4>
                            <span>{props.pPrice}</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
        
    )
}
export default ProductItem