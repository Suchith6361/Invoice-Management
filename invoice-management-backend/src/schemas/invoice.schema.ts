import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvoiceDocument = Invoice & Document;

@Schema()
export class Invoice {
  

  

  @Prop()
  alternatePayee1: string;

  @Prop()
  alternatePayee2: string;

  @Prop()
  city: string;

  @Prop()
  street: string;

  @Prop()
  country: string;

  @Prop()
  bankKey: string;

  @Prop()
  bankAccNo: string;

  @Prop()
  reference: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
