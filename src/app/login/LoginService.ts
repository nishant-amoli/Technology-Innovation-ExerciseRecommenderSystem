import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

    isLogin: boolean = false;
    isAdmin: boolean = false;
    userId: number = -1;
    userEmail: string;
    adminEmail: string = 'admin@exercise.com'

    constructor(){
        
    }

    public login(email: string){
        this.isLogin = true;
        this.userEmail = email;
        this.isUserAdmin();
    }

    public isUserAdmin(){
        if (this.adminEmail == this.userEmail) {
            this.isAdmin = true;
        }else{
            this.isAdmin = false;
        }
    }

    public logout(){
        this.isAdmin = false;
        this.isLogin = false;
        this.userEmail = '';
    }
}