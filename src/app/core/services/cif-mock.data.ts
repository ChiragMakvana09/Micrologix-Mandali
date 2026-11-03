import { Cif, CifDashboard } from '../../models';
import { todayIst } from '../utils/format';

/** Demo data used when the user opens "ડેમો" without PACS credentials. */
export const MOCK_CIFS: Cif[] = [
  { id: '1', cifNo: 'CIF-000101', name: 'રમેશભાઈ પટેલ', village: 'બાબરા' },
  { id: '2', cifNo: 'CIF-000102', name: 'સુરેશભાઈ શાહ', village: 'અપરાપરા' },
];

export const MOCK_DASHBOARDS: Record<string, CifDashboard> = {
  '1': {
    cifId: '1',
    member: {
      sabhasad_no: 'CIF-000101',
      name1: 'રમેશભાઈ પટેલ',
      share_amount: 10000,
      savings_amount: 1500500,
      fd_amount: 4400500,
      dhiran_amount: 5510000,
      divi_amount: 0,
      hector_are: 10.0394,
      varsdar_name1: 'કિરણભાઈ પટેલ',
      varsdar_relation: 'પુત્ર',
      kcc_no: 'KCC-101',
      bank_acc: '1234567890',
      ifsc: 'SBIN0001234',
      v_name: 'બાબરા',
    },
    share: { balance: 10000, dividend: 0, accounts: [{ acc_no: '101', Balance: 10000, h_name: 'શેર' }] },
    savings: {
      totalAccounts: 2,
      totalBalance: 1500500,
      accounts: [
        { acc_no: 'S-201', Balance: 900500, h_name: 'બચત' },
        { acc_no: 'S-202', Balance: 600000, h_name: 'રિકરિંગ' },
      ],
    },
    loan: {
      loanRef: '10300',
      totalOutstanding: 5510000,
      duePrincipal: 10000,
      dueInterest: 3000,
      asOf: todayIst(),
      dueAccounts: [
        {
          acc_no: '10300',
          h_name: 'કૃષિ ધિરાણ',
          pak1_name: 'ઘઉં',
          Balance: 5510000,
          demand: 10000,
          vyajbaki: 3000,
          due_date: '20261030',
        },
      ],
      allAccounts: [
        {
          acc_no: '10300',
          h_name: 'કૃષિ ધિરાણ',
          pak1_name: 'ઘઉં',
          Balance: 5510000,
          demand: 10000,
          vyajbaki: 3000,
          due_date: '20261030',
        },
      ],
    },
    fd: {
      totalReceipts: 3,
      totalBalance: 4400500,
      maturingReceipts: 2,
      accounts: [
        {
          acc_no: 'F-1',
          Balance: 1000000,
          other_data1: 'FD001,20240101,20261115,7.5,24,0,1100000,0,સામાન્ય',
        },
        {
          acc_no: 'F-2',
          Balance: 1500000,
          other_data1: 'FD002,20250301,20261220,7,12,0,1605000,0,સામાન્ય',
        },
        {
          acc_no: 'F-3',
          Balance: 1900500,
          other_data1: 'FD003,20250101,20280101,7.25,36,0,2320000,0,સામાન્ય',
        },
      ],
    },
    land: {
      totalLand: '10.0394',
      sabhasadType: 'સભાસદ',
      records: [
        { serial: 1, village: 'બાબરા', surveyNo: '114P3', eightANo: '1023', hectareAare: '11.0348' },
        { serial: 2, village: 'અપરાપરા', surveyNo: '334P2', eightANo: '1224', hectareAare: '2.0348' },
      ],
    },
    loanAccounts: [
      { acc_no: '10300', h_name: 'કૃષિ ધિરાણ', Balance: 5510000, mudatvitirakam: 5000000, int_ret: 12, pak1_name: 'ઘઉં' },
    ],
  },
  '2': {
    cifId: '2',
    member: {
      sabhasad_no: 'CIF-000102',
      name1: 'સુરેશભાઈ શાહ',
      share_amount: 25000,
      savings_amount: 320000,
      fd_amount: 900000,
      dhiran_amount: 850000,
      divi_amount: 1500,
      hector_are: 4.201,
      v_name: 'અપરાપરા',
    },
    share: { balance: 25000, dividend: 1500, accounts: [{ acc_no: '102', Balance: 25000 }] },
    savings: {
      totalAccounts: 1,
      totalBalance: 320000,
      accounts: [{ acc_no: 'S-301', Balance: 320000, h_name: 'બચત' }],
    },
    loan: {
      loanRef: '10417',
      totalOutstanding: 850000,
      duePrincipal: 25000,
      dueInterest: 6200,
      asOf: todayIst(),
      dueAccounts: [
        { acc_no: '10417', h_name: 'KCC', Balance: 850000, demand: 25000, vyajbaki: 6200, due_date: '20261201' },
      ],
      allAccounts: [
        { acc_no: '10417', h_name: 'KCC', Balance: 850000, demand: 25000, vyajbaki: 6200, due_date: '20261201' },
      ],
    },
    fd: {
      totalReceipts: 2,
      totalBalance: 900000,
      maturingReceipts: 0,
      accounts: [{ acc_no: 'F-9', Balance: 900000, other_data1: 'FD009,20250101,20280101,7,36,0,1100000,0' }],
    },
    land: {
      totalLand: '4.2010',
      records: [
        { serial: 1, village: 'અપરાપરા', surveyNo: '58P1', eightANo: '0877', hectareAare: '4.2010' },
      ],
    },
    loanAccounts: [{ acc_no: '10417', h_name: 'KCC', Balance: 850000 }],
  },
};
