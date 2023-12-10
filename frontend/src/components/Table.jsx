import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { deleteData } from '../redux/actions/dataActions.js'

const Table = ({ keys, titles, data }) => {
  const dispatch = useDispatch()

  const path = window.location.pathname

  const handleDelete = (path, id) => {
    console.log('clicked')
    dispatch(deleteData(path, id))
  }

  const isValidDate = (dateString) => {
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    return moment(dateString, format, true).isValid()
  }

  return (
    <div className="h-screen overflow-auto">
      {/* eslint-disable-next-line react/prop-types */}
      {data.length ? (
        <table className="min-w-full border bg-white">
          <thead className="sticky top-0 z-30 bg-white">
            <tr>
              <th className="sticky left-0 top-0 z-10 border bg-white p-2 capitalize">
                {titles[0]}
              </th>
              {titles.slice(1).map((title, index) => (
                <th key={index} className="w-40 border p-2 capitalize">
                  {title}
                </th>
              ))}
              <th
                colSpan={2}
                className="sticky right-0 top-0 z-10 border bg-white p-2 capitalize"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="sticky left-0 top-0 z-10 w-40 border bg-white p-2 text-center">
                  {(typeof item[keys[0]] === 'object' &&
                    item[keys[0]].length === 0) ||
                  item[keys[0]] === undefined
                    ? 'null'
                    : typeof item[keys[0]] === 'string'
                    ? isValidDate(item[keys[0]])
                      ? moment(item[keys[0]]).format('MMMM DD, YYYY')
                      : item[keys[0]]
                    : item[keys[0]].toString()}
                </td>
                {keys.slice(1).map((key, index) => (
                  <td key={index} className="w-40 border p-2 text-center ">
                    {
                      key === 'address'
                        ? item[key] || 'null' // Show address
                        : (typeof item[key] === 'object' &&
                            item[key].length === 0) ||
                          item[key] === undefined ||
                          item[key].trim() === ''
                        ? 'null' // Checking If the item[key] is object
                        : typeof item[key] === 'string'
                        ? isValidDate(item[key]) // if the item[key] is a valid date
                          ? moment(item[key]).format('MMMM DD, YYYY') // show the date in a format
                          : item[key] // else show the string only
                        : item[key].toString() // if nothing of the above, we just convert the value to a string and show it
                    }
                  </td>
                ))}
                <td
                  colSpan={2}
                  className="sticky right-0 top-0 z-10 border bg-white px-1 py-2"
                >
                  <Link
                    to={`/edit${path}?id=${item._id}`}
                    className="mr-1 inline rounded bg-blue-500 px-2 py-1 text-white transition-colors hover:bg-blue-600"
                  >
                    <i className="fal fa-pencil"></i>
                  </Link>
                  <button
                    onClick={() => handleDelete(path, item._id)}
                    className="inline rounded bg-red-500 px-2 py-1 text-white transition-colors hover:bg-red-600"
                  >
                    <i className="fal fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex h-full items-center justify-center">
          <h1 className="text-center text-7xl">No Data Found</h1>
        </div>
      )}
    </div>
  )
}

export default Table
