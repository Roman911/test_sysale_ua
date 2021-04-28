import './styles.scss'

export const ButtonSelect = ({ quantity, addQuantity, removeQuantity }) => {
  return <span className='btns row'>
    <button onClick={ () => removeQuantity() } className='btns__select' disabled={ quantity === 1 }>-</button>
    { quantity }
    <button onClick={ () => addQuantity() } className='btns__select'>+</button>
  </span>
}