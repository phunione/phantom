export const BACKEND_URL = 'http://localhost:8800/api/v1'

export async function getOptions(dataFor) {
  const response = await fetch(`${BACKEND_URL}/${dataFor}/all`)

  const data = await response.json()

  const finalData = [
    dataFor === 'id' ? `Select ID` : `Select ${dataFor} ID`,
  ].concat(
    data.map(
      (d) => d['_id'],
      // (d) => d[dataFor === 'id' ? `unique_${dataFor}` : `unique_${dataFor}_id`],
    ),
  )

  return finalData
}
