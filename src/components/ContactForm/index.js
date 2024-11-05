'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button } from '@/components'
import clsx from 'clsx'
import './styles.css'

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

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', { required: 'Name is required' })}
          className={clsx(
            'w-full p-2 border rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-black',
            { 'border-red-500 focus-visible:outline-red-500': errors.name }
          )}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email is invalid',
            },
          })}
          className={clsx(
            'w-full p-2 border rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-black',
            { 'border-red-500 focus-visible:outline-red-500': errors.email }
          )}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-1">
          Message
        </label>
        <textarea
          id="message"
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', { required: 'Message is required' })}
          className={clsx(
            'w-full p-2 border rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-black',
            { 'border-red-500 focus-visible:outline-red-500': errors.message }
          )}
          rows="4"
        ></textarea>
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full justify-center">
        Send Message
      </Button>
    </form>
  )
}
