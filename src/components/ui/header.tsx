import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { Card } from './card'
import { Button } from './button'

const Header = () => {
  return (
    <Card className='flex justify-between items-center p-[1.875rem]'>
        <Button size='icon' variant='outline'>
            <MenuIcon/>
        </Button>

        <h1 className='font-semibold text-lg'><span className='text-primary'>Next</span> E-commerce</h1>

        <Button size='icon' variant='outline'>
            <ShoppingCartIcon />
        </Button>
    </Card>
  )
}

export default Header