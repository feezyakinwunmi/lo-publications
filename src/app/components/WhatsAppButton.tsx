// src/app/components/WhatsAppButton.tsx
"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "19059224471";
const DEFAULT_MESSAGE = "Hello LO Publications, I'd like to talk about publishing my book.";

function WhatsAppIcon({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.296.6 4.536 1.74 6.51L3 29l6.66-1.71A12.95 12.95 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.68c-2.03 0-4.02-.55-5.75-1.58l-.41-.25-3.95 1.02 1.05-3.85-.27-.4A10.62 10.62 0 0 1 5.33 16c0-5.88 4.79-10.67 10.68-10.67 5.88 0 10.66 4.79 10.66 10.67 0 5.89-4.78 10.68-10.67 10.68Zm5.85-7.99c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.82.67.76.24 1.46.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

// Floating WhatsApp chat button. It sits at the bottom left, can be dragged anywhere on screen,
// and opens a small chat card that sends the visitor's message straight to WhatsApp.
export default function WhatsAppButton() {
  const pathname = usePathname();
  const boundsRef = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  if (pathname?.startsWith("/admin")) return null;

  const sendMessage = () => {
    const text = encodeURIComponent(message.trim() || DEFAULT_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div ref={boundsRef} className="pointer-events-none fixed inset-3 z-[60] sm:inset-5">
      <motion.div
        drag
        dragConstraints={boundsRef}
        dragElastic={0.15}
        dragMomentum={false}
        onDragStart={() => {
          dragged.current = true;
        }}
        onDragEnd={() => {
          // Let the click that ends a drag pass without toggling the chat
          setTimeout(() => (dragged.current = false), 0);
        }}
        initial={{ opacity: 0, scale: 0.5, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        className="pointer-events-auto absolute bottom-0 left-0 cursor-grab touch-none active:cursor-grabbing"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onPointerDownCapture={(e) => e.stopPropagation()}
              className="absolute bottom-[76px] left-0 w-[300px] max-w-[calc(100vw-2rem)] cursor-auto overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <WhatsAppIcon size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">LO Publications</p>
                  <p className="text-xs text-white/70">Typically replies within a day</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1 transition hover:bg-white/15"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="bg-[#ECE5DD] p-4">
                <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-sm text-gray-800 shadow-sm">
                  Hi there! 👋 How can we help you with your book today?
                </div>
              </div>

              <div className="flex items-end gap-2 border-t border-gray-100 p-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  rows={2}
                  aria-label="Your message"
                  className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm text-black focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/20"
                />
                <button
                  onClick={sendMessage}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#1ebe5a]"
                  aria-label="Send on WhatsApp"
                >
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            if (!dragged.current) setOpen((prev) => !prev);
          }}
          aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.45)] transition-transform hover:scale-110"
        >
          {!open && <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />}
          <span className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "icon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {open ? <X size={28} /> : <WhatsAppIcon />}
              </motion.span>
            </AnimatePresence>
          </span>
          {!open && (
            <span className="pointer-events-none absolute left-[calc(100%+12px)] whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              Chat with us
            </span>
          )}
        </button>
      </motion.div>
    </div>
  );
}
