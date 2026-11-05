// src/lib/tiptap/extensions/Callout.ts
// A highlighted box (info / tip / warning) that can wrap any blocks.
import { Node, mergeAttributes } from '@tiptap/core'

export type CalloutType = 'info' | 'tip' | 'warning'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    callout: {
      toggleCallout: (type?: CalloutType) => ReturnType
    }
  }
}

export const Callout = Node.create({
  name: 'callout',
  group: 'block',
  content: 'block+',
  defining: true,

  addAttributes() {
    return {
      type: {
        default: 'info',
        parseHTML: (el: HTMLElement) => el.getAttribute('data-callout') || 'info',
        renderHTML: (attrs: Record<string, unknown>) => ({ 'data-callout': attrs.type as string }),
      },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-callout]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0]
  },

  addCommands() {
    return {
      toggleCallout:
        (type: CalloutType = 'info') =>
        ({ commands, editor }) => {
          if (editor.isActive('callout', { type })) return commands.lift('callout')
          if (editor.isActive('callout')) return commands.updateAttributes('callout', { type })
          return commands.wrapIn('callout', { type })
        },
    }
  },
})
