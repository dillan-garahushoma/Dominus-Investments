import { forwardRef, type ImgHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useSize } from '@/hooks/use-size'
import './image.css'
import { cn } from '@/lib/utils'

const FALLBACK_IMAGE_URL = 'https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png'

type ImageData = {
  id: string
  width: number
  height: number
  focalPoint?: {
    x: number
    y: number
  }
}

type WixImageDataProps = {
  fittingType?: 'fill' | 'fit'
  originWidth?: number
  originHeight?: number
  focalPointX?: number
  focalPointY?: number
}

const getImageData = (url: string, imageProps: WixImageDataProps): ImageData | undefined => {
  const wixImagePrefix = 'wix:image://v1/'

  if (url.startsWith(wixImagePrefix)) {
    const uri = url.replace(wixImagePrefix, '').split('#')[0].split('/')[0]
    const params = new URLSearchParams(url.split('#')[1] || '')
    const width = parseInt(params.get('originWidth') || '0', 10)
    const height = parseInt(params.get('originHeight') || '0', 10)

    if (width > 0 && height > 0) {
      return { id: uri, width, height }
    }
  }

  if (/^https?:\/\//.test(url)) {
    const width = imageProps.originWidth || 0
    const height = imageProps.originHeight || 0
    if (width > 0 && height > 0) {
      return {
        id: url,
        width,
        height,
        focalPoint:
          typeof imageProps.focalPointX === 'number' && typeof imageProps.focalPointY === 'number'
            ? { x: imageProps.focalPointX, y: imageProps.focalPointY }
            : undefined,
      }
    }
  }

  return undefined
}

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & WixImageDataProps

type ImageWrapperProps = {
  data: ImageData
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const ImageWrapper = forwardRef<HTMLSpanElement, ImageWrapperProps>(({ data, className, style, children }, ref) => {
  const { width, height } = data
  const aspectRatio = width && height ? `${width} / ${height}` : undefined
  const defaultWidth = width ? `${width}px` : undefined

  return (
    <span
      ref={ref}
      className={cn('inline-block relative', className)}
      style={
        {
          '--img-aspect-ratio': aspectRatio,
          '--img-default-width': defaultWidth,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  )
})
ImageWrapper.displayName = 'ImageWrapper'

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fittingType = 'fill', originWidth, originHeight, focalPointX, focalPointY, className, style, ...props }, ref) => {
    const wrapperRef = useRef<HTMLSpanElement | null>(null)
    const size = useSize(wrapperRef)
    const [imgSrc, setImgSrc] = useState<string | undefined>(src)

    useEffect(() => {
      if (src !== imgSrc) {
        setImgSrc(src)
      }
    }, [src, imgSrc])

    if (!imgSrc) {
      return <div data-empty-image ref={ref} {...props} />
    }

    const imageData = getImageData(imgSrc, { fittingType, originWidth, originHeight, focalPointX, focalPointY })

    const imgProps: ImgHTMLAttributes<HTMLImageElement> = {
      ...props,
      src: imgSrc,
      className: cn('block w-full h-full object-cover', className),
      onError: () => setImgSrc(FALLBACK_IMAGE_URL),
    }

    if (!imageData || !size) {
      return (
        <span ref={wrapperRef} className={cn('inline-block relative', className)} style={style}>
          <img ref={ref} {...imgProps} />
        </span>
      )
    }

    return (
      <ImageWrapper ref={wrapperRef} data={imageData} className={className} style={style}>
        <img ref={ref} {...imgProps} />
      </ImageWrapper>
    )
  }
)

Image.displayName = 'Image'

export default Image
