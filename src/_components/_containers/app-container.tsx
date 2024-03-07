import { cn } from '../../_utils/cn'

type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function AppContainer(props: ContainerProps) {
  return (
    <div
      {...props}
      className={cn('mx-auto max-w-[1216px] px-4', props.className)}
    />
  )
}
