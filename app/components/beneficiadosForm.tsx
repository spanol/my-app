'use client'
import React from 'react'

interface CardProps {
  title?: string
  id?: number
  isFirst: boolean
  isLast: boolean
}

export const BeneficiadosForm: React.FC<CardProps> = ({
  title,
  id,
  isFirst,
  isLast
}) => {
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado')
  }

  const roundedClasses =
    isFirst && isLast
      ? 'rounded-2xl'
      : isFirst
        ? 'rounded-t-2xl'
        : isLast
          ? 'rounded-b-2xl'
          : 'rounded-none'

  return (
    <form
      className={`bg-primary-light px-5 py-3 ${roundedClasses}`}
      action=""
      onSubmit={formSubmit}
    >
      {title && <h2 className="text-primary font-bold">{title}</h2>}
      <div className="flex flex-wrap text-start gap-x-10 gap-y-5">
        <div className="flex-col">
          <label htmlFor={`nome-${id}`}>Nome</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="text"
            id={`nome-${id}`}
            name={`nome-${id}`}
          />
        </div>
        <div className="flex-col">
          <label htmlFor={`cpf-${id}`}>CPF</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="text"
            id={`cpf-${id}`}
            name={`cpf-${id}`}
          />
        </div>
        <div className="flex-col">
          <label htmlFor={`email-${id}`}>Email</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="email"
            id={`email-${id}`}
            name={`email-${id}`}
          />
        </div>
        <div className="flex-col">
          <label htmlFor={`telefone-${id}`}>Telefone</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="text"
            id={`telefone-${id}`}
            name={`telefone-${id}`}
            placeholder="(  ) "
          />
        </div>
        <div className="flex-col">
          <label htmlFor={`nascimento-${id}`}>Data de nascimento</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="date"
            id={`nascimento-${id}`}
            name={`nascimento-${id}`}
          />
        </div>
      </div>
    </form>
  )
}
