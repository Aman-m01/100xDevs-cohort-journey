
import {atom, selector} from 'recoil'
export const networkAtom = atom ({
    key : "networkAtom", 
    default : 104 
})
export const jobsAtom = atom ({
    key : "jobsAtom", 
    default : 1 
})
export const notificationAtom = atom ({
    key : "notificationAtom", 
    default : 104 
})
export const messagingAtom = atom ({
    key : "messagingAtom", 
    default : 0 
})


export const totalNotificationsSelector = selector({
    key : "totalNotificationsSelector", 
   get : ({get})=> {
  const networkAtomCount = get(networkAtom)
  const jobsAtomCount = get(jobsAtom)
  const notificationAtomCount = get(notificationAtom)
  const messagingAtomCount = get(messagingAtom)
return    networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount
}
})