import {async, TestBed, ComponentFixtureAutoDetect, inject} from "@angular/core/testing";
import {LoginComponent} from "./login.component";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

describe('LoginComponent', () => {
    const mockUserService = {
        login: (username, password) : Observable<string> => {
            debugger;
            if(username == 'erez'){
                return Observable.of('12345');
            } else {
                return Observable.throw(new Error('bad credentails'));
            }
        }
    }

    const mockRouter = {
        navigateByUrl: (url) => {
            console.log(url);
        }
    }

    let loginComponentFixture = null;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [FormsModule],
            providers: [
                {provide: UserService, useValue: mockUserService},
                {provide: Router, useValue: mockRouter},
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        loginComponentFixture = TestBed.createComponent(LoginComponent);
        loginComponentFixture.detectChanges();
    });

    it('Login component has two input fields', () => {
        const inputs = loginComponentFixture.debugElement.queryAll(By.css('input'));
        const inputUsername = loginComponentFixture.debugElement.queryAll(By.css('input[name="username"]'));
        const inputPassword = loginComponentFixture.debugElement.queryAll(By.css('input[name="password"]'));
        expect(inputs.length).toBe(2);
        expect(inputUsername.length).toBe(1);
        expect(inputPassword.length).toBe(1);
    });

    it('login should fail and display message', async(() => {
        const inputUsername = loginComponentFixture.debugElement.query(By.css('input[name="username"]'));
        const inputPassword = loginComponentFixture.debugElement.query(By.css('input[name="password"]'));
        const form = loginComponentFixture.debugElement.query(By.css('form'));
        inputUsername.nativeElement.value = 'nadav';
        inputUsername.nativeElement.dispatchEvent(new Event('input'));
        inputUsername.nativeElement.dispatchEvent(new Event('blur'));
        inputPassword.nativeElement.value = 'nadav';
        inputPassword.nativeElement.dispatchEvent(new Event('input'));
        inputPassword.nativeElement.dispatchEvent(new Event('blur'));
        form.nativeElement.dispatchEvent(new Event('submit'));
        loginComponentFixture.detectChanges();
        const div = loginComponentFixture.debugElement.query(By.css('form div'));
        expect(div.nativeElement.innerText).toBe('Bad Credentials');
    }));

    it('login success', async(inject([Router], (router) => {
        spyOn(router, 'navigateByUrl').and.callThrough();
        const inputUsername = loginComponentFixture.debugElement.query(By.css('input[name="username"]'));
        const inputPassword = loginComponentFixture.debugElement.query(By.css('input[name="password"]'));
        const form = loginComponentFixture.debugElement.query(By.css('form'));
        loginComponentFixture.componentInstance.username = 'erez';
        loginComponentFixture.componentInstance.password= 'erez';
        form.nativeElement.dispatchEvent(new Event('submit'));
        loginComponentFixture.detectChanges();
        expect(router.navigateByUrl).toHaveBeenCalled();
    })));

        // inputUsername.nativeElement.value = 'erez';
        // inputUsername.nativeElement.dispatchEvent(new Event('input'));
        // inputUsername.nativeElement.dispatchEvent(new Event('blur'));
        // inputPassword.nativeElement.value = 'erez';
        // inputPassword.nativeElement.dispatchEvent(new Event('input'));
        // inputPassword.nativeElement.dispatchEvent(new Event('blur'));
        // loginComponentFixture.detectChanges();
        // loginComponentFixture.whenStable().then(() => {

        // });

});