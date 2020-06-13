import React, { useState } from "react"

interface VisibilityContextState {
  showAppendix: boolean
  showAxioma: boolean
  showCaput: boolean
  showCorollarium: boolean
  showDemonstratio: boolean
  showLemma: boolean
  showPropositio: boolean
  showPostulatum: boolean
  showPraefatio: boolean
  showScholium: boolean
  toggleVisibility: (
    field: keyof Omit<VisibilityContextState, "toggleVisiblity">
  ) => void
}

const defaultVisibilityContextState = {
  showAppendix: true,
  showAxioma: true,
  showCaput: true,
  showCorollarium: true,
  showDemonstratio: true,
  showLemma: true,
  showPropositio: true,
  showPostulatum: true,
  showPraefatio: true,
  showScholium: true,
}

const VisibilityContext = React.createContext<
  VisibilityContextState | undefined
>(undefined)

export const VisibilityProvider: React.FC<{}> = ({ children }) => {
  const [visibilityState, updateVisibilityState] = useState(
    defaultVisibilityContextState
  )

  const toggleVisibility = (
    field: keyof Omit<VisibilityContextState, "toggleVisiblity">
  ) => {
    console.log({ field })
    updateVisibilityState(
      (prevState: Omit<VisibilityContextState, "toggleVisibility">) => ({
        ...prevState,
        [field]: !prevState[field],
      })
    )
  }

  return (
    <VisibilityContext.Provider
      value={{ ...visibilityState, toggleVisibility }}
    >
      {children}
    </VisibilityContext.Provider>
  )
}

export const useVisibilityContext = () => React.useContext(VisibilityContext)

export default VisibilityContext