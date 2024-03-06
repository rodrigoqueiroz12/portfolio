import { forwardRef } from 'react'

import { cn } from '@/_utils/utils'

type SimpleCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const SimpleCard = forwardRef<HTMLDivElement, SimpleCardProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'rounded-md border border-bistre-100 px-8 py-3 shadow',
          props.className,
        )}
      />
    )
  },
)

SimpleCard.displayName = 'SimpleCard'
