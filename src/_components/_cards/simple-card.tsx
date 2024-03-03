import { cn } from '@/_utils/utils'

type SimpleCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function SimpleCard(props: SimpleCardProps) {
  return (
    <div
      {...props}
      className={cn(
        'rounded-md border border-bistre-100 px-8 py-3 shadow',
        props.className,
      )}
    />
  )
}
