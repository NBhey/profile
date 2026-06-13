'use client'

import { useRef } from 'react'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'
import api from '@/src/shared/api/httpNext'

export const ContactWithAuthorForm = () => {
  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const textareaInput = useRef<HTMLTextAreaElement>(null)

  const submitContactMessage = async (
    name: string,
    email: string,
    text: string,
  ) => {
    try {
      await api.post('/contact', { name, email, text })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = nameInput.current?.value
        const email = emailInput.current?.value
        const textarea = textareaInput.current?.value

        if (name && email && textarea) {
          submitContactMessage(name, email, textarea)
          form.reset()
        }
      }}
      className="p-6 border bg-[#ffffff] flex flex-col gap-y-6"
    >
      <div className="relative group">
        <input
          className="w-full bg-transparent border-0 border-b border-outline-variant focus:outline-primary focus:ring-0 px-1 py-3 placeholder-transparent peer transition-colors"
          type="text"
          placeholder=" "
          ref={nameInput}
          required
          id="name"
          name="name"
        />
        <label
          className="absolute left-0 top-3 peer-focus:-top-4.5 peer-focus:text-xs peer-p peer-focus:text-primary peer-not-placeholder-shown:-top-4.5 peer-not-placeholder-shown:text-xs transition-all pointer-events-none"
          htmlFor="name"
        >
          Как вас зовут?
        </label>
      </div>

      <div className="relative group">
        <input
          className="w-full bg-transparent border-0 border-b border-outline-variant focus:outline-primary focus:ring-0 px-1 py-3 placeholder-transparent peer transition-colors"
          type="email"
          placeholder=" "
          ref={emailInput}
          required
          id="email"
          name="email"
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-3 peer-focus:-top-4.5 peer-focus:text-xs peer-p peer-focus:text-primary peer-not-placeholder-shown:-top-4.5 peer-not-placeholder-shown:text-xs transition-all pointer-events-none"
        >
          Ваш email?
        </label>
      </div>

      <div className="relative group">
        <textarea
          className="resize-none w-full bg-transparent border-0 border-b border-outline-variant focus:outline-primary focus:ring-0 px-1 py-3 placeholder-transparent peer transition-colors"
          name="about"
          id="about"
          cols={40}
          rows={3}
          placeholder=" "
          ref={textareaInput}
          required
        ></textarea>
        <label
          htmlFor="about"
          className="absolute left-0 top-3 peer-focus:-top-4.5 peer-focus:text-xs peer-p peer-focus:text-primary peer-not-placeholder-shown:-top-4.5 peer-not-placeholder-shown:text-xs transition-all pointer-events-none"
        >
          Расскажите о вашем проекте
        </label>
      </div>

      <Button
        type="submit"
        btnStyle="inverted"
        as={BUTTON_VIEW.BUTTON}
        className="max-w-54"
      >
        Отправить
      </Button>
    </form>
  )
}
