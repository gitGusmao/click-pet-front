import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
  id?: string;
  title?: string;
  description?: string;
  type: string; // Possible values: link/dropDown/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  active?: boolean;
}
export interface IChildItem {
  id?: string;
  parentId?: string;
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
  active?: boolean;
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false,
  };

  selectedItem: IMenuItem;

  constructor() {}

  defaultMenu: IMenuItem[] = [
    {
      name: 'Dashboard',
      description: 'Dashboard.',
      type: 'dropDown',
      icon: 'dashboard',
      state: '/partner',
    },
    {
      name: 'Produtos',
      type: 'dropDown',
      icon: 'inventory_2',
      state: '/partner/product/product-list',
    },
    {
      name: 'Categorias',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      type: 'dropDown',
      icon: 'category',
      state: '/partner/category/category-list', 
    },
    {
      name: 'Clientes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      type: 'dropDown',
      icon: 'person',
    },
  ];

  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
}
