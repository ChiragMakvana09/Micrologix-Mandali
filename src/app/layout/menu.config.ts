export interface MenuItem {
  label: string;
  icon: string; // Bootstrap Icons suffix
  route: string;
}

/** Single source of truth for the bottom menu and the side panel. */
export const MENU_ITEMS: MenuItem[] = [
  { label: 'ડેશબોર્ડ', icon: 'grid-1x2-fill', route: '/dashboard' },
  { label: 'વ્યવહારો', icon: 'arrow-left-right', route: '/transactions' },
  { label: 'કાર્ડ્સ', icon: 'credit-card-2-front-fill', route: '/cards' },
  { label: 'સેટિંગ્સ', icon: 'gear-fill', route: '/settings' },
];
