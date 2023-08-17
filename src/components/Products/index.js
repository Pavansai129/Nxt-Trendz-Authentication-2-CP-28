import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
// Write your JS code here
const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
      <p>Products</p>
    </>
  )
}

export default Products
