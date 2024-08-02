import Image from 'next/image'
import { Card } from './components/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full flex-1 px-20 text-center gap-y-20">
      <div className="flex flex-col font-semibold text-5xl mb-10 gap-y-3">
        <h1>Preços incríveis.</h1>
        <h1>Assinatura Mensal.</h1>
        <h1>Fácil e Prático.</h1>
      </div>

      <Card>
        <div className="flex flex-col text-center items-center justify-center">
          <Image
            src="/warn-sign.webp"
            alt="Warn sign"
            width={100}
            height={100}
            priority
          />
          <p className="font-bold text-gray-700 text-lg">Acidentes Pesoais</p>

          <p className="text-gray-500">
            Protejas você e seus beneificiários financeiramente.
          </p>

          <Link href="/planos">
            <button className="mt-4 bg-primary text-white font-bold py-3 px-5 rounded text-sm  uppercase">
              Quero contratar
            </button>
          </Link>

          <p className="text-sm text-slate-400 mt-5">
            A partir de R$ 12,90/mês
          </p>
        </div>
      </Card>
    </div>
  )
}
