export interface Category {
    id: number;
    name: string;
    imgURL: string;
  }
  
  export const categories = [
    {
      id: 1,
      name: 'Computers and Accessories',
      imgURL: "https://gamingxperts.pk/454-large_default/acer-predator-helios-300-ph315-54-760s-gaming-laptop-intel-i7-11gen-16gb-ddr-karachi-pakistan.jpg",
    },
    {
      id: 2,
      name: 'Video Games',
      imgURL: "https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-front-with-dualsense",

    },
    {
      id: 3,
      name: 'Smartphones',
      imgURL: "data:image/jpeg;base64,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",

    },
    {
      id: 4,
      name: 'Books',
      imgURL: "https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_200/4368065-gabriel-garsia-markes-44998-sto-let-odinochestva.jpg",

    },
     ];
  
  