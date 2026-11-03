export const PRODUCT_CODES = {
  share: 1002,
  savings: 1003,
  fd: 1005,
  loan: 1007,
  loanDue: 1011,
  milkat: 1101,
} as const;

export type ProductKey = keyof typeof PRODUCT_CODES;

export const PRODUCT_LABELS: Record<ProductKey, string> = {
  share: 'શેર',
  savings: 'સેવિંગ્સ',
  fd: 'એફ.ડી.',
  loan: 'ધિરાણ',
  loanDue: 'ભરવાપાત્ર ધિરાણ',
  milkat: 'મિલકત પત્રક',
};
