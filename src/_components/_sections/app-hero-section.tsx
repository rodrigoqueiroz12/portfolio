import { Download } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

import me from '@/_assets/images/me.webp'

export function AppHeroSection() {
  return (
    <section className="relative flex items-start justify-between">
      <div>
        <h1 className="font-lora mb-2 bg-gradient-to-t from-bistre-950 to-bistre-700 bg-clip-text text-heading-1 font-bold leading-heading text-transparent">
          Eu sou <br /> Rodrigo Queiroz
        </h1>
        <h2 className="font-lora mb-4 text-heading-5 font-bold leading-heading text-bistre-950">
          Desenvolvedor Fullstack no Brasil
        </h2>
        <p className="font-figtree max-w-[600px] leading-paragraph text-bistre-800">
          Olá! Seja bem-vindo ao meu <strong>portfólio</strong>.
        </p>
        <p className="font-figtree mb-6 max-w-[600px] leading-paragraph text-bistre-800">
          Sou apaixonado por desenvolvimento fullstack com tecnologias como{' '}
          <strong>React</strong>, <strong>Node</strong> e{' '}
          <strong>Laravel</strong>. Estou em constante evolução, buscando
          aprimorar minhas habilidades e acompanhando as tendências mais
          inovadoras da área. Espero que goste de me conhecer!
        </p>

        <div className="inline-flex items-center gap-3">
          <a
            href="#"
            className="font-lora inline-flex items-center gap-2 rounded-full border border-bistre-950 bg-bistre-950 px-4 py-2 font-bold leading-paragraph text-bistre-50 transition-colors hover:border-bistre-900 hover:bg-bistre-900"
          >
            Meu currículo
            <Download weight="bold" className="size-4" />
          </a>

          <a
            href="#"
            className="font-lora inline-flex items-center rounded-full border border-bistre-950 px-4 py-2 font-bold leading-paragraph text-bistre-950"
          >
            Fale comigo
          </a>
        </div>
      </div>

      <div className="flex size-72 items-center justify-center overflow-hidden rounded-full bg-bistre-950">
        <Image
          src={me}
          width={256}
          height={256}
          alt=""
          className="h-full w-full"
        />
      </div>
    </section>
  )
}
