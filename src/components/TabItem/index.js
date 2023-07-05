// Write your code here
import './index.css'

const TabItem = props => {
  const {buttonItem, tabButtonClick, activeTab} = props
  const {tabId, displayText} = buttonItem

  const tabClick = () => {
    tabButtonClick(tabId)
  }
  const activeTabClassName = activeTab ? 'active-tab-button' : ''

  return (
    <li className="button-list-item">
      <button
        className={`button ${activeTabClassName}`} // multiple className should be using as a template literals
        type="button"
        onClick={tabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
