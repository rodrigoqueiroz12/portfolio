import { SimpleDivider } from './simple-divider'

export function SectionDivider() {
  return (
    <>
      <div className="my-16 flex items-center gap-8" aria-hidden="true">
        <SimpleDivider className="flex-1" />
        <div className="inline-flex items-center gap-4">
          <SimpleDivider className="h-11 w-px" />
          <SimpleDivider className="h-11 w-px" />
        </div>
        <SimpleDivider className="flex-1" />
      </div>
    </>
  )
}
