import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TransactionsController } from './controllers/transactions.controller';
import { config } from './database/config';
import { UsersModule } from './modules/users.module';
import { AuthGuard } from './providers/guards/auth.guard';
import { RolesGuard } from './providers/guards/roles.guard';
import { JwtService } from './providers/services/jwt.service';
import { RolesService } from './providers/services/roles.service';
import { TodosService } from './providers/services/todos.service';
import { UsersService } from './providers/services/users.service';
import { GuardUtil } from './providers/util/guard.util';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule],
  controllers: [AppController, TransactionsController],
  providers: [
    UsersService,
    RolesService,
    TodosService,
    JwtService,
    GuardUtil,
    { provide: APP_GUARD, useClass: AuthGuard }, // auth guard should come before roles guard
    { provide: APP_GUARD, useClass: RolesGuard }, // otherwise users won't be authenticated before roles check
  ],
})
export class AppModule {}
