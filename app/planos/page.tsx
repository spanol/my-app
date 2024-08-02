import Image from 'next/image'
import { Card } from '../components/card'
import Link from 'next/link'

interface PlanoSeguro {
  title: string
  description: string
  coberturas: PlanoCobertura[]
  price: string
}

interface PlanoCobertura {
  title: string
  price: string
}

const planos: PlanoSeguro[] = [
  {
    title: 'Plano I',
    description: 'Acidentes pessoais',
    coberturas: [
      {
        title: 'Morte acidental',
        price: '20.000,00'
      },
      {
        title: 'Invalidez Perm.total ou Parc. por acidente',
        price: '20.000,00'
      },
      {
        title: 'Assistência funeral individual',
        price: '5.000,00'
      }
    ],
    price: '12,90'
  },
  {
    title: 'Plano II',
    description: 'Acidentes pessoais',
    coberturas: [
      {
        title: 'Morte acidental',
        price: '30.000,00'
      },
      {
        title: 'Invalidez Perm.total ou Parc. por acidente',
        price: '30.000,00'
      },
      {
        title: 'Assistência funeral individual',
        price: '50.000,00'
      }
    ],
    price: '16,90'
  },
  {
    title: 'Plano III',
    description: 'Acidentes pessoais',
    coberturas: [
      {
        title: 'Morte acidental',
        price: ' 50.000,00'
      },
      {
        title: 'Invalidez Perm.total ou Parc. por acidente',
        price: '50.000,00'
      },
      {
        title: 'Assistência funeral individual',
        price: '5.000,00'
      }
    ],
    price: '19,90'
  }
]

export default function AssineSeguro() {
  return (
    <div className="flex flex-col items-center w-full flex-1 px-20 mt-10 text-center gap-y-20">
      <div className="grid md:grid-cols-3 items-center gap-y-20 gap-x-24">
        {planos.map(plano => (
          <Card key={plano.title} shadowClass="shadow-0">
            <div className="flex flex-col items-center justify-center font-bold">
              <h2 className="text-primary text-3xl">{plano.title}</h2>
              <Image
                src="/warn-sign.webp"
                alt="Warn sign"
                width={100}
                height={100}
                priority
              />
              <p className=" text-lg text-primary font-bold">
                {plano.description}
              </p>

              <div className="flex items-end mt-3">
                <span className="text-lg mb-auto mt-1 text-normal">R$</span>
                <span className="text-5xl text-secondary">
                  {plano.price.split(',')[0]}
                  <span className="text-lg align-super pl-1">
                    ,{plano.price.split(',')[1]}
                  </span>
                </span>
                <span className="text-lg relative right-5">/ao mês</span>
              </div>
              <div className="flex flex-col gap-y-4 mt-4 text-start">
                Coberturas
                {plano.coberturas.map(cobertura => (
                  <div
                    key={cobertura.title}
                    className="flex flex-col justify-center w-full"
                  >
                    <p className="font-bold">{cobertura.title}</p>
                    <p className="font-normal">
                      {cobertura.title === 'Morte acidental'
                        ? 'R$ ' + cobertura.price
                        : 'até R$ ' + cobertura.price}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/planos/informacoes">
                <button className="mt-5 bg-secondary text-white font-bold py-2 px-4 rounded-xl">
                  Quero contratar
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
