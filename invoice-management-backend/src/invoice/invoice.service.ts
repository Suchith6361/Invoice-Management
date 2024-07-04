import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice, InvoiceDocument } from '../schemas/invoice.schema';

@Injectable()
export class InvoiceService {
  constructor(@InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>) {}

  async findOne(id: string): Promise<Invoice> {
    return this.invoiceModel.findById(id).exec();
  }

  async findAll(): Promise<Invoice[]> {
    return this.invoiceModel.find().exec();
  }

  async create(invoice: Invoice): Promise<Invoice> {
    const newInvoice = new this.invoiceModel(invoice);
    return newInvoice.save();
  }

  async update(id: string, invoice: Invoice): Promise<Invoice> {
    return this.invoiceModel.findByIdAndUpdate(id, invoice, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.invoiceModel.findByIdAndDelete(id).exec();
  }
}
