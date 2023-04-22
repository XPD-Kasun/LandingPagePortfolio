export interface HeaderMenu {
       menuItems: MenuItem[]
}

export interface MenuItem {
       id: number | string,
       name: string,
       subMenus: SubMenu[]
}

export interface SubMenu {
       id: number | string,
       name: string,
       img?: string,
       category?: string,
       subtitle: string
}