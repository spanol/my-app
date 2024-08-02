import Image from 'next/image'

export const Header = () => {
  return (
    <header
      className="
    flex
  bg-white
    w-full h-16 px-10
    py-2
    text-center
    items-center
    justify-between border-t-2 border-b-2"
    >
      <div
        className="
      flex
      gap-4
      text-sm
      "
      >
        <p>Sobre nós</p>
        <p>Nossos seguros</p>
        <p>Seguros personalizados</p>
      </div>

      <div className="m-auto">
        <Image
          src="/logo-azul.png"
          width={45}
          height={45}
          alt="Next.js Logo"
          priority
        />
      </div>

      <div className="ml-auto">
        <Image
          src="/logonow.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </header>
  )
}
