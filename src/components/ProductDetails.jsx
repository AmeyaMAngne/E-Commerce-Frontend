import React from 'react'

function ProductDetails({productName, productDesc, rate, category, id}) {

    function addToCart(){
        fetch(`${process.env.REACT_APP_API_URL}/cart/add`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                productId:id,
            })
        }).then(res=>res.json()).then((data)=>{console.log(data)}).catch((err)=>console.log(err));
    }

  return (
    <div className="p-8 flex flex-col">
        <h3 className='text-4xl mb-2'>{productName || "Product Name"}</h3>
        <hr />
        <h3 className='text-2xl text-slate-800'>{category || "Category"}</h3>
        <h3 className='text-3xl mt-5'>{rate || "999"}</h3>
        <h3 className='text-slate-400'>Inclusive of All Taxes</h3>
        <ul className='flex gap-1 items-center mt-4'>
            <label className='mr-2'>Size:</label>
            <li className='bg-slate-900 w-fit px-3 p-2 rounded-full text-white'>M</li>
            <li className='bg-slate-500 w-fit px-4 p-2 rounded-full text-white'>L</li>
            <li className='bg-slate-500 w-fit px-3 p-2 rounded-full text-white'>XL</li>
            <li className='bg-slate-500 w-fit p-2 rounded-full text-white'>XXL</li>
        </ul>
        <button className='w-full p-2 border mt-4 hover:bg-black hover:text-white'>BUY NOW</button>
        <div className="w-full flex mt-2 gap-2">
            <button className="w-1/2 border p-2 hover:bg-black hover:text-white" onClick={addToCart}>ADD TO CART</button>
            <button className="w-1/2 border p-2 hover:bg-black hover:text-white">ADD TO WISHLIST</button>
        </div>
        <hr className='my-12'/>
        <h3 className='text-xl mb-2'>Product Description</h3>
        <p className='text-md pr-5'>{productDesc}</p>
        <hr className="my-5" />
        <h3 className='text-xl mb-2'>Product Details</h3>
        <div className="grid gird-rows-4 grid-cols-2 text-md gap-2">
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
            <div>
                <h4 className='text-slate-500'>Style Code:</h4>
                <h5>ABCD1234</h5>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails