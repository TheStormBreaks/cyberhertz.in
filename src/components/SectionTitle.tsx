interface SectionTitleProps {
  title: string
  className?: string
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl md:text-5xl mb-8 section-title ${className}`}>
      {title}
    </h2>
  )
}
