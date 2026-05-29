import SitePage from '../SitePage'
import { getSitePage } from '../site-structure'

export default function ToolsHub() {
  return <SitePage page={getSitePage('/tools')!} />
}
