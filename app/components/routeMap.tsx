'use client'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

interface RouteMapProps {
  segments: string[]
}

const getSegmentClassName = (index: number, length: number) => {
  return index === length - 1 ? 'font-bold' : 'cursor-pointer hover:underline'
}

const SegmentList = ({ segments }: RouteMapProps) => {
  return (
    <div className="bg-white flex gap-x-1 px-10 py-1 text-primary text-center">
      <SegmentItem
        segment="Inicio"
        index={0}
        length={segments.length + 1}
        href="/"
      />
      {segments.map((segment, index) => (
        <SegmentItem
          segment={segment}
          index={index + 1} // Ajuste para refletir a posição correta na lista
          length={segments.length + 1}
          href={'/' + segment}
          key={index}
        />
      ))}
    </div>
  )
}

const SegmentItem = ({
  segment,
  index,
  length,
  href
}: {
  segment: string
  index: number
  length: number
  href?: Url
}) => {
  const isHome = index === 0
  return (
    <Link href={href as Url}>
      <p className={getSegmentClassName(index, length)}>
        {!isHome && index > 0 && <span className="font-normal"> {'>'} </span>}
        {segment}
      </p>
    </Link>
  )
}

export default function RouteMap() {
  const segments = useSelectedLayoutSegments() as string[]

  return (
    <div className="bg-white flex gap-x-1 pl-0 px-10 py-1 text-center">
      <SegmentList segments={segments} />
    </div>
  )
}
