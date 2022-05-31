import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cropText'
})
export class CropText implements PipeTransform {
    transform(value: string, arg: number): string {
        if(value.length > arg) 
           return value.substring(0,arg) + '...'
           
        return value
    }
}