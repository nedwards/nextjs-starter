'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, FormGroup, Button, Input } from '@/components'

export function SignupForm() {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/signup-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSuccessMessage(result.message)
        setErrorMessage('')
        reset()
      } else {
        setErrorMessage(result.error || 'An error occurred.')
        setSuccessMessage('')
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.')
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
          {errorMessage}
        </Alert>
      )}

      <FormGroup
        name="firstName"
        label="First Name"
        register={register}
        errors={errors}
        validation={{
          required: 'First name is required',
        }}
      >
        <Input />
      </FormGroup>

      <FormGroup
        name="lastName"
        label="Last Name"
        register={register}
        errors={errors}
        validation={{
          required: 'Last name is required',
        }}
      >
        <Input />
      </FormGroup>

      <FormGroup
        name="email"
        label="Email"
        register={register}
        errors={errors}
        validation={{
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Email is invalid',
          },
        }}
      >
        <Input />
      </FormGroup>

      <Button type="submit" className="w-full justify-center">
        Signup
      </Button>
    </form>
  )
}
