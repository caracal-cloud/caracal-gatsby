import React, { createContext, useContext } from 'react'
import { useMachine } from '@xstate/react'

import { contactFormMachine } from '../machines/contactForm'

const contactFormContext = createContext()

export function useContactForm() {
  const [state, send] = useMachine(contactFormMachine)
  const context = useContext(contactFormContext)

  const isIdle = state.matches('idle')
  const isSubmitting = state.matches('submitting')
  const hasFailed = state.matches('failed')
  const hasSended = state.matches('sended')

  function handleSubmit(data) {
    send('SUBMIT', { data })
  }

  function Provider({ children }) {
    return (
      <contactFormContext.Provider
        value={{
          handleSubmit,
          meta: {
            isIdle,
            isSubmitting,
            hasFailed,
            hasSended,
          },
        }}
      >
        {children}
      </contactFormContext.Provider>
    )
  }

  return [context, Provider]
}
