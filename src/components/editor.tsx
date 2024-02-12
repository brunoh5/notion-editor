import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import { createLowlight } from 'lowlight'
import CodeBlockLowLight from '@tiptap/extension-code-block-lowlight'
import html from 'highlight.js/lib/languages/xml'
import {
  RxCode,
  RxFontBold,
  RxStrikethrough,
  RxFontItalic,
  RxChevronDown,
  RxChatBubble,
  RxPencil1,
} from 'react-icons/rx'

import 'highlight.js/styles/tokyo-night-dark.css'
import { BubbleButton } from './bubble-button'
import { useState } from 'react'

const lowlight = createLowlight()

lowlight.register('html', html)

export function Editor() {
  const [isEditable, setIsEditable] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowLight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  })

  editor?.setEditable(isEditable)

  return (
    <>
      <button onClick={() => setIsEditable(!isEditable)}>
        <RxPencil1 className="size-5" />
        Editar
      </button>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
      />

      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === '/'
          }}
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex py-2 px-1 flex-col gap-2"
        >
          <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
            <img
              src="https://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text
              </span>
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
          >
            <img
              src="https://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">
                Big section heading.
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="size-4" />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="size-4" />
            Comment
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className="size-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className="size-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough className="size-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode className="size-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  )
}
