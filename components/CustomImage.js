import Image from 'next/image'
import { useState } from 'react'

export default function CustomImage({ alt, ...props }) {
  const [src, setSrc] = useState(props.src)

  return (
    <Image
      {...props}
      src={`/api/imagefetcher?url=${encodeURIComponent(src)}`}
      alt={alt} // To fix lint warning
      onError={() => setSrc('/public/static/images/image-error.png')}
      placeholder="blur"
      blurDataURL="/public/static/images/image-placeholder.png"
      width={350}
      height={350}
      quality={80}
      layout="fill"
    />
  )
}
