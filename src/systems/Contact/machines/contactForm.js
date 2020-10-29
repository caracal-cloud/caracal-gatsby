import { Machine } from 'xstate'

import * as api from '../api'

const services = {
  submit: async (_, ev) => {
    return api.contact(ev.data)
  },
}

const machine = Machine({
  id: 'contactForm',
  initial: 'idle',
  states: {
    idle: {
      on: {
        SUBMIT: 'submitting',
      },
    },
    submitting: {
      invoke: {
        src: 'submit',
        onDone: 'sended',
        onError: 'failed',
      },
    },
    failed: {
      on: {
        SUBMIT: 'submitting',
      },
    },
    sended: {
      after: {
        5000: 'idle',
      },
    },
  },
})

export const contactFormMachine = machine.withConfig({
  services,
})
