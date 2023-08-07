import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  let name = "lee"
  let link = "http://www.google.com"
  return (
    <div>
      <h4 className='red' style={{ color: 'red', fontSize: '30px' }}>안녕 {name}!</h4>
      <a href={link}>구글</a>
    </div>
  )
}
