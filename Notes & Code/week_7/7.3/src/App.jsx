import { useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationsSelector } from './atom'

// anytime you use any recoil hooks or any atom you want to access it need to be wrap inside the recoil root

function App() {
  return <RecoilRoot>
 <MainApp/>

  </RecoilRoot>
}

function MainApp (){
  const networkNotificationsCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const NotificationsAtomCount = useRecoilValue(notificationAtom)
  const MessagingAtomCount = useRecoilValue(messagingAtom)
const finalValue = networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount
const totalNotificationsCount = useRecoilValue(totalNotificationsSelector)

// another way to do this is to use useMemo
// const totalNotificationsCount = useMemo(()=>{
//   return networkNotificationsCount + jobsAtomCount + NotificationsAtomCount + MessagingAtomCount
// }, [networkNotificationsCount ,jobsAtomCount ,NotificationsAtomCount ,  MessagingAtomCount])


  return (
    <>
     <button>Home</button>
     <button>My network ({finalValue})</button>
     <button>Jobs ({jobsAtomCount})</button>
     <button>Messaging ({MessagingAtomCount})</button>
     <button>Notifications ({NotificationsAtomCount})</button>
     <button>Me {totalNotificationsCount}</button>
    </>
  )
}

export default App
