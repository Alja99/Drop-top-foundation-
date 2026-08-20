import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 whitespace-nowrap'
  
  const variantClasses = {
    primary: 'bg-[#C9A227] text-[#171717] hover:bg-[#9A7414] active:scale-95',
    secondary: 'border-2 border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#171717]',
    dark: 'bg-[#171717] text-white hover:bg-[#C9A227] hover:text-[#171717] active:scale-95',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-14px',
    md: 'px-6 py-3 text-16px',
    lg: 'px-8 py-4 text-18px',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} rounded-lg ${className}`

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button 
      type={type} 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
