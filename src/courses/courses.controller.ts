import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  /*eslint-disable*/
  constructor(private readonly courseService: CoursesService) { }
  @Get()
  findAll() {
    this.courseService;
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(+id);
  }

  @Post()
  create(@Body() body) {
    return this.courseService.create(body);
  }

  //Put para atualizar mais de uma informação Patch para atualizar apenas uma informação

  @Put()
  update(@Param('id') id: number, @Body() body) {
    return this.courseService.update(+id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  remove(@Param('id') id: number) {
    return this.courseService.remove(+id);
  }
}
