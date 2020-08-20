
export class Book {
  public name: string;
  public description: string;
  public imagePath: string;
  volumeInfo: {
    title: string;
    publisher: string;
    imageLinks: {
      smallThumbnail: string
    }
  };
// isbn10?: string;
// title: string;
// author: string;
// price: number;
// pages?: number;
// rating?: number;
// votes?: number;
// image?: string;
// description?: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}


