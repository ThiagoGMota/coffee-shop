'use client'

type Variant = 'default' | 'variant'

const variants:Record<Variant, {bg:string, text1:string, text2:string}> = {
  default: {
    bg:'bg-amber-950',
    text1:'text-white',
    text2:'text-amber-950'
  },
  variant: {
    bg:'bg-white',
    text1:'text-black',
    text2:'text-white'
  }
}
interface LogoProps {
  variant?: Variant; 
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const { bg, text1, text2} = variants[variant]

  return (

    <div className='flex items-center justify-center font-semibold'>

        <h1 className={`p-2 rounded-full ${bg} ${text1}`}>My</h1>
        <h1 className={`${text2}`}>Coffee</h1>
        
    </div>

  )
}
