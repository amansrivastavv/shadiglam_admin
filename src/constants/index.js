import { 
  LayoutDashboard, 
  UserRound, 
  Unlock, 
  History, 
  FileBox, 
  Package, 
  Tag, 
  CreditCard, 
  Handshake
} from 'lucide-react';

export const MENU_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard size={18} strokeWidth={2} />,
  },
  {
    id: 'portfolio',
    label: 'My Portfolio',
    icon: <UserRound size={18} strokeWidth={2} />,
  },
  {
    id: 'unlocked-leads',
    label: 'Unlocked Leads',
    icon: <Unlock size={18} strokeWidth={2} />,
  },
  {
    id: 'credit-history',
    label: 'Credit History',
    icon: <History size={18} strokeWidth={2} />,
  },
  {
    id: 'reported-leads',
    label: 'Reported Leads',
    icon: <FileBox size={18} strokeWidth={2} />,
  },
  {
    id: 'products',
    label: 'Products',
    icon: <Package size={18} strokeWidth={2} />,
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: <Tag size={18} strokeWidth={2} />,
  },
  {
    id: 'payment-history',
    label: 'Payment History',
    icon: <CreditCard size={18} strokeWidth={2} />,
  },
  {
    id: 'reliable-partners',
    label: 'Reliable partners',
    icon: <Handshake size={18} strokeWidth={2} />,
  },
];

export const LEADS_DATA = [
  {
    name: 'Ekta Mishra',
    budget: 'Rs 5000 - Rs 7000',
    eventDate: '26-Apr-2026',
    uploadedOn: '24-Feb-2026',
    tentativeDate: 'NA'
  },
  {
    name: 'Chanchal Chauhan',
    budget: 'Rs 10000 - Rs 12000',
    eventDate: '29-Apr-2026',
    uploadedOn: '21-Feb-2026',
    tentativeDate: 'NA'
  },
  {
    name: 'Meghana',
    budget: 'Rs 5000 - Rs 7000',
    eventDate: '12-Mar-2026',
    uploadedOn: '21-Feb-2026',
    tentativeDate: '8 or 12 March Tentative'
  }
];
