import { useDispatch, useSelector } from 'react-redux'
import { getExcelCompanyData } from '../redux/actions/dataActions.js'
import { useEffect } from 'react'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'
import Table from '../components/Table.jsx'

const ExcelCompanyScreen = () => {
  const keys = [
    'companyname',
    'mailid',
    'panno',
    'dob',
    'querydate',
    'mobileno',
    'status',
    'address',
    'jurisdiction',
    'ownerpan',
    'ownername',
    'trnno',
  ]
  const titles = [
    'Company Name',
    'Mail ID',
    'PAN No',
    'DOB',
    'Query Date',
    'Mobile No',
    'Status',
    'Address',
    'Jurisdiction',
    'Owner PAN',
    'Owner Name',
    'TRN No',
  ]

  const dispatch = useDispatch()
  const excelCompanyData = useSelector((state) => state.excelCompanyData)
  const deleteData = useSelector((state) => state.deleteData)

  const { loading, data, error } = excelCompanyData
  const { data: delData } = deleteData

  useEffect(() => {
    dispatch(getExcelCompanyData())
  }, [dispatch, delData])

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <div className={'flex h-screen items-center justify-center'}>
          <Loader className={'loading-lg'} />
        </div>
      ) : error ? (
        <div className={'flex h-screen items-center justify-center'}>
          <Message variant={'error'} message={error} className={'mb-5'} />
        </div>
      ) : data && data.length > 0 ? (
        <Table keys={keys} data={data} titles={titles} />
      ) : (
          <div className={'flex h-screen items-center justify-center'}>
            No Data Found
          </div>
      )}
    </div>
  )
}

export default ExcelCompanyScreen
