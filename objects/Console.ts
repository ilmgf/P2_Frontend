export class Console{
    ptitle: string
    pprice: string
    pdescription: string
    pname: string
   consoleCoverLink: string
    pid: number

    constructor(ptitle: string, pprice: string, pdescription: string, pname: string, consoleCoverLink: string, pid: number){
        this.ptitle = ptitle;
       this.pprice = pprice;
        this.pdescription = pdescription;
        this.pname = pname;
        this.consoleCoverLink = consoleCoverLink;
        this.pid = pid;

    }
}