import React from "react";
import './Products.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Products=()=>{
    const [parent]= useAutoAnimate()

    const [MenuProducts,setMenuProducts]=useState(ProductsData)

    const filter=(type)=>{
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }

    return(
        <div className="product-container">
            <img src={Plane} alt="" />
            <span>Our Featured Products</span>

            <div className="products">
                <ul className="product-menu">
                    <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                    <li onClick={()=>filter("skin care")}>Skin Care</li>
                    <li onClick={()=>filter("conditioner")}>Conditioner</li>
                    <li onClick={()=>filter("foundation")}>Foundation</li>
                </ul>

                <div className="list" ref={parent}>
                    {MenuProducts.map((product,i)=>(
                        <div className="product">
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Shop Now</div>
                            </div>

                            <img src={product.img} alt="product" className="img-product" />
                            
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Products