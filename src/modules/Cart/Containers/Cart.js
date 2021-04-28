import { useDispatch, useSelector } from 'react-redux'
import { CartComponents } from "../Components"
import { MainLayout } from "../../../Components"
import { cartActions } from '../../../redux/actions'

export const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)

  const removeProducts = id => {
    dispatch(cartActions.removeToCart(id))
  }

  return <MainLayout >
    <CartComponents cart={ cart } removeProducts={ removeProducts } />
  </MainLayout>
}