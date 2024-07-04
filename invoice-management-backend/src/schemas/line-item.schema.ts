import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LineItemDocument = LineItem & Document;

@Schema()
export class LineItem {
  @Prop()
  description: string;

  @Prop()
  amount: number;

  @Prop()
  invoiceId: string;
}

export const LineItemSchema = SchemaFactory.createForClass(LineItem);
