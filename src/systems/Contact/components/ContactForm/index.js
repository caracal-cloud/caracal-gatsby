import React from 'react'
import { useFormik } from 'formik'
import { Button, Form, Input } from 'antd'
import * as yup from 'yup'

import { getFormItemProps, getInputProps } from 'utils/form'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .label('Name')
    .required(),
  email: yup
    .string()
    .email()
    .label('Email')
    .required(),
  message: yup
    .string()
    .label('Message')
    .required(),
})

export const ContactForm = ({ onSubmit, isSubmitting }) => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const nameInput = getInputProps('name', form)
  const emailInput = getInputProps('email', form)
  const messageInput = getInputProps('message', form)
  const formItemCss = { margin: 0, marginBottom: 10 }

  return (
    <Form layout="vertical" onSubmit={form.handleSubmit}>
      <Form.Item
        {...getFormItemProps(nameInput)}
        label="Name"
        css={formItemCss}
      >
        <Input {...nameInput} type="text" name="name" placeholder="Your name" />
      </Form.Item>
      <Form.Item
        {...getFormItemProps(emailInput)}
        label="Email"
        css={formItemCss}
      >
        <Input
          {...emailInput}
          type="email"
          name="email"
          placeholder="Your email"
        />
      </Form.Item>
      <Form.Item
        {...getFormItemProps(messageInput)}
        label="Message"
        css={formItemCss}
      >
        <Input.TextArea
          {...messageInput}
          rows={4}
          name="message"
          placeholder="Your message"
        />
      </Form.Item>
      <Form.Item css={{ margin: 0 }}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!form.dirty && form.isValid}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
