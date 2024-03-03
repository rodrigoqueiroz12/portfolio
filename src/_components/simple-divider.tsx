import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '../_utils/utils'

type SimpleDividerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export function SimpleDivider(props: SimpleDividerProps) {
  return (
    <span {...props} className={cn('h-px bg-bistre-200', props.className)} />
  )
}
