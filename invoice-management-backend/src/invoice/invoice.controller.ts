import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from '../schemas/invoice.schema';

@Controller('api/invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get(':id')
  getInvoice(@Param('id') id: string) {
    return this.invoiceService.findOne(id);
  }

  @Get()
  getAllInvoices() {
    return this.invoiceService.findAll();
  }

  @Post()
  createInvoice(@Body() invoice: Invoice) {
    return this.invoiceService.create(invoice);
  }

  @Put(':id')
  updateInvoice(@Param('id') id: string, @Body() invoice: Invoice) {
    return this.invoiceService.update(id, invoice);
  }

  @Delete(':id')
  deleteInvoice(@Param('id') id: string) {
    return this.invoiceService.delete(id);
  }
}
