import { BookmarkRepository } from '../repository/bookmark.repository';


//This is actually like java using implementation 
export class BookmarkRepositoryImpl implements BookmarkRepository {


  async getHello(): Promise<string> {
    return 'Hello World';
  }

  async getConstantData(): Promise<any> {
    return {
      id: 1,
      title: 'My Bookmark',
      url: 'https://example.com',
    };
  }

}