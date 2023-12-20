const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:8000'

export async function getOptions(dataFor) {
  const url = `${BACKEND_URL}/${dataFor}/all/`

  try {
    const response = await fetch(url)

    const data = await response.json()

    return data.map((d) => ({
      id: d['id'],
      name: d['name'],
    }))
  } catch (err) {
    console.error(err)
    return []
  }
}
