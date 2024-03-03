import { Translate } from '@phosphor-icons/react/dist/ssr'

import { AppContainer } from '../_containers/app-container'

export function AppHeader() {
  return (
    <header className="py-6">
      <AppContainer className="flex items-center">
        <a
          href="#"
          className="font-lora ml-auto flex items-center gap-2 text-base leading-paragraph text-bistre-950"
        >
          See in English
          <Translate weight="bold" className="size-4" />
        </a>
      </AppContainer>
    </header>
  )
}
