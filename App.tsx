import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import clsx from 'clsx'
import { Tooltip } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  const [link, setLink] = useState('https://reactjs.org')
  useEffect(() => {
    setTimeout(() => {
      setLink('https://vitejs.dev')
    }, 4000)
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" class="inline-block">
          <img
            src={reactLogo}
            alt="React logo"
            class="logo react inline-block"
          />
        </a>
        <a href="https://react-beyond.github.io/" class="inline-block" x-loader>
          <img
            src="/beyond.svg"
            alt="Beyond logo"
            class="logo inline-block"
            // class={['logo', 'inline-block']}
            // x-clsx={['logo', 'inline-block']}
            x-transpose={(self) => <Tooltip title={'Hey'}>{self}</Tooltip>}
          />
        </a>
      </div>
      <h1>React + Beyond</h1>
      <div className="card" id="what">
        <button
          onClick={() => setCount((count) => count + 1)}
          x-tooltip="Hey!"
          x-if={true}
        >
          count is {count}
        </button>
        <button x-else-if={true}>button 2</button>
        <button x-else-if={true}>button 3</button>
        <button x-else>button 4</button>{' '}
        <button
          x-tw={[
            '[&:active]:[outline:4px_auto_yellow]',
            '[&.active]:[outline:4px_auto_yellow]'
          ]}
          x-menu={{
            placement: 'right-start',
            body: (close) => (
              <ul
                x-tw={[
                  'bg-white text-slate-700 p-3 rounded',
                  '[&_li:hover]:bg-slate-200',
                  '[&_li:hover]:cursor-pointer'
                ]}
              >
                <li onClick={close}>menu item 1</li>
                <li onClick={close}>menu item 2</li>
                <li onClick={close}>menu item 3</li>
              </ul>
            )
          }}
        >
          This is a menu
        </button>
      </div>
    </div>
  )
}

export default App
