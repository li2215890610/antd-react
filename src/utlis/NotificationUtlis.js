import { notification } from "antd";

function notificationMessage(type
  ,data,cb) {
  notification[type]({
    placement:data.placement || 'topRight',
    message:data.message || '通知',
    key:data.key,
    description:data.description || "...",
    onClose(){
      cb()
    }
  })
}

export default {
  notificationMessage:notificationMessage
}