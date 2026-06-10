import { cvData } from '../data/cvData'
import { CvContext } from './CvContextValue'

export function CvProvider({ children }) {
  return <CvContext.Provider value={cvData}>{children}</CvContext.Provider>
}
