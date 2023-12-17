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

  const { loading, data, error } = excelCompanyData

  useEffect(() => {
    dispatch(getExcelCompanyData())
  }, [dispatch])

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={'error'} message={error} className={'mb-5'} />
      ) : data && data.length > 0 ? (
        <Table keys={keys} data={data} titles={titles} />
      ) : (
        <>No Data Found</>
      )}
    </div>
  )
}

export default ExcelCompanyScreen
