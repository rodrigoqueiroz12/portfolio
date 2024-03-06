'use client'

import { X } from '@phosphor-icons/react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

import { SimpleDivider } from './simple-divider'

interface DialogProps {
  title: ReactNode
  descriptions: string[]
  trigger: ReactNode
}

export function Dialog({ title, descriptions, trigger }: DialogProps) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 animate-overlay-show bg-bistre-950/30" />

        <RadixDialog.Content className="fixed left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-xl animate-modal-content-show space-y-4 rounded-md bg-bistre-50 px-6 py-5">
          <div className="flex items-center justify-between">
            <RadixDialog.Title asChild>
              <h5 className="font-lora font-bold leading-heading text-bistre-950">
                {title}
              </h5>
            </RadixDialog.Title>

            <RadixDialog.Close asChild>
              <button type="button">
                <X className="size-5 text-bistre-900" />
              </button>
            </RadixDialog.Close>
          </div>

          <SimpleDivider className="w-full bg-bistre-100" />

          {descriptions.map((description, i) => (
            <RadixDialog.Description
              key={i}
              className="font-figtree leading-paragraph text-bistre-900"
            >
              {description}
            </RadixDialog.Description>
          ))}

          <div className="flex items-center justify-end">
            <RadixDialog.Close asChild>
              <button
                type="button"
                className="font-lora rounded-md border border-bistre-800 bg-transparent px-4 py-2 text-sm font-bold leading-paragraph text-bistre-900"
              >
                Fechar
              </button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
