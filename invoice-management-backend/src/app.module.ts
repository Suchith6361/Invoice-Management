// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forRoot(process.env.MONGO_URI),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.DB_HOST,
//       port: +process.env.DB_PORT,
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       entities: [],
//       synchronize: true,
//     }),
//   ],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { InvoiceModule } from './invoice/invoice.module';
import { LineItemModule } from './line-item/line-item.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    InvoiceModule,
    LineItemModule,
  ],
})
export class AppModule {}
