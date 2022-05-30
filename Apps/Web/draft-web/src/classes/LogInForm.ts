export class LogInForm {
    public phone: string;
    public pass: string;

    public constructor(phone: string, pass: string) {
        this.phone = phone;
        this.pass = pass;
    }

    public getJSON() : string {
        return JSON.stringify(this);
    }
}
