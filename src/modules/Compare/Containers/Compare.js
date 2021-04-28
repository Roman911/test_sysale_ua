import { useSelector } from 'react-redux'
import { MainLayout } from "../../../Components"
import { CompareComponents } from "../Components"

export const Compare = () => {
  const { compare } = useSelector(state => state.compare)

  return <MainLayout >
    <CompareComponents compare={ compare } />
  </MainLayout>
}