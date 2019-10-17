import { Machine } from 'xstate'

import * as api from '../api'

const services = {
  submit: async (_, ev) => {
    return api.contact(ev.data)
  },
}

const machine = Machine({
  id: 'contactForm',
  initial: 'closed',
  states: {
    closed: {
      on: {
        OPEN: 'opened',
      },
    },
    opened: {
      on: {
        SUBMIT: 'submitting',
        CLOSE: 'closed',
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
      on: {
        CLOSE: 'closed',
      },
    },
  },
})

export const contactFormMachine = machine.withConfig({
  services,
})
