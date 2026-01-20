const RoundedCorners = () => (
  <>
    <div 
      className='absolute -top-5 right-0 w-5 h-5'
      style={{
        background: 'radial-gradient(circle at 0 0, transparent 20px, rgb(var(--bg)) 20px)'
      }}
    />
    <div 
      className='absolute -bottom-5 right-0 w-5 h-5'
      style={{
        background: 'radial-gradient(circle at 0 100%, transparent 20px, rgb(var(--bg)) 20px)'
      }}
    />
  </>
)

export default RoundedCorners
