import { Injectable } from "@nestjs/common";

//importing interface
import { RealStateRepository} from "../repository/real-state.repository";

///this imports are for reading jason 
import * as fs from "fs";
import * as path from "path"; 


@Injectable() // This is same as service in java
export class RealStateRepositoryImpl implements RealStateRepository{

    private data: any[]; // i do not know the data type that is why it is any 

     // to read json file when progarm is starting up 
    constructor(){
    const filePath = path.join(__dirname, 'data', 'estate-data.json');
    //console.log('Current __dirname:', __dirname);
    //console.log('Trying to load JSON from:', filePath);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    this.data = JSON.parse(fileContent);
    }

    //
    async filterData(filters: { 
        prefectureCode?: number; 
        year?: number; 
        type?: number;
     }): Promise<any[]> {

        // creating the filter object 
        const { prefectureCode, year, type } = filters;


        /* 
        checks every records if the condtion does not match with the condition it returns true and saves results in this.data 
        */
        return (this.data as any[]).filter(item => {
            if (prefectureCode !== undefined && item.prefectureCode !== prefectureCode) return false;// checking if the predcode is undefined or equal 
            if (year !== undefined && item.year !== year) return false;// checking if the year is undefined or equal 
            if (type !== undefined && item.type !== type) return false;// checking if the type is undefined or equal 
            return true;
    });
    }
}