export interface IMasterOrder {
  name: string;
  photo: string;
  rang: string;
  regals: string[];
  works: string[];
  comments: {
    from: string,
    text: string
  }[]
}
