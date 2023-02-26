export interface User {
  userName: string;
  password: string;
}

type Errors = [
  {
    value: string;
    msg: string;
    param: string;
    location: string;
  },
];

export interface RegistrationResponse {
  message: string;
  errors?: Errors;
}
