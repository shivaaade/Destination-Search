const DestinationSearch = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails

  return (
    <li>
      <img value={name} src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationSearch
