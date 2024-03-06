'use client'

import { SimpleCard } from '../_cards/simple-card'
import { Dialog } from '../dialog'
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
                <Dialog
                  title="Desenvolvedor Laravel"
                  descriptions={['Descrição']}
                  trigger={
                    <SimpleCard className="flex cursor-pointer select-none items-center justify-between rounded-full transition-colors hover:bg-bistre-100/20">
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
                  }
                />
              </li>

              <li>
                <Dialog
                  title="Desenvolvedor React + Laravel"
                  descriptions={[
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima, quis sint dolores earum reprehenderit suscipit modi optio quas vel illo! Tempora in ipsa placeat! Facilis sit beatae esse accusantium!',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima, quis sint dolores earum reprehenderit suscipit modi optio quas vel illo! Tempora in ipsa placeat! Facilis sit beatae esse accusantium!',
                  ]}
                  trigger={
                    <SimpleCard className="flex cursor-pointer items-center justify-between rounded-full">
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
                  }
                />
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
                <Dialog
                  title="Graduação em Ciência da Computação"
                  descriptions={['Descrição']}
                  trigger={
                    <SimpleCard className="flex cursor-pointer items-center justify-between rounded-full">
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
                  }
                />
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
                <Dialog
                  title="Github Blog"
                  descriptions={['Descrição']}
                  trigger={
                    <SimpleCard className="flex cursor-pointer items-center justify-between rounded-full">
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
                  }
                />
              </li>

              <li>
                <Dialog
                  title="Next ToDo"
                  descriptions={['Descrição']}
                  trigger={
                    <SimpleCard className="flex cursor-pointer items-center justify-between rounded-full">
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
                  }
                />
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
