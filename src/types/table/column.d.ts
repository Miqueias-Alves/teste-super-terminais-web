import { ReactNode } from 'react'

export type ColumnType = {
  id: string
  label: string | ReactNode
  minWidth?: number
  align?: 'right' | 'center' | 'left'
  format?: (value: number) => string
}
