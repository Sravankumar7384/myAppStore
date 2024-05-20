import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const OnClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button Active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={OnClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
