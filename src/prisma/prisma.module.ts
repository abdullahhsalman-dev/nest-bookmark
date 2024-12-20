import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  // this will allow us to use prisma in other modules and then in services
  exports: [PrismaService],
})
export class PrismaModule {}
