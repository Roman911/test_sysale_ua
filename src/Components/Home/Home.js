import { MainLayout } from "../"
import { Card } from '../../modules'
import { cardItems } from './products'

export const Home = () => {
  return <MainLayout >
    { cardItems.map(item => {
      return <Card key={ item.id } item={ item } />
    }) }
  </MainLayout>
}