import { useEffect } from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../redux/actions/dataActions'
import fields from '../utility/fields'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

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
    <div className={'flex h-screen items-center justify-center'}>
      <Loader className={'loading-lg'} />
    </div>
  ) : error ? (
    <div className={'flex h-screen items-center justify-center'}>
      <Message variant={'error'} message={error} className={'mb-5'} />
    </div>
  ) : data && data.length > 0 ? (
    <div className="w-full">
      <Table keys={keys} titles={titles} data={data} />
    </div>
  ) : (
    <div className={'flex h-screen items-center justify-center'}>
      No Data Found
    </div>
  )
}

export default ShowDataScreen
