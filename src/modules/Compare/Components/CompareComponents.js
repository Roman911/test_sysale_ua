import './styles.scss'

export const CompareComponents = ({ compare }) => {
  return <div className='compare'>
    <h1>Порівняння</h1>
    <div>
      <div className='compare__product'>
        <div className='compare__left' />
        <div className='row'>
          {
            compare.map(i => {
              return <div key={ i.id } className='compare__block'>
                <img className='compare__img' src={`/static/images/${i.img}`} alt={ i.title } />
              </div>
            })
          }
        </div>
      </div>
      <div className='compare__product'>
        <div className='compare__left' />
        <div className='row'>
          {
            compare.map(i => {
              return <div key={ i.id } className='compare__text'>
                <h3>{ i.title }</h3>
              </div>
            })
          }
        </div>
      </div>
    </div>
  </div>
}