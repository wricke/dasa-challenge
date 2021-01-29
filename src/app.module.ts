import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './modules/patient/patient.module';
import { DoctorModule } from './modules/doctor/doctor.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [join(__dirname, '**', 'entities', '*.entity.ts')],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PatientModule,
    DoctorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
