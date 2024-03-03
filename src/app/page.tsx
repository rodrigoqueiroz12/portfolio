import { Download } from '@phosphor-icons/react/dist/ssr'

import { AppContainer } from '@/_components/_containers/app-container'
import { SectionDivider } from '@/_components/section-divider'
import { SimpleDivider } from '@/_components/simple-divider'

export default function Home() {
  return (
    <main className="min-h-screen pb-32 pt-12">
      <AppContainer>
        <section>
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
        </section>

        <SectionDivider />

        <section className="flex gap-[5.125rem]">
          <div className="flex-1">
            <div className="sticky top-16">
              <h2 className="font-lora mb-6 max-w-[550px] text-heading-4 font-bold leading-heading text-bistre-950">
                Apaixonado por criar <br /> experiências incríveis em <br />{' '}
                aplicações web!
              </h2>
              <p className="font-figtree mb-4 leading-paragraph text-bistre-950">
                Essa paixão é como uma bússola em meu processo de <br />{' '}
                desenvolvimento 🚀. Combino tecnologias como{' '}
                <strong>React</strong>, <strong>Node</strong> ou <br />{' '}
                <strong>Laravel</strong> sempre buscando garantir uma
                experiência excepcional <br /> para o usuário!
              </p>
              <p className="font-figtree leading-paragraph text-bistre-950">
                Se você busca um <strong>desenvolvedor fullstack</strong>{' '}
                apaixonado pelo <br /> que faz e dedicado a entregar resultados
                de incríveis, entre <br /> em contato comigo!
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="max-w-[500px]">
              <div>
                <h3 className="font-lora mb-6 text-heading-6 font-bold leading-heading text-bistre-950">
                  Experiência
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4 rounded-full border border-bistre-100 px-8 py-3 shadow">
                    <div>
                      <h4 className="font-lora leading-paragraph text-bistre-950">
                        Desenvolvedor Laravel
                      </h4>
                      <p className="font-lora font-bold leading-paragraph text-bistre-950">
                        QR Chef
                      </p>
                    </div>

                    <span className="font-figtree leading-paragraph text-bistre-800">
                      Dez 2023 - Atualmente
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-full border border-bistre-100 px-8 py-3 shadow">
                    <div>
                      <h4 className="font-lora leading-paragraph text-bistre-950">
                        Desenvolvedor React + Laravel
                      </h4>
                      <p className="font-lora font-bold leading-paragraph text-bistre-950">
                        Emperium
                      </p>
                    </div>

                    <span className="font-figtree leading-paragraph text-bistre-800">
                      Dez 2023 - Atualmente
                    </span>
                  </div>
                </div>
              </div>

              <SimpleDivider className="mx-auto my-8 block max-w-[calc(100%-4rem)]" />

              <div>
                <h3 className="font-lora mb-6 text-heading-6 font-bold leading-heading text-bistre-950">
                  Educação
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4 rounded-full border border-bistre-100 px-8 py-3 shadow">
                    <div>
                      <h4 className="font-lora leading-paragraph text-bistre-950">
                        Graduação em Ciência da Computação
                      </h4>
                      <p className="font-lora font-bold leading-paragraph text-bistre-950">
                        Universidade da Amazônia - UNAMA
                      </p>
                    </div>

                    <span className="font-figtree leading-paragraph text-bistre-800">
                      2018 - 2021
                    </span>
                  </div>
                </div>
              </div>

              <SimpleDivider className="mx-auto my-8 block max-w-[calc(100%-4rem)]" />

              <div>
                <h3 className="font-lora mb-6 text-heading-6 font-bold leading-heading text-bistre-950">
                  Casos de estudo
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4 rounded-full border border-bistre-100 px-8 py-3 shadow">
                    <div>
                      <h4 className="font-lora leading-paragraph text-bistre-950">
                        Github Blog
                      </h4>
                      <p className="font-lora font-bold leading-paragraph text-bistre-950">
                        React.js
                      </p>
                    </div>

                    <span className="font-figtree leading-paragraph text-bistre-800">
                      Fev 2024
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-full border border-bistre-100 px-8 py-3 shadow">
                    <div>
                      <h4 className="font-lora leading-paragraph text-bistre-950">
                        Next ToDo
                      </h4>
                      <p className="font-lora font-bold leading-paragraph text-bistre-950">
                        Next.js
                      </p>
                    </div>

                    <span className="font-figtree leading-paragraph text-bistre-800">
                      Fev 2024
                    </span>
                  </div>
                </div>
              </div>

              <SimpleDivider className="mx-auto my-8 block max-w-[calc(100%-4rem)]" />

              <div>
                <h3 className="font-lora mb-6 text-heading-6 font-bold leading-heading text-bistre-950">
                  Habilidades
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-lora mb-[0.625rem] font-bold leading-heading text-bistre-950">
                      Frontend
                    </h4>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        HTML
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        CSS
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        JavaScript
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        JQuery
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        TypeScript
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        React
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Vue
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Next
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Tailwind CSS
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Styled Component
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Stitches
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        SASS
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Bootstrap
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        MUI
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-lora mb-[0.625rem] font-bold leading-heading text-bistre-950">
                      Backend
                    </h4>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Node
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Fastify
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Express
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Laravel
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        SQL
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Docker
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-lora mb-[0.625rem] font-bold leading-heading text-bistre-950">
                      Interesses
                    </h4>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        MongoDB
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Java Spring
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Svelte
                      </span>
                      <span className="font-figtree rounded-md bg-bistre-950 px-1.5 py-0.5 text-xs font-bold text-bistre-50">
                        Angular
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AppContainer>
    </main>
  )
}
