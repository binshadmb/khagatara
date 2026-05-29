import SitePage from './SitePage'
import { getSitePage } from './site-structure'

export default function Home() {
  return <SitePage page={getSitePage('/')!} />
}
