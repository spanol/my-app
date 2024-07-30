import Image from 'next/image'

export const Header = () => {
  return (
    <header
      className="
    bg-white
    w-full h-16 px-10
    py-2 flex text-center items-center justify-between border-t-2 border-b-2"
    >
      <div
        className="
      flex

      gap-4
      "
      >
        <p>Sobre nós</p>
        <p>Nossos seguros</p>
        <p>Seguros personalizados</p>
      </div>

      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </header>
  )
}
