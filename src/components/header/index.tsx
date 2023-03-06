import { NavBar, Space, Toast } from 'antd-mobile'
import { UnorderedListOutline } from 'antd-mobile-icons'

const Header = () => {
  return (
    <div>
      <NavBar backArrow={<UnorderedListOutline />}>标题</NavBar>
    </div>
  )
}

export default Header
