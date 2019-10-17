import React, { createContext, useContext } from 'react'
import { useMachine } from '@xstate/react'

import { contactFormMachine } from '../machines/contactForm'

const contactFormContext = createContext()

export function useContactForm() {
  const [state, send] = useMachine(contactFormMachine)
  const context = useContext(contactFormContext)

  const isClosed = state.matches('closed')
  const isOpened = state.matches('opened')
  const isSubmitting = state.matches('submitting')
  const hasFailed = state.matches('failed')
  const hasSended = state.matches('sended')

  const isModalVisible = isOpened || isSubmitting || hasFailed || hasSended

  function handleOpen() {
    send('OPEN')
  }

  function handleSubmit(data) {
    send('SUBMIT', { data })
  }

  function handleClose() {
    send('CLOSE')
  }

  function Provider({ children }) {
    return (
      <contactFormContext.Provider
        value={{
          handleOpen,
          handleSubmit,
          handleClose,
          meta: {
            isClosed,
            isOpened,
            isSubmitting,
            isModalVisible,
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
