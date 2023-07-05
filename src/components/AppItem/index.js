// Write your code here

import './index.css'

const AppItem = props => {
  const {object} = props
  const {appName, imageUrl} = object
  return (
    // <li className="app-list-items">
    <li className="app-list-container">
      <img src={imageUrl} alt={appName} className="app-picture" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
