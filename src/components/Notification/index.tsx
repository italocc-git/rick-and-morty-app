import React from 'react'
import { notification } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

export const getNotification = (
  description: React.ReactNode,
  operationType: 'Success' | 'Failed',
) => {
  const successStyle = { color: '#0eca07' }
  const failedStyle = { color: '#d30e49' }

  const customStyle = operationType === 'Success' ? successStyle : failedStyle

  const config: any = {
    message: <span> {operationType} </span>,
    description,
    placement: 'bottomRight',
    icon: <CheckCircleFilled style={customStyle} />,
  }
  notification.success(config)
}
