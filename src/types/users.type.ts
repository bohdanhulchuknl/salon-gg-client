export interface IUser {
  name: string;
  picture?: string;
  locale: string;
  emails: { value: string; verified: boolean; _id: string }[];
  phone: {
    value: string;
    verified: boolean;
  };
  roles: number[];
  googleId: string;
}
