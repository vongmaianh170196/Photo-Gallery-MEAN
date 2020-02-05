export class Photo {
    _id:string;
    user:string;
    title:string;
    caption:string;
    path:string;
    lovedBy:Array<{user:string}>;
    savedBy:Array<{user:string}>;
}