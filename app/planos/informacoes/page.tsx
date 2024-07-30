import { BeneficiadosForm } from '@/app/components/beneficiadosForm'
import { Card } from '@/app/components/card'
import { InformacoesForm } from '@/app/components/informacoesForm'

export default function Informacoes() {
  return (
    <div className="flex flex-col items-center w-full flex-1 text-start gap-y-20">
      <Card shadowClass="shadow-none">
        <h1 className="text-md font-bold text-blue-500 mb-3">
          Dados do titular
        </h1>
        <InformacoesForm />
        <BeneficiadosForm title="Dados do segurado" />

        <div className="mt-10 flex flex-col gap-5">
          <p className="font-bold">+ Adicionar Pessoa</p>

          {/* checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="aceito" name="aceito" />
            <label htmlFor="aceito">Li e aceito os termos de uso</label>
          </div>
        </div>
      </Card>
    </div>
  )
}
