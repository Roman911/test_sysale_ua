import './styles.scss'

export const Button = ({ handleClick, btnName, disable }) => {
  return <button onClick={ () => handleClick() } className='btn' disabled={ disable }>
    { btnName }
  </button>
}