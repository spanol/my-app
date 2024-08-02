'use client'
import React, { useState } from 'react'
import { BeneficiadosForm } from '@/app/components/beneficiadosForm'
import { Card } from '@/app/components/card'
import { InformacoesForm } from '@/app/components/informacoesForm'
import Link from 'next/link'

export default function Informacoes() {
  const [beneficiados, setBeneficiados] = useState([{ id: Date.now() }])

  const adicionarBeneficiado = () => {
    if (beneficiados.length >= 3) return
    setBeneficiados([...beneficiados, { id: Date.now() }])
  }

  return (
    <div className="flex flex-col items-center w-full flex-1 text-start gap-y-20">
      <Card shadowClass="shadow-none">
        <h1 className="text-md font-bold text-primary mb-3">
          Dados do titular
        </h1>
        <InformacoesForm />
        {beneficiados.map((beneficiado, index) => (
          <BeneficiadosForm
            key={beneficiado.id}
            title={`Dados do segurado ${index + 1}`}
            id={beneficiado.id}
            isFirst={index === 0}
            isLast={index === beneficiados.length - 1}
          />
        ))}

        <div className="mt-10 flex flex-col gap-5">
          <p
            className="font-bold cursor-pointer"
            onClick={adicionarBeneficiado}
          >
            + Adicionar Pessoa
          </p>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="aceito" name="aceito" />
            <label htmlFor="aceito">Li e aceito os termos de uso</label>
          </div>
        </div>
      </Card>

      <Link href="/planos/informacoes/pagamento">
        <button className="bg-secondary text-white font-bold py-3 px-10 rounded text-sm uppercase">
          Avançar
        </button>
      </Link>
    </div>
  )
}
