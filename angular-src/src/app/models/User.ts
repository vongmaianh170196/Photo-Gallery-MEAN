export class User{
    id: string;
    username:string;
    loved: Array<{path:string}>;
    saved: Array<{path:string}>
}