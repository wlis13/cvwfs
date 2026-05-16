import { useContext } from 'react'
import { CvContext } from './CvContextValue'

export function useCv() {
  return useContext(CvContext)
}
