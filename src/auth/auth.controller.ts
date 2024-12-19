import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// this is the prefix we have added to the child routes
//  it will start from /auth
@Controller('auth')
export class AuthController {
  // give the constructor authService instead of creating the instance
  constructor(private authService: AuthService) {
    // this is all dependency injection.
    this.authService.test();
  }

  // /auth/signup
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  // /auth/login
  @Post('login')
  login() {
    return this.authService.login();
  }
}
