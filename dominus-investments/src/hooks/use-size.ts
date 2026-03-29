import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useSize(elementRef: RefObject<HTMLElement | null>) {
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const updateSize = () => {
      setSize({ width: el.clientWidth, height: el.clientHeight });
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(el);

    updateSize();

    return () => observer.disconnect();
  }, [elementRef]);

  return size;
}
