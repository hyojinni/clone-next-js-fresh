'use client'
import './../page.module.css'

import { useState } from "react"
export default function List() {
  // let products = ['Wooden Chair', 'Light Vases', 'Teapot Ultimate']
  let products = [
    { title: 'Wooden Chair', price: 40000, img: 11 },
    { title: 'Light Vases', price: 80000, img: 18 },
    { title: 'Teapot Ultimate', price: 120000, img: 42 }
  ]
  let [count, changeCount] = useState([0, 0, 0])
  return (
    <div>
      <h2 className="title">상품목록</h2>
      <div className="list-item__wrap">
        {
          products.map((item, i) => {
            return (
              <div className="list-item" key={i}>
                <img src={`https://picsum.photos/id/${item.img}/280/100`} alt="" className="list-item__img" />
                <h4 className="list-item__price">{item.title}  / {item.price}원</h4>
                <CountButton count={count} index={i} changeCount={changeCount} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function CountButton(props) {
  return (
    <div className='count-button__wrap'>
      <button className="count-button" onClick={() => {
        let copyCount = [...props.count]
        if (copyCount[props.index] < 1) return
        copyCount[props.index]--
        props.changeCount(copyCount)
      }}>-</button>
      <span className="count-number">{props.count[props.index]}</span>
      <button className="count-button" onClick={() => {
        let copyCount = [...props.count]
        copyCount[props.index]++
        props.changeCount(copyCount)
      }}>+</button>
    </div>
  )
}
