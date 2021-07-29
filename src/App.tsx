import React from 'react'
import './App.scss'
import Button, { ButtonSize, ButtonType } from './components/Button/Button'

import Cascader from './components/Cascader/Cascader'

function App() {
  const handleclick = () => {
    console.log(1)
    alert(1)
  }
  const options = [
    {
      value: '小狗',
      label: '小狗',
    },
    {
      value: '猪',
      label: 'xiaogou',
    },
    {
      value: '小狗1',
      label: '小狗1',
    },
    {
      value: '猪1',
      label: 'xiaogou1',
    },
  ]
  const changeHandle = (e: any) => {
    console.log(e.target.value)
  }
  return (
    <div>
      <h1>app</h1>
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        onClick={handleclick}
      >
        button
      </Button>

      <Cascader
        options={options}
        change={changeHandle}
        size={{ width: '100px', height: '10px' }}
      ></Cascader>
    </div>
  )
}

export default App
