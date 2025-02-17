import Image from "next/image"
import Link from "next/link"

type Props = {
  size: number;
  property?: boolean;
}

export const Logo = ({size, property}: Props) =>{
  return(
    <Link href="/">
      <Image 
      src={'/logo.png'}
      alt="z logo"
      width={size}
      height={size}
      quality={100}
      priority
      />
    </Link>
  )
}