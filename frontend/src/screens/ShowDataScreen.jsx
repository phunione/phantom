import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../redux/actions/dataActions'
import fields from '../utility/fields'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

function ShowDataScreen({ dataFor }) {
  const [filteredData, setFilteredData] = useState()
  const [searchTerm, setSearchTerm] = useState()

  const dispatch = useDispatch()
  const allData = useSelector((state) => state.allData)
  const deleteData = useSelector((state) => state.deleteData)

  const { loading, data, error } = allData
  const { success } = deleteData

  const keys = []
  const titles = []

  fields[dataFor].map((a) => keys.push(a.name))
  fields[dataFor].map((a) => titles.push(a.title))

  const handleSearch = (e) => {
    const term = e.target.value

    setSearchTerm(term)

    setFilteredData(
      data.filter((d) => d.name.toLowerCase().includes(term.toLowerCase())),
    )
  }

  useEffect(() => {
    dispatch(getAllData(dataFor))
    setSearchTerm('')
    setFilteredData()
  }, [dispatch, dataFor, success])

  return (
    <div className="h-screen overflow-hidden">
      <div className={'my-4 flex flex-wrap items-center justify-center'}>
        <div className="group relative z-0 mb-5 ">
          <input
            type={'text'}
            id={'search'}
            name={'search'}
            className="peer block w-5/6 appearance-none rounded-lg border border-amber-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-amber-200 focus:border-yellow-200 focus:outline-none focus:ring-0"
            placeholder=" "
            value={searchTerm}
            onChange={handleSearch}
          />
          <label
            htmlFor={'search'}
            className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text bg-base-100 px-2 text-sm capitalize text-amber-100 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-amber-200"
          >
            Search
          </label>
        </div>
      </div>
      {loading ? (
        <div
          className={
            'flex h-[83vh] items-center justify-center overflow-hidden'
          }
        >
          <Loader className={'loading-lg'} />
        </div>
      ) : error ? (
        <div
          className={
            'flex h-[83vh] items-center justify-center overflow-hidden'
          }
        >
          <Message variant={'error'} message={error} className={'mb-5'} />
        </div>
      ) : filteredData?.length === 0 ? (
        <div className={'flex h-[83vh] items-center justify-center'}>
          No Data Found
        </div>
      ) : data && data?.length > 0 ? (
        <div className="h-[83vh] w-full overflow-y-scroll">
          <Table
            keys={keys}
            titles={titles}
            data={filteredData ? filteredData : data}
          />
        </div>
      ) : (
        <div
          className={
            'flex h-[83vh] items-center justify-center overflow-hidden'
          }
        >
          No Data Found
        </div>
      )}
    </div>
  )
}

export default ShowDataScreen
