import { useEffect } from 'react'
import SideNavBar from '../components/SideNavbar'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../redux/actions/dataActions'
import fields from '../utility/fields'

function ActorScreen({ dataFor }) {
  const dispatch = useDispatch()
  const allData = useSelector((state) => state.allData)
  const { loading, data, error } = allData



  const keys = []
  const titles = []

  fields.actor.map((a) => keys.push(a.name))
  fields.actor.map((a) => titles.push(a.title))

  useEffect(() => {
    dispatch(getAllData(dataFor))
  }, [dispatch])

  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : data ? (
    <div className="w-full">
      <Table keys={keys} titles={titles} data={data} />
    </div>
  ) : (
    <div>Nothing</div>
  )
}

export default ActorScreen
