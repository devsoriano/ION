export interface IList {
  listMove?: IListMove[];
}

export interface IListMove {
  id: string;
  name: string;
  type: string;
  time: string;
  cash: string;
  img: string;
}
