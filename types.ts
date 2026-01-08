
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Pending' | 'Inactive';
  lastActive: string;
}

export interface Activity {
  id: string;
  user: Partial<User>;
  action: string;
  target: string;
  time: string;
  unread?: boolean;
}

export interface RevenueData {
  day: string;
  value: number;
}
