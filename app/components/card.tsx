interface CardProps {
  size?: 'sm' | 'md' | 'lg'
  bgClass?: string
  shadowClass?: string
  width?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  children,
  bgClass = 'bg-gray-100',
  shadowClass = 'shadow-2xl',
  width
}) => {
  return (
    <div
      className={`p-6 rounded-2xl ${bgClass && bgClass}
        ${shadowClass && shadowClass}
        ${width && width}
      `}
    >
      {children}
    </div>
  )
}
