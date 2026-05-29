import SitePage from '../SitePage'
import { getSitePage } from '../site-structure'

export default function Page() {
  return <SitePage page={getSitePage('/f-b-interview-questions')!} />
}
