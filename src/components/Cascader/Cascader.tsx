import React from 'react'

import classNames from 'classnames'

interface Options {
  value: string
  label: string
}

interface SizeProps {
  width: string
  height: string
}

interface CastderProps {
  value?: string
  size: SizeProps
  options: Options[]
  change: (value: any) => any
  classes?: string
}

const Cascader: React.FC<CastderProps> = (props) => {
  const { options, change, value } = props
  return (
    <div>
      <select onChange={change} className="selectClass">
        {options.map((item) => {
          return <option value={item.label}> {item.label} </option>
        })}
      </select>
    </div>
  )
}

export default Cascader
