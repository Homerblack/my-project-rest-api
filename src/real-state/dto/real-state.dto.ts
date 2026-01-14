import { IsOptional, IsInt, IsIn } from 'class-validator';
import { Type } from 'class-transformer';


export class RealStateDto {


  /*
  関東エリア
  8  Ibaraki
  9  Tochigi
  10 Gunma
  11 Saitama
  12 Chiba
  13 Tokyo
  14 Kanagawa
  */

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '都道府県は数字型にしてください！' })
　@IsIn([8, 9, 10, 11, 12, 13, 14],{})
  prefCode?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '年度は数字型にしてください！' })
  @IsIn([2015, 2016, 2017, 2018],{message: '年度は 2015 ～　2018で入力してください'})
  year?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '種類は数字型にしてください！' })
  @IsIn([1, 2],{ message: '種類は 1 / 2 にしてください！'})
  type?: number;
}