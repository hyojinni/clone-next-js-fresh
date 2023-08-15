import { age, name } from './data.js'

const newLocal = "cartItems"
export default function Cart() {
    // let cartItems = ['item1', 'item2', 'item3', 'item4']
    let cartItems = [
        { title: 'Wooden Chair', price: 40000, quatity: 1, img: 11 },
        { title: 'Light Vases', price: 80000, quatity: 2, img: 18 },
        { title: 'Teapot Ultimate', price: 100000, quatity: 3, img: 42 },
        { title: 'Jassy Onyae', price: 90000, quatity: 2, img: 75 },
        { title: 'Margaret Barley', price: 120000, quatity: 1, img: 49 },
        { title: 'Tyler Wanlass', price: 7000, quatity: 1, img: 55 },
        { title: 'Alexander Shustov', price: 5000, quatity: 1, img: 64 },
    ]
    return (
        <div>
            <h4 className="title">Cart</h4>
            <div className='cart-item__wrap'>
                <div className='cart-item__header'>
                    <p></p>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
                {
                    cartItems.map((item, index) => {
                        return (
                            <CartItem
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                total={item.price * item.quatity}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <img src={`https://picsum.photos/id/${props.img}/48/48`} alt={props.title} />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <p>{props.total}</p>
        </div>
    )
}

// function CartItem() {
//     let cartItems = ['item1', 'item2', 'item3']
//     return (
//         <div>
//             {
//                 cartItems.map((item, index) => {
//                     return (
//                         <div className="cart-item">
//                             <p>{item}{age}</p>
//                             <p>$40</p>
//                             <p>{index + 1}개</p>
//                             <p>{name}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }