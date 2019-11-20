//TODO-model: use: http://json2ts.com/ to generate interfaces from json
  export interface User {
    id: number;
    nameTitle: string;
    firstName: string;
    lastName: string;
    image: string;
  }

  export interface UsersRes {
    data: User[];
    total: number;
    page: number;
    limit: number;
  }



