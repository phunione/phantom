import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Table = ({ keys, titles, data }) => {
  const isValidDate = (dateString) => {
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    return moment(dateString, format, true).isValid()
  }

  const path = window.location.pathname
  console.log(path)

  return (
    <div className="h-screen overflow-auto">
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
                  {key === 'address' ? (
                    <div className="whitespace-pre-wrap">
                      {item[key] || 'null'}
                    </div>
                  ) : (typeof item[key] === 'object' &&
                      item[key].length === 0) ||
                    item[key] === undefined ? (
                    'null'
                  ) : typeof item[key] === 'string' ? (
                    isValidDate(item[key]) ? (
                      moment(item[key]).format('MMMM DD, YYYY')
                    ) : (
                      item[key]
                    )
                  ) : (
                    item[key].toString()
                  )}
                </td>
              ))}
              <td className="border p-2">
                <Link
                  to={`/edit${path}?id=${item._id}`}
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
