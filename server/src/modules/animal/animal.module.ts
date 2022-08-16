import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalController } from 'src/controllers/animal/animal.controller';
import { AnimalService } from 'src/services/animal/animal.service';
import { Animal, AnimalDocument, AnimalSchema } from '../../schemas/animal.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }])],
    controllers: [AnimalController],
    providers: [AnimalService],
})
export class AnimalModule { }
