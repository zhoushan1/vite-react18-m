import React from 'react'
import { Button } from 'antd-mobile'
import styles from './index.module.less'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.title}> 这是home</div>
      <Button
        onClick={() => {
          navigate('/about', {
            state: 1111
          })
        }}
      >
        跳到about
      </Button>
    </div>
  )
}

export default Home
