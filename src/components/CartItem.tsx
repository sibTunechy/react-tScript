import storeItems from '../data/items.json';
import {Stack, Button } from 'react-bootstrap';
import {useShoppingCart} from '../context/ShoppingCartContext';
import { formatcurrency } from '../utilities/formatCurrency';

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)

    return (
        <Stack direction='horizontal' gap={2}>
            <img src={item.imgUrl}
            style={{width: '125px', height: '75px', objectFit: 'cover'}}/>
            <div className='me-auto'>
                <div>
                    {item.name} {' '}
                     {quantity > 1 && (
                        <span className='text-muted' style={{ fontSize: '.65rem'}}> 
                        x{quantity}</span>
                     )}
                </div>
                <div className='text-muted' style={{fontSize: '.75rem'}}>
                    {formatcurrency(item.price)}
                </div>
                <div>{formatcurrency(item.price * quantity)}</div>
                <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
            </div>
        </Stack>
    )
}