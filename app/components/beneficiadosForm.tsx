'use client'
interface CardProps {
  title?: string
}

export const BeneficiadosForm: React.FC<CardProps> = ({ title }) => {
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado')
  }

  return (
    <form
      className="bg-blue-100 px-5 py-3 rounded-2xl"
      action=""
      onSubmit={formSubmit}
    >
      <h2 className="text-blue-500 font-bold">{title}</h2>
      <div className="flex flex-wrap text-start gap-x-10 gap-y-5">
        <div className="flex-col">
          <label htmlFor="nome">Nome</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="text"
            id="nome"
            name="nome"
          />
        </div>
        <div className="flex-col">
          <label htmlFor="cpf">CPF</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="text"
            id="cpf"
            name="cpf"
          />
        </div>
        <div className="flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="flex-col">
          <label htmlFor="telefone">Telefone</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="text"
            id="telefone"
            name="telefone"
          />
        </div>
        <div className="flex-col">
          <label htmlFor="nascimento">Data de nascimento</label>
          <input
            className="w-full p-2 rounded mt-1"
            type="date"
            id="nascimento"
            name="nascimento"
          />
        </div>
      </div>
    </form>
  )
}
