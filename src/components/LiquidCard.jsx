export default function LiquidCard({ children, className = '', style = {} }) {
  return (
    <div className={`liquid-card ${className}`} style={style}>
      {children}
    </div>
  )
}
