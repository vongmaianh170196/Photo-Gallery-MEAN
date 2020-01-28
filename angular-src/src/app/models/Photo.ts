export class Photo {
    id:string;
    title:string;
    caption:string;
    path:string;
    lovedBy:Array<{username:string}>;
    savedBy:Array<{username:string}>;
}