
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { LineItemService } from './line-item.service';
import { LineItem } from '../schemas/line-item.schema';

@Controller('api/line-items')
export class LineItemController {
  constructor(private readonly lineItemService: LineItemService) {}

  @Get()
  getAllLineItems() {
    return this.lineItemService.findAll();
  }

  @Get(':invoiceId')
  getLineItemsByInvoice(@Param('invoiceId') invoiceId: string) {
    return this.lineItemService.findByInvoiceId(invoiceId);
  }

  @Post()
  createLineItem(@Body() lineItem: LineItem) {
    return this.lineItemService.create(lineItem);
  }

  @Put(':id')
  updateLineItem(@Param('id') id: string, @Body() lineItem: LineItem) {
    return this.lineItemService.update(id, lineItem);
  }

  @Delete(':id')
  deleteLineItem(@Param('id') id: string) {
    return this.lineItemService.delete(id);
  }
}
