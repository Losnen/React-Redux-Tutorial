import React, { PropTypes } from 'react'

const ProductDetail = ({ loading, product, onAddItem }) => {
  if (!loading && product) {
    const { name, description, image, price, deliveryStimate, category } = product

    return (
      <section className='container'>
        <div className='row'>
          <figure className='figure col-lg-6'>
            <img src={image} alt={description} className='figure-img img-thumbnail rounded' />
          </figure>
          <div className='col-lg-6'>
            <br />
            <h5>{name}</h5>
            <p>{description}</p>
            <ul className='list-group'>
              <li className='list-group-item'>
                Precio: <strong> {price} &euro;</strong>
              </li>
              <li className='list-group-item'>
                Entrega: <strong> {deliveryStimate}</strong>
              </li>
              <li className='list-group-item'>
                Categoría: <span className='badge badge-pill badge-info'> {category}</span>
              </li>
            </ul>
            <br />
            <button
              className='btn btn-primary'
              onClick={() => onAddItem(product)}
            >
              <span className='fa fa-cart-plus' /> Añadir al carrito
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <span> Cargando...</span>
  )
}

ProductDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  product: PropTypes.object,
  onAddItem: PropTypes.func
}

export default ProductDetail
