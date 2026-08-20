const SectionHeading = ({ 
  eyebrow, 
  title, 
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A227] mb-4">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-serif text-[#171717] mb-6">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg text-[#5F6368] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
