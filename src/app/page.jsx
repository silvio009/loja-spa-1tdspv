import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>HOME</h1>

     <div>
      <ul>
        <li><Link href="/Produtos/tenis">tenis</Link></li>
        <li><Link href="/Produtos/pc">pc</Link></li>
        <li><Link href="/Produtos/teclado">teclado</Link></li>
      </ul>


      <figure>
        <Image src="/images/sup.png" alt='prateleira' width={320} height={320}></Image>
      </figure>
     </div>
  
    </>
  )
}
