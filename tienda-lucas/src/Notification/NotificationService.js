import { createContext, useContext, useState} from 'react';

const NotificationContext = createContext()

const Notification = ({type, message}) => {

    const notificationStyle ={
      position: 'absolute',
        top: 210, 
        right: 50,
        backgroundColor: type === 'success' ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px 10px 20px',
        borderRadius: 10
    }
  
    if(!message) return
  
    return(
      <div style={notificationStyle}>
        {message}
      </div>
    )
  }

export const NotificationProvider = ({children}) => {

    const[notificactionData, setNotificationData] = useState({
        type: "success",
        text: ""
    })


    const setNotification = (type, text) => {
        setNotificationData({type, text})
        setTimeout(() => {
          setNotification({type,text:""})
        },2000)
    }

    return(
      <NotificationContext.Provider value={{setNotification}}>
        <Notification type={notificactionData.type} message={notificactionData.text}/>
        {children}
      </NotificationContext.Provider>  
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}