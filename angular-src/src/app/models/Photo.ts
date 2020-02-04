export class Photo {
    _id:string;
    title:string;
    caption:string;
    path:string;
    lovedBy:Array<{user:string}>;
    savedBy:Array<{user:string}>;
}