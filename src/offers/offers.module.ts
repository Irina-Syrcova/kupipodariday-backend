import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { Offer } from './entities/offer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishesModule } from '../wishes/wishes.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Offer]), WishesModule, UsersModule],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [TypeOrmModule],
})
export class OffersModule {}
