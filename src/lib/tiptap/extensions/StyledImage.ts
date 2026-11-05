// src/lib/tiptap/extensions/StyledImage.ts
// Image with a chosen size (small / medium / full) and alignment (left / center / right).
import Image from '@tiptap/extension-image'

export const StyledImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      size: {
        default: 'full',
        parseHTML: (el: HTMLElement) => el.getAttribute('data-size') || 'full',
        renderHTML: (attrs: Record<string, unknown>) => ({ 'data-size': attrs.size as string }),
      },
      align: {
        default: 'center',
        parseHTML: (el: HTMLElement) => el.getAttribute('data-align') || 'center',
        renderHTML: (attrs: Record<string, unknown>) => ({ 'data-align': attrs.align as string }),
      },
    }
  },
})
