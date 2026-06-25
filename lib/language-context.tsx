'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'ne'

interface LangContextValue {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangContextValue>({ lang: 'en', toggle: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang((l) => (l === 'en' ? 'ne' : 'en')) }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
