import { MenuProps } from '../configs/menuConfig'

export type RouteType = {
    name: string
    route: string
}

export function getRoutesAndNames(menu: MenuProps[]) {
    const routesWithNames: RouteType[] = []

    menu.map((item) => {
        if (item?.submenu) {
            const subRoutesWithNames: RouteType[] = getRoutesAndNames(item.submenu)
            routesWithNames.push(...subRoutesWithNames)
        }

        routesWithNames.push({
            name: item.name,
            route: item.route,
        })
    })

    return routesWithNames
}
