import SitePage from '../SitePage'
import { getSitePage } from '../site-structure'

export default function BlogHub() {
  return <SitePage page={getSitePage('/blog')!} />
}
