export const BACKEND_URL = 'http://localhost:8800/api/v1'

export async function getOptions(dataFor) {
  const url = `${BACKEND_URL}/${dataFor}/all`

  const response = await fetch(url)

  const data = await response.json()

  const finalData = data.map((d) => ({
    id: d[dataFor === 'id' ? 'unique_id' : `unique_${dataFor}_id`],
    name:
      d['name'] === undefined
        ? dataFor === 'id'
          ? d['unique_id']
          : d[`unique_${dataFor}_id`]
        : d['name'],
    object_id: d['_id'],
  }))

  return finalData
}
