import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  // imported the auth module in the main module.
  imports: [AuthModule, UserModule],
})
export class AppModule {}
