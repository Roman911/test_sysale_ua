import classNames from "classnames/bind"
import './styles.scss'
import compare from '../../../assets/compare.svg'
import vector from '../../../assets/vector.svg'
import arrow from '../../../assets/arrow.svg'
import { Button, ButtonSelect } from "../../../Components"

export const CardComponent = ({ item, colorsActive, handleClick, changeColor, changeVolume, data, price, quantity, addQuantity, removeQuantity, addToComparison, compareInc, addToCart, cartInc }) => {
  const { state, img, title, text, value, colors } = item
  const className = classNames('info__select', { 'active': colorsActive })
  const classArrow = classNames('info__arrow', { 'active': colorsActive })

  return <div className='card'>
    <div className='card__header'>
      {
        state && <span className='header__state'>
          { state }
        </span>
      }
      <div className='header__block'>
        <img className='header__img' src={`/static/images/${img}`} alt={ title }/>
      </div>
      <img onClick={ () => addToComparison() } className='header__compare' src={ compareInc ? vector : compare } alt="Compare"/>
    </div>
    <h3 className='header__title'>{ title }</h3>
    <p className='header__text'>{ text }</p>
    <div className='info'>
      <div className='row info__colors'>
        <div className='info__header' onClick={ () => handleClick() }>
          <div className='info__title'>Цвет</div>
          <img className={ classArrow } src={ arrow } alt="Arrow"/>
        </div>
        <div className={ className }>
          { colors.map(i => <div key={ i } onClick={ () => changeColor(i) } className='info__title info__option'>{ i }</div>) }
        </div>
      </div>
      <h5>{ price } грн</h5>
    </div>
    <div className='form'>
      {
        value.map((i, index) => {
          return <label className='container' key={ index } >
            <input type="radio" value={ i.volume } onChange={ () => changeVolume({ volume: i.volume, price: i.price }) } checked={ data.volume === i.volume } />
            { i.volume }
            <span className="checkmark" />
          </label>
        })
      }
    </div>
    <div className='card__buttons'>
      <ButtonSelect quantity={ quantity } addQuantity={ addQuantity } removeQuantity={ removeQuantity } />
      <Button handleClick={ addToCart } btnName='Купить' disable={ cartInc } />
    </div>
  </div>
}