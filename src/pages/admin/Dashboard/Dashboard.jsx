import PagePlaceholder from '../../PagePlaceholder.jsx'
import { DashboardPage } from './Dashboard.styles.js'

function Dashboard() {
  return (
    <PagePlaceholder
      PageShell={DashboardPage}
      eyebrow="Admin route foundation"
      title="Dashboard foundation"
      description="The admin dashboard modules will be implemented in a future milestone."
    />
  )
}

export default Dashboard
