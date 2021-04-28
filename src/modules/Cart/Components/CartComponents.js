import './styles.scss'
import { ButtonSelect } from "../../../Components"
import deleteIcon from '../../../assets/delete.svg'

export const CartComponents = ({ cart, removeProducts }) => {

  return <div className='cart'>
    <h1>Кошик</h1>
    {
      cart.length === 0 && <h3>Ваш кошик пустий</h3>
    }
    {
      cart.map(i => {
        return <div key={ i.id } className='cart__product row'>
          <div className='row'>
            <div className='cart__block'>
              <img className='cart__img' src={`/static/images/${i.img}`} alt={ i.title } />
            </div>
            <h3 className='cart__title'>{ i.title }</h3>
          </div>
          <div className='row'>
            <h3 className='cart__item'>Колір: { i.color }</h3>
            <h3 className='cart__item'>Розмір: { i.volume }</h3>
            <div className='cart__btn'>
              <ButtonSelect quantity={ i.quantity } />
            </div>
            <h5 className='cart__item'>{ i.price }</h5>
            <img onClick={ () => removeProducts(i.id) } className='cart__icon' src={ deleteIcon } alt=""/>
          </div>
        </div>
      })
    }
  </div>
}