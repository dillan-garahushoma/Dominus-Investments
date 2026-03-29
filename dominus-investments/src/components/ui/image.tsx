import { forwardRef, useEffect, useRef, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import type { MutableRefObject } from 'react';
import { useSize } from '../../hooks/use-size';
import './image.css';
import { cn } from '../../lib/utils';

const FALLBACK_IMAGE_URL = 'https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  enableScanMask?: boolean;
};

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, className, style, enableScanMask = false, ...props }, forwardedRef) => {
    const wrapperRef = useRef<HTMLSpanElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const size = useSize(wrapperRef);
    const [currentSrc, setCurrentSrc] = useState<string | undefined>(src ?? FALLBACK_IMAGE_URL);

    useEffect(() => {
      if (!src) return;
      setCurrentSrc(src);
    }, [src]);

    useEffect(() => {
      if (forwardedRef && typeof forwardedRef !== 'function' && imgRef.current) {
        (forwardedRef as MutableRefObject<HTMLImageElement | null>).current = imgRef.current;
      }
    }, [forwardedRef]);

    const aspectRatio = size ? `${size.width} / ${size.height}` : undefined;

    const imgClassNames = cn('block w-full h-full object-cover', className);

    return (
      <span
        ref={wrapperRef}
        className={cn('inline-block relative', className)}
        style={{
          ...(style || {}),
          '--img-aspect-ratio': aspectRatio,
          '--img-default-width': size?.width ? `${size.width}px` : undefined,
        } as React.CSSProperties}
      >
        <img
          ref={imgRef}
          src={currentSrc || FALLBACK_IMAGE_URL}
          onError={() => setCurrentSrc(FALLBACK_IMAGE_URL)}
          className={imgClassNames}
          data-animate-scan={enableScanMask || undefined}
          {...props}
        />
      </span>
    );
  }
);

Image.displayName = 'Image';

export default Image;
