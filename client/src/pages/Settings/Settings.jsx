import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import styles from './Settings.module.scss'
import AccountTab from './Tabs/AccountTab'
import ChatTab from './Tabs/ChatTab'
import LanguageTab from './Tabs/LanguageTab'
import NotificationsTab from './Tabs/NotificationsTab'
import PrivacyTab from './Tabs/PrivacyTab'

export default function Settings() {

  const [tab, setTab] = useState('account')

  const handleTabChange = (e) => {
    const id = e.target.id
    setTab(id)
  }

  const renderTab = () => {
    if (tab === 'account') {
      return (
        <AccountTab/>
      )
    } else if (tab === 'notifications') {
      return (
        <NotificationsTab/>
      )
    } else if (tab === 'privacy') {
      return (
        <PrivacyTab/>
      )
    } else if (tab === 'chat') {
      return (
        <ChatTab/>
      )
    } else if (tab === 'language') {
      return (
        <LanguageTab/>
      )
    }
  }

  return (
    <MainWrapper>
      <div className={styles.Settings}>
        <Header/>
        <div className={styles['settings-container']}>
          <ul className={styles['settings-tabs']}>
            <li onClick={handleTabChange} id='account' className={styles['settings-tab']}>Account</li>
            <li onClick={handleTabChange} id='notifications' className={styles['settings-tab']}>Notifications</li>
            <li onClick={handleTabChange} id='privacy' className={styles['settings-tab']}>Privacy and Security</li>
            <li onClick={handleTabChange} id='chat' className={styles['settings-tab']}>Chat</li>
            <li onClick={handleTabChange} id='language' className={styles['settings-tab']}>Language</li>
          </ul>
          <div className={styles['settings-content-container']}>
            {renderTab()}
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}
