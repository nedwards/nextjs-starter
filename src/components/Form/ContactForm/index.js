'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, InputField, TextareaField } from '@/components'

export function ContactForm() {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [successMessage])

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSuccessMessage('Message sent successfully!')
      setErrorMessage('')
      reset()
    } catch (error) {
      setErrorMessage(
        'There was an error sending your message. Please try again later.'
      )
      setSuccessMessage('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4"
      noValidate
    >
      {successMessage && (
        <Alert variant="success" className="mb-3">
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert variant="error" className="mb-3">
          {successMessage}
        </Alert>
      )}

      <InputField
        name="name"
        label="Name"
        register={register}
        errors={errors}
        validation={{
          required: 'Name is required',
        }}
        className="mb-4"
      />
      <InputField
        name="email"
        label="Email"
        type="email"
        register={register}
        errors={errors}
        validation={{
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Email is invalid',
          },
        }}
        className="mb-4"
      />
      <TextareaField
        name="message"
        label="Message"
        register={register}
        errors={errors}
        validation={{
          required: 'Message is required',
        }}
        className="mb-4"
      />
      <Button type="submit" className="w-full justify-center">
        Send Message
      </Button>
    </form>
  )
}
