import { routeMetadata } from '../../constants/navigation.js'
import { TopbarContainer, TopbarMeta, TopbarShell, TopbarTitle } from './Topbar.styles.js'

function Topbar() {
  return (
    <TopbarShell>
      <TopbarContainer>
        <TopbarTitle>Admin foundation</TopbarTitle>
        <TopbarMeta>{routeMetadata.admin.title}</TopbarMeta>
      </TopbarContainer>
    </TopbarShell>
  )
}

export default Topbar
