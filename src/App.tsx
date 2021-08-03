import React from 'react'
import './App.scss'
import Button, { ButtonSize, ButtonType } from './components/Button/Button'
import { MonacoDiffEditor } from 'react-monaco-editor'
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
  const state = {
    code: 'const a = "Hello Monaco"',
    original: 'const a = "Hello World"',
  }
  const { code, original } = state
  const onChange = () => {
    console.log('a')
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
      <MonacoDiffEditor
        theme="vs-dark"
        width="800"
        height="300"
        language="javascript"
        value={code}
        original={original}
        onChange={onChange}
      />
    </div>
  )
}

export default App
