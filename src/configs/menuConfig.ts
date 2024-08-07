
export interface MenuProps {
  name: string
  description: string
  route: string
  submenu?: MenuProps[]
  image?: string
  module?: string
  hiddenMenu?: boolean
  hiddenBreadcrumbs?: boolean
}

const mainMenu: MenuProps[] = [
  {
    name: 'Empresa',
    description: 'Cadastro de Empresas',
    route: '/company',
  },
  {
    name: 'Administração',
    description: 'Administração de Empresas',
    route: '/admin-company',
  }
]

export {mainMenu}