'use client'

import { X } from '@phosphor-icons/react/dist/ssr'
import * as Dialog from '@radix-ui/react-dialog'

import { SimpleCard } from '../_cards/simple-card'
import { SimpleDivider } from '../simple-divider'
import { Tag } from '../tag'
export function AppInformationSection() {
  return (
    <section className="flex gap-[5.125rem]">
      <div className="flex-1">
        <div className="sticky top-16">
          <h2 className="font-lora mb-6 max-w-[550px] text-heading-4 font-bold leading-heading text-bistre-950">
            Apaixonado por criar <br /> experiências incríveis em <br />{' '}
            aplicações web!
          </h2>
          <p className="font-figtree mb-4 leading-paragraph text-bistre-950">
            Essa paixão é como uma bússola em meu processo de <br />{' '}
            desenvolvimento 🚀. Combino tecnologias como <strong>React</strong>,{' '}
            <strong>Node</strong> e <br /> <strong>Laravel</strong> sempre
            buscando garantir uma experiência excepcional <br /> para o usuário!
          </p>
          <p className="font-figtree leading-paragraph text-bistre-950">
            Se você busca um <strong>desenvolvedor fullstack</strong> apaixonado
            pelo <br /> que faz e dedicado a entregar resultados incríveis,
            entre <br /> em contato comigo!
          </p>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-[500px]">
          <div>
            <h3 className="font-lora mb-6 text-heading-6 font-bold leading-heading text-bistre-950">
              Experiência
            </h3>

            <ul className="space-y-3">
              <li>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <SimpleCard className="flex cursor-pointer select-none items-center justify-between rounded-full">
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
                    </SimpleCard>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="animate-overlay-show fixed inset-0 bg-bistre-950/30" />

                    <Dialog.Content className="animate-modal-content-show fixed left-1/2 top-1/2 mx-4 w-full max-w-xl space-y-4 rounded-md bg-bistre-50 px-6 py-5">
                      <div className="flex items-center justify-between">
                        <Dialog.Title asChild>
                          <h5 className="font-lora font-bold leading-heading text-bistre-950">
                            Desenvolvedor Laravel
                          </h5>
                        </Dialog.Title>

                        <Dialog.Close asChild>
                          <button type="button">
                            <X className="size-5 text-bistre-900" />
                          </button>
                        </Dialog.Close>
                      </div>

                      <SimpleDivider className="w-full bg-bistre-100" />

                      <Dialog.Description className="font-figtree leading-paragraph text-bistre-900">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nam expedita dignissimos corporis quos blanditiis!
                        Laborum ipsam impedit dolore? Inventore delectus
                        reiciendis ipsa autem similique dolor dignissimos ab
                        soluta molestias qui?
                      </Dialog.Description>

                      <div className="flex items-center justify-end">
                        <Dialog.Close asChild>
                          <button
                            type="button"
                            className="font-lora rounded-md border border-bistre-800 bg-transparent px-4 py-2 text-sm font-bold leading-paragraph text-bistre-900"
                          >
                            Fechar
                          </button>
                        </Dialog.Close>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </li>

              <li>
                <SimpleCard className="flex items-center justify-between rounded-full">
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
                </SimpleCard>
              </li>
            </ul>
          </div>

          <SimpleDivider className="mx-auto my-8 block max-w-[calc(100%-4rem)]" />

          <div>
            <h3 className="font-lora mb-6 text-heading-6 font-bold leading-heading text-bistre-950">
              Educação
            </h3>

            <ul className="space-y-3">
              <li>
                <SimpleCard className="flex items-center justify-between rounded-full">
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
                </SimpleCard>
              </li>
            </ul>
          </div>

          <SimpleDivider className="mx-auto my-8 block max-w-[calc(100%-4rem)]" />

          <div>
            <h3 className="font-lora mb-6 text-heading-6 font-bold leading-heading text-bistre-950">
              Casos de estudo
            </h3>

            <ul className="space-y-3">
              <li>
                <SimpleCard className="flex items-center justify-between rounded-full">
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
                </SimpleCard>
              </li>

              <li>
                <SimpleCard className="flex items-center justify-between rounded-full">
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
                </SimpleCard>
              </li>
            </ul>
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

                <ul className="flex flex-wrap items-center gap-2">
                  <li>
                    <Tag>HTML</Tag>
                  </li>
                  <li>
                    <Tag>CSS</Tag>
                  </li>
                  <li>
                    <Tag>JavaScript</Tag>
                  </li>
                  <li>
                    <Tag>JQuery</Tag>
                  </li>
                  <li>
                    <Tag>TypeScript</Tag>
                  </li>
                  <li>
                    <Tag>React</Tag>
                  </li>
                  <li>
                    <Tag>Vue</Tag>
                  </li>
                  <li>
                    <Tag>Next</Tag>
                  </li>
                  <li>
                    <Tag>Tailwind CSS</Tag>
                  </li>
                  <li>
                    <Tag>Styled Component</Tag>
                  </li>
                  <li>
                    <Tag>Stitches</Tag>
                  </li>
                  <li>
                    <Tag>SASS</Tag>
                  </li>
                  <li>
                    <Tag>Bootstrap</Tag>
                  </li>
                  <li>
                    <Tag>MUI</Tag>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-lora mb-[0.625rem] font-bold leading-heading text-bistre-950">
                  Backend
                </h4>

                <ul className="flex flex-wrap items-center gap-2">
                  <li>
                    <Tag>Node</Tag>
                  </li>
                  <li>
                    <Tag>Fastify</Tag>
                  </li>
                  <li>
                    <Tag>Express</Tag>
                  </li>
                  <li>
                    <Tag>Laravel</Tag>
                  </li>
                  <li>
                    <Tag>SQL</Tag>
                  </li>
                  <li>
                    <Tag>Docker</Tag>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-lora mb-[0.625rem] font-bold leading-heading text-bistre-950">
                  Interesses
                </h4>

                <ul className="flex flex-wrap items-center gap-2">
                  <li>
                    <Tag>MongoDB</Tag>
                  </li>
                  <li>
                    <Tag>Java Spring</Tag>
                  </li>
                  <li>
                    <Tag>Svelte</Tag>
                  </li>
                  <li>
                    <Tag>Angular</Tag>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
