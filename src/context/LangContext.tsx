import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Lang, translations } from '../i18n/translations'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations['pt']
}

const LangContext = createContext<LangContextType>({} as LangContextType)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  const t = translations[lang]
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
