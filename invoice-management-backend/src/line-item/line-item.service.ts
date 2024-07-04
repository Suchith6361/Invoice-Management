import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LineItem, LineItemDocument } from '../schemas/line-item.schema';

@Injectable()
export class LineItemService {
  constructor(@InjectModel(LineItem.name) private lineItemModel: Model<LineItemDocument>) {}

  async findAll(): Promise<LineItem[]> {
    return this.lineItemModel.find().exec();
  }

  async findByInvoiceId(invoiceId: string): Promise<LineItem[]> {
    return this.lineItemModel.find({ invoiceId }).exec();
  }

  async create(lineItem: LineItem): Promise<LineItem> {
    const newLineItem = new this.lineItemModel(lineItem);
    return newLineItem.save();
  }

  async update(id: string, lineItem: LineItem): Promise<LineItem> {
    return this.lineItemModel.findByIdAndUpdate(id, lineItem, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.lineItemModel.findByIdAndDelete(id).exec();

  }
}
