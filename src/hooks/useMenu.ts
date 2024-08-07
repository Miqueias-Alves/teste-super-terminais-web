import { useLocation } from 'react-router-dom'

import { mainMenu } from '../configs/menuConfig'
import { getRoutesAndNames } from '../helpers/getRoutesAndName'

export function useMenu() {
    const menus = mainMenu
    const { pathname } = useLocation()

    const activeMenu = menus?.find((menu: any) => pathname.includes(menu.route))

    const routes = getRoutesAndNames(menus)

    return { menus, activeMenu, routes }
}