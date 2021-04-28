import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { CardComponent } from "../Components/CardComponent"
import { cartActions, compareActions } from '../../../redux/actions'

export const Card = ({ item }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { cart, compare } = useSelector(state => state)
  const [ colorsActive, setColorsActive ] = useState(false)
  const [ color, setColor ] = useState('Желтый')
  const [ data, setData ] = useState({ volume: '100 мл', price: 200 })
  const [ quantity, setQuantity ] = useState(1)
  const [ price, setPrice ] = useState(200)

  const compareInc = compare.compare.map(i => i.id).includes(item.id)
  const cartInc = cart.cart.map(i => i.id).includes(item.id)

  const handleClick = () => {
    setColorsActive(prev => !prev)
  }

  const changeColor = color => {
    setColor(color)
    handleClick()
  }

  const changeVolume = data => {
    setData(data)
    setPrice(data.price * quantity)
  }

  const addQuantity = () => {
    setQuantity(prev => prev +1)
    setPrice(data.price * (quantity +1))
  }

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev -1)
      setPrice(data.price * (quantity -1))
    }
  }

  const addToComparison = () => {
    if (compareInc) {
      history.push("/compare")
    } else {
      dispatch(compareActions.addToComparison({
        id: item.id,
        img: item.img,
        title: item.title,
        color,
        structure: item.structure,
        volume: data.volume,
        price: data.price
      }))
    }
  }

  const addToCart = () => {
    if (!cartInc) {
      dispatch(cartActions.addToCart({
        id: item.id,
        img: item.img,
        title: item.title,
        color,
        volume: data.volume,
        price: data.price,
        quantity
      }))
    }
  }

  return <CardComponent
    item={ item }
    colorsActive={ colorsActive }
    handleClick={ handleClick }
    changeColor={ changeColor }
    changeVolume={ changeVolume }
    data={ data }
    price={ price }
    quantity={ quantity }
    addQuantity={ addQuantity }
    removeQuantity={ removeQuantity }
    addToComparison={ addToComparison }
    compareInc={ compareInc }
    addToCart={ addToCart }
    cartInc={ cartInc }
  />
}