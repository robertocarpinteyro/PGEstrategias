"use client";

import { ContactMenuProvider } from "@/context/ContactMenuContext";
import ContactMenu from "./ContactMenu";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ContactMenuProvider>
      {children}
      <ContactMenu />
    </ContactMenuProvider>
  );
}
