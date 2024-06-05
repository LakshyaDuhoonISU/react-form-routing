import { useState } from 'react'
import './CreateProduct.css'

function CreateProduct() {

    // let [name,setName]=useState("")
    let [product, setProduct] = useState({});

    const handleInput = () => {
        let copyProduct = { ...product };
        copyProduct[event.target.name] = event.target.value;
        setProduct(copyProduct);

        // alternate one line code
        // setProduct({...product,[event.target.name]:event.target.value});
    }

    function handleSubmit() {
        event.preventDefault();
        console.log(product);

        fetch("url",{
            method:"POST",
            body:JSON.stringify(product),
            headers: {
                "cContent-Type":"application/json"
            }
        })
        .then((response)=>{})
        .catch((err)=>{console.log(err);})
    }

    return (
        <>
            <section className="form-parent">
                <form className='form' onSubmit={handleSubmit}>
                    <h1>Add Product</h1>
                    {name}
                    <input type="text" className='inp' required name="name" placeholder="Enter name"
                        onChange={handleInput} />
                    <input type="text" className='inp' name="price" placeholder="Enter price"
                        onChange={handleInput} />
                    <input type="text" className='inp' name="category" placeholder="Enter category"
                        onChange={handleInput} />
                    <input type="number" className='inp' name="quantity" placeholder="Enter quantity"
                        onChange={handleInput} />
                    <input type="text" className='inp' name="description" placeholder="Enter description"
                        onChange={handleInput} />
                    <button className='btn'>Add</button>
                </form>

            </section>
        </>
    )
}

export default CreateProduct