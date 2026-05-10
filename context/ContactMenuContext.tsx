"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContactMenuCtx {
  open: (message: string) => void;
  close: () => void;
  isOpen: boolean;
  message: string;
}

const Ctx = createContext<ContactMenuCtx | null>(null);

export function ContactMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const open = (msg: string) => { setMessage(msg); setIsOpen(true); };
  const close = () => setIsOpen(false);

  return (
    <Ctx.Provider value={{ open, close, isOpen, message }}>
      {children}
    </Ctx.Provider>
  );
}

export function useContactMenu() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useContactMenu outside provider");
  return ctx;
}
