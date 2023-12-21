import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../redux/actions/dataActions.js'
import { useEffect } from 'react'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'
import Table from '../components/Table.jsx'

const UniqueRelationScreen = () => {
  const keys = ['company', 'actor', 'owner', 'banker']
  const titles = ['Company', 'Actor', 'Owner', 'Banker']

  const dispatch = useDispatch()
  const allData = useSelector((state) => state.allData)
  const deleteData = useSelector((state) => state.deleteData)

  const { loading, data, error } = allData
  const { data: delData } = deleteData

  useEffect(() => {
    dispatch(getAllData('company/unique-relation'))
  }, [dispatch, delData])

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <div className={'flex h-screen items-center justify-center'}>
          <Loader className={'loading-lg'} />
        </div>
      ) : error ? (
        <div className={'flex h-screen items-center justify-center'}>
          <Message
            variant={'error'}
            message={error}
            className={'mb-5'}
            appear={true}
          />
        </div>
      ) : data && data.length > 0 ? (
        <Table keys={keys} data={data} titles={titles} forUniqueRelation />
      ) : (
        <div className={'flex h-screen items-center justify-center'}>
          No Data Found
        </div>
      )}
    </div>
  )
}

export default UniqueRelationScreen
