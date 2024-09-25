export interface AuthContextType {
  user: User;
  signin: (user: string, callback: VoidFunction) => void;
}

interface User {
  userId: string;
  username: string;
}
