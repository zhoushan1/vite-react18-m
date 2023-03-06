import { ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routeList from './router'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from './App.module.less'

type Props = {
  children: ReactNode
}
const PageLayout = ({ children }: Props) => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          {routeList.map(({ path, element, ...rest }) => {
            return <Route key={path} path={path} element={element} {...rest} />
          })}
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
