import { Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { storage } from './helpers/storage.helper';
import { FileInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('upload-images')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'files', maxCount: 5 }
  ], { storage }))
  uploadFile(@UploadedFiles() files: { files?: Express.Multer.File[] }) {
    console.log(files);
  }
}
