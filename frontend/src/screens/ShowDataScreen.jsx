import { useEffect } from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../redux/actions/dataActions'
import fields from '../utility/fields'

function ShowDataScreen({ dataFor }) {
  const dispatch = useDispatch()
  const allData = useSelector((state) => state.allData)
  const deleteData = useSelector((state) => state.deleteData)

  const { loading, data, error } = allData
  const { success } = deleteData

  const keys = []
  const titles = []

  fields[dataFor].map((a) => keys.push(a.name))
  fields[dataFor].map((a) => titles.push(a.title))

  useEffect(() => {
    dispatch(getAllData(dataFor))
  }, [dispatch, dataFor, success])

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

export default ShowDataScreen
