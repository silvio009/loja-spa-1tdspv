import Link from "next/link";

export default function Cabecalho(){
    return(
        <div>
              <ul>
        <li><Link href="/Produtos/tenis">tenis</Link></li>
        <li><Link href="/Produtos/pc">pc</Link></li>
        <li><Link href="/Produtos/teclado">teclado</Link></li>
      </ul>
        </div>
    )
}