import {async, TestBed, inject} from "@angular/core/testing";
import {UserService} from "./user.service";
import {Http, Response, ResponseOptions} from "@angular/http";
import {Observable} from "rxjs";
/**
 * testing for the user service
 */

describe('UserService', () => {
    const mockHttp = {
        post: () : Observable<Response> => {
            return Observable.of(new Response(
                new ResponseOptions({
                    body: {
                        token: '12345'
                    }
                })
            ))
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                UserService,
                {provide: Http, useValue: mockHttp}
            ]
        });
        TestBed.compileComponents();
    }));

    it('verify that a token is sent', inject([UserService], (userService) => {
        userService.login('asdfdsfg', 'dsfgsdfg').subscribe((token) => {
            expect(token).toBe('12345');
        })
    }));

});
