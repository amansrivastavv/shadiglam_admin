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

export const LEADS_DATA = Array.from({ length: 20 }, (_, i) => ({
  name: i === 0 ? 'Divya Sharma' : i % 3 === 0 ? 'Ekta Mishra' : i % 3 === 1 ? 'Chanchal Chauhan' : 'Meghana',
  budget: i === 0 ? '15000-20000' : (i % 2 === 0 ? 'Rs 5000 - Rs 7000' : 'Rs 10000 - Rs 12000'),
  eventDate: i === 0 ? '03/12/2026' : `${20 + (i % 10)}-Apr-2026`,
  uploadedOn: i === 0 ? '26/02/2026' : '24-Feb-2026',
  tentativeDate: i % 5 === 0 ? 'NA' : 'Confirmed',
  requirement: i === 0 ? 'Bridal makeup HD' : (i % 2 === 0 ? 'Engagement Makeup-HD' : 'Bridal Makeup'),
  location: i === 0 ? 'Bhayander west (Mumbai)' : (i % 4 === 0 ? 'Patiala, Punjab' : i % 4 === 1 ? 'Ludhiana' : 'Delhi'),
  type: i % 4 === 0 ? 'prime' : 'new'
}));
