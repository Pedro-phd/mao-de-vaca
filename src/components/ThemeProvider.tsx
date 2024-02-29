'use client'

import { ThemeProvider  } from 'next-themes'
import { ReactNode } from 'react'

interface ValueObject {
  [themeName: string]: string;
}

interface ThemeProviderProps {
  themes?: string[];
  forcedTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  enableColorScheme?: boolean;
  storageKey?: string;
  defaultTheme?: string;
  attribute?: string | 'class';
  value?: ValueObject;
  nonce?: string;
  children?: React.ReactNode;
}

interface IProps extends ThemeProviderProps {
  children: ReactNode
}

export function ThemeModeProvider({ children, ...props }: IProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}