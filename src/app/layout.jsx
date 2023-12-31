import './globals.css'
import { Inter } from 'next/font/google'
import Cabecalho from './componentes/cabecalho/Cabecalho'
import Rodape from './componentes/rodape/Rodape'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrega 4 ',
  description: 'Generated by 1TDSPV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="">
      <body className={inter.className}>
        <Cabecalho/>
        {children}
        <Rodape/>

         
        </body>
    </html>
  )
}
