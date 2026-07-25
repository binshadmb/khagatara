import StandaloneToolPage, { buildStandaloneMetadata } from '../StandaloneToolPage'
import { getStandaloneTool } from '../standalone-tools'

const tool = getStandaloneTool('age-calculator')!

export const metadata = buildStandaloneMetadata(tool)

export default function Page() {
  return <StandaloneToolPage tool={tool} />
}
