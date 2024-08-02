'use client'
export const InformacoesForm: React.FC = () => {
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado')
  }

  return (
    <form
      className="flex flex-wrap text-start gap-x-10 gap-y-5 mb-5"
      onSubmit={formSubmit}
    >
      <div className="flex-col">
        <label htmlFor="cnpj">CNPJ</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="cnpj"
          name="cnpj"
        />
      </div>
      <div className="flex-col">
        <label htmlFor="razao-social">Razão Social</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="razao-social"
          name="razao-social"
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
        <label htmlFor="endereco">Endereço</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="endereco"
          name="endereco"
        />
      </div>

      <div className="flex-col">
        <label htmlFor="cep">CEP</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="cep"
          name="cep"
        />
      </div>

      <div className="flex-col">
        <label htmlFor="complemento">Complemento</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="complemento"
          name="complemento"
        />
      </div>

      <div className="flex-col">
        <label htmlFor="telefone">Telefone</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="telefone"
          name="telefone"
          placeholder="(  ) "
        />
      </div>

      <div className="flex-col">
        <label htmlFor="bairro">Bairro</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="bairro"
          name="bairro"
        />
      </div>

      <div className="flex-col">
        <label htmlFor="cidade">Cidade</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="cidade"
          name="cidade"
        />
      </div>

      <div className="flex-col">
        <label htmlFor="estado">Estado</label>
        <input
          className="w-full p-2 rounded mt-1"
          type="text"
          id="estado"
          name="estado"
        />
      </div>
    </form>
  )
}
