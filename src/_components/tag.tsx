import { cn } from '@/_utils/cn'

type TagProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export function Tag(props: TagProps) {
  return (
    <span
      {...props}
      className={cn(
        'font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold leading-none text-bistre-50',
        props.className,
      )}
    />
  )
}
