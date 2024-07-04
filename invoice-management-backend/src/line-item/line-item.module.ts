import { Module } from '@nestjs/common';
import { LineItemController } from './line-item.controller';
import { LineItemService } from './line-item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LineItemSchema } from '../schemas/line-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'LineItem', schema: LineItemSchema }])
  ],
  controllers: [LineItemController],
  providers: [LineItemService],
})
export class LineItemModule {}
