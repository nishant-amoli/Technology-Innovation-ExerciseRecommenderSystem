import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

    isLogin: boolean = false;
    userId: number = -1;

    constructor(){
        
    }
}