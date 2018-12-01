export class Article{
    title :string;
    link :string;
    votes :number;

    constructor(title:string, link:string, votes?:number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    VoteUp(): boolean{
        this.votes += 1;
        return false;
    }

    VoteDown(): boolean{
        this.votes -= 1;
        return false;
    }

    domain():string{
        try{
            const link:string = this.link.split('//')[1];
            return link.split('/')[0];
        }catch(err){
            return null;
        }
    }
}