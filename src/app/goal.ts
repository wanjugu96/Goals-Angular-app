export class Goal {
    // id: number=0;
    // name: string='';
    // description:string=''
    // id: number=0;
    // name: string='';
    // description:string=''
    showDescription!: boolean;
constructor(public id: number, public name: string, public description: string, public completeDate:Date){
    this.showDescription=false;
}
}
