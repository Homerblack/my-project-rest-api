
// this is interface which will take to infrastructure 
export interface BookmarkRepository {

  // this is a practice program fo geting hello 
  getHello(): Promise<string>;

// this is a practice program to get some data with out reading json file
  getConstantData(): Promise<any>;
}