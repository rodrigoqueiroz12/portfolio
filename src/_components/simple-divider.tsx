import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '../_utils/cn'

type SimpleDividerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export function SimpleDivider(props: SimpleDividerProps) {
  return (
    <span
      {...props}
      className={cn('block h-px bg-bistre-200', props.className)}
      aria-hidden="true"
    />
  )
}
