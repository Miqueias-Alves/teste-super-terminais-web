import { Container as MuiContainer, ContainerProps } from '@mui/material'

type Props = ContainerProps

export function Container(props: Props) {
  return <MuiContainer maxWidth='xl' {...props} />
}
