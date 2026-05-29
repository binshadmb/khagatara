import SitePage from '../SitePage'
import { getSitePage } from '../site-structure'

export default function CalculatorsHub() {
  return <SitePage page={getSitePage('/calculators')!} />
}
