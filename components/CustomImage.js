import Image from 'next/image'
import { useState } from 'react'

export default function CustomImage({ alt, ...props }) {
  const [src, setSrc] = useState(props.src)

  return (
    <Image
      src={`${src}`}
      alt={`${alt} Cover`}
      placeholder="blur"
      blurDataURL="/public/static/images/image-placeholder.png"
      width={400}
      height={300}
      quality={80}
      layout="responsive"
      loading="lazy"
    />
  )
}
