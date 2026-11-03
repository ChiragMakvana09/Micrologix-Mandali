import { Cif, CifDashboard } from '../../models';

/** Temporary dummy data. Replace CifService calls with real HTTP when the API is ready. */
export const MOCK_CIFS: Cif[] = [
  { id: '1', cifNo: 'CIF-000101', name: 'રમેશભાઈ પટેલ', village: 'બાબરા' },
  { id: '2', cifNo: 'CIF-000102', name: 'સુરેશભાઈ શાહ', village: 'અપરાપરા' },
];

export const MOCK_DASHBOARDS: Record<string, CifDashboard> = {
  '1': {
    cifId: '1',
    share: { balance: 10000 },
    savings: { totalAccounts: 2, totalBalance: 1500500 },
    loan: {
      loanRef: 10300,
      totalOutstanding: 5510000,
      duePrincipal: 10000,
      dueInterest: 3000,
    },
    fd: { totalReceipts: 5, totalBalance: 4400500, maturingReceipts: 3 },
    land: {
      totalLand: '10.0394',
      records: [
        { serial: 1, village: 'બાબરા', surveyNo: '114P3', eightANo: '1023', hectareAare: '11.0348' },
        { serial: 2, village: 'અપરાપરા', surveyNo: '334P2', eightANo: '1224', hectareAare: '2.0348' },
      ],
    },
  },
  '2': {
    cifId: '2',
    share: { balance: 25000 },
    savings: { totalAccounts: 1, totalBalance: 320000 },
    loan: { loanRef: 10417, totalOutstanding: 850000, duePrincipal: 25000, dueInterest: 6200 },
    fd: { totalReceipts: 2, totalBalance: 900000, maturingReceipts: 0 },
    land: {
      totalLand: '4.2010',
      records: [
        { serial: 1, village: 'અપરાપરા', surveyNo: '58P1', eightANo: '0877', hectareAare: '4.2010' },
      ],
    },
  },
};
