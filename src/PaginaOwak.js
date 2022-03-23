import React, { useEffect, useState } from 'react'
import { GridImage } from './GridImage';
import { GridProducts } from './GridProducts';



const PaginaOwak = () => {

    const [imagenes, setimagenes] = useState([])
    
    useEffect(() => {
      getGist();
      
    }, [])
    
    
    const getGist= async()=>{
            
            const resp = await fetch( "json/categories.json" );
            const {categories} = await resp.json();
            
           
           const categorias = categories.map(img =>{
               return {
                   id: img.id,
                   title: img.name,
                   url: img.image
               }
           })
           console.log(categorias);
           setimagenes( categorias)
            
    }

    const [productos, setproductos] = useState([])
    
    useEffect(() => {
        getProduct();
      
    }, [])
    
    
    const getProduct= async()=>{
            
            const resp = await fetch( "json/products.json" );
            const {products} = await resp.json();
            
           
           const productos = products.map(img =>{
               return {
                   id: img.id,
                   title: img.name,
                   url: img.image,
                   price:img.price,
               }
           })
           console.log(productos);
           setproductos( productos )
            
    }




    return (
        <>
            <header className='container' >
                <nav className='nav-item'>
                    <li>Nosotros</li>
                    <li>Producto</li>
                    <li>Contacto</li>
                </nav>
                <div className='header-nav'>
                    <div className='header-item1'>
                        <h2>Mi Venta de Garage</h2>
                        <p>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <button><span>Conoce más</span><img src='arrow.png' className='arrow'></img></button>
                    </div>
                    <div>
                        <img src='mi-venta-de-garage.png'></img>
                    </div>

                </div>
                
            </header>
            <h2>Categorias</h2>
                <div className='card-grid'>
                {
                    
                    imagenes.map( (img)=> (
                        
                        <GridImage 
                            {...img}
                            key={img.id}
                        />
                    ))

                    

                
                     
                }
                </div>
            <article>
                <h2>Productos</h2>
                    <div className='card-grid-product'>
                    
                        {
                            productos.map( (img)=> (
                                    
                                <GridProducts 
                                    {...img}
                                    key={img.id}
                                />
                            ))

                        }
                    </div>
            
            </article>   
            <footer className='footer-container'>
                <div className='footer-item'>
                    <p>Owak</p>
                    <p>Copyright ©</p>
                </div>
                
            </footer>
            
           
           
        </>
      )
}

export default PaginaOwak