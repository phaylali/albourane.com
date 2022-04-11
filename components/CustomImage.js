import Image from 'next/image'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function CustomImage({ alt, ...props }) {
  const [src, setSrc] = useState(props.src)

  return (
    <Image
      src={`${src}`}
      alt={`${alt} Cover`}
      placeholder="blur"
      blurDataURL={siteMetadata.placeholder}
      width={400}
      height={300}
      quality={80}
      layout="responsive"
      loading="lazy"
    />
  )
}
