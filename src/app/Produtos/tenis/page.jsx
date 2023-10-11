import Link from 'next/link'
import Image from 'netx/images'

export default function Tenis(){
    return(
        <div>
            <h1>tenis</h1>
            <div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste mollitia nisi expedita officiis fugiat blanditiis, sint voluptatibus tempore in quis iusto itaque velit omnis molestias libero! Ipsum, deserunt. Magnam.</p>
                <p><Link href="/">voltar</Link></p>

                <figure>
                    <Image src="/public/images/tenis.jpg"></Image>
                </figure>
            </div>
        </div>
    )
}