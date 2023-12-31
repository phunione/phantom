import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { deleteData } from '../redux/actions/dataActions.js'

const Table = ({ keys, titles, data, forUniqueRelation }) => {
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'
  const dispatch = useDispatch()

  const path = window.location.pathname

  const handleDelete = (path, id) => {
    if(window.confirm("Delete?")) dispatch(deleteData(path, id))
    else return;
  }

  const getNameForFile = (fileName) => {
    const arr = fileName.split('/')
    return arr[arr.length - 1]
  }

  const isValidDate = (dateString) => {
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    return moment(dateString, format, true).isValid()
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th className={'border border-amber-200 text-center capitalize'}>
              {titles[0]}
            </th>
            {titles.slice(1).map((title, index) => (
              <td
                key={index}
                className=" border border-amber-200 text-center capitalize "
              >
                {title}
              </td>
            ))}
            {forUniqueRelation === undefined && (
              <th colSpan={2} className={'border border-amber-200 text-center'}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th className="border border-amber-200 text-center">
                {(typeof item[keys[0]] === 'object' &&
                  item[keys[0]].length === 0) ||
                item[keys[0]] === undefined
                  ? 'null'
                  : typeof item[keys[0]] === 'string'
                  ? isValidDate(item[keys[0]])
                    ? moment(item[keys[0]]).format('MMMM DD, YYYY')
                    : item[keys[0]] === 'undefined'
                    ? 'null'
                    : item[keys[0]]
                  : item[keys[0]].toString()}
              </th>
              {keys.slice(1).map((key, index) => {
                return (
                  <td
                    key={index}
                    className={`border border-amber-200 text-center`}
                  >
                    {
                      key === 'address' ? (
                        <div
                          className={`
                            flex h-full w-96 flex-wrap items-center justify-center
                          `}
                        >
                          {item[key] || 'null'}
                        </div> // Show address
                      ) : item[key] === null ? (
                        'null'
                      ) : (typeof item[key] === 'object' &&
                          item[key] &&
                          item[key].length === 0) ||
                        item[key] === undefined ? (
                        'null' // Checking If the item[key] is object
                      ) : typeof item[key] === 'string' ? (
                        item[key].trim() === '' ? (
                          'null'
                        ) : isValidDate(item[key]) ? ( // if the item[key] is a valid date
                          moment(item[key]).format('MMMM DD, YYYY') // show the date in a format
                        ) : item[key] === 'undefined' ? (
                          'null'
                        ) : (
                          item[key]
                        ) // else show the string only
                      ) : typeof item[key] === 'object' ? (
                        item[key].map((it, idx) =>
                          it.name ? (
                            `${it.name}${
                              idx !== item[key].length - 1 ? ', ' : ''
                            }`
                          ) : it.pdf_url ? (
                            <a
                              key={idx}
                              href={
                                import.meta.env.PROD
                                  ? it.pdf_url
                                  : `${BACKEND_URL}${it.pdf_url}`
                              }
                              target={'_blank'}
                              rel="noreferrer"
                              className={
                                'flex w-56 flex-wrap items-center justify-center font-bold underline hover:text-amber-300'
                              }
                            >
                              <p className={'truncate'}>
                                {getNameForFile(it.pdf_url)}
                              </p>
                            </a>
                          ) : (
                            `${it}${idx !== item[key].length - 1 ? ', ' : ''}`
                          ),
                        )
                      ) : (
                        item[key].toString()
                      ) // if nothing of the above, we just convert the value to a string and show it
                    }
                  </td>
                )
              })}
              {forUniqueRelation === undefined && (
                <th
                  colSpan={2}
                  className="sticky right-0 top-0 border border-amber-200 px-1 py-2"
                >
                  <div
                    className={
                      'justify ju flex flex-wrap items-center justify-center'
                    }
                  >
                    <Link
                      to={`/edit${path}?id=${item.id}`}
                      className="mr-1 inline rounded bg-blue-500 px-2 py-1 text-white transition-colors hover:bg-blue-600"
                    >
                      <i className="fal fa-pencil"></i>
                    </Link>
                    <button
                      onClick={() => handleDelete(path, item.id)}
                      className="inline rounded bg-red-500 px-2 py-1 text-white transition-colors hover:bg-red-600"
                    >
                      <i className="fal fa-trash"></i>
                    </button>
                  </div>
                </th>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className={'text-center capitalize'}> {titles[0]} </th>
            {titles.slice(1).map((title, index) => (
              <td key={index} className=" text-center capitalize">
                {title}
              </td>
            ))}
            {forUniqueRelation === undefined && (
              <th colSpan={2} className={'text-center'}>
                Actions
              </th>
            )}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Table
