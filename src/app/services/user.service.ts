import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';

@Injectable()
export class UserService{ 
    constructor(private http:Http) {} 

    getAll(){
        return this.http.get('/users').map((response:Response) => response.json());
    }

    getByEmail(_email: string){
        return this.http.get('/users/'+ _email).map((response: Response) => response.json());
    }

    create(user: User){
        return this.http.post('/users/register', user);
    }

    update(user: User) {
        return this.http.put('/users/' + user.email, user);
    }

    delete(_email: string){
        return this.http.delete('/users/' + _email);
    }

}
