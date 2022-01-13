const getUser = () => {
  const storageUser = localStorage.getItem('loteria_user')
  return JSON.parse(storageUser)
}

export default getUser