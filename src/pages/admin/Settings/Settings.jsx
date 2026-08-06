import PagePlaceholder from '../../PagePlaceholder.jsx'
import { SettingsPage } from './Settings.styles.js'

function Settings() {
  return (
    <PagePlaceholder
      PageShell={SettingsPage}
      eyebrow="Admin route foundation"
      title="Settings foundation"
      description="Admin settings will be implemented in a future milestone."
    />
  )
}

export default Settings
