import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  test() {
    console.log('test function is created');
  }

  login() {
    return { msg: 'I have signed up' };
  }

  signup() {
    return { msg: 'I have logged in' };
  }
}
