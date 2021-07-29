import React, { useState } from 'react'

import classNames from 'classnames'

export enum AlertTypes {
  success = 'success',
  waring = 'waring',
  error = 'error',
  info = 'info',
}
type AlertEffect = 'light' | 'dark'
interface AlertProps {
  title: string
  type?: AlertTypes
  effect?: AlertEffect
  classname?: string
  close?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  const [closeState, setClose] = useState('')
  const { title, type, effect, classname, close } = props
  let classnames = classNames('myui-alert', classname, {
    [`myui-${effect}`]: effect,
    ['myui-' + type]: type,
  })

  const handeClose = (): void => {
    setClose('closeClass')
  }
  return (
    <div className={classnames + ' ' + closeState}>
      <div className="content">
        <span>{title}</span>
        {close ? (
          <span className="close" onClick={handeClose}>
            X
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

Alert.defaultProps = {
  effect: 'dark',
  close: true,
}

export default Alert
