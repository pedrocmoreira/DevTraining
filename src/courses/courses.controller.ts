import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) { }
  @Get()
  findAll() {
    this.courseService;
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.courseService.create(createCourseDTO);
  }

  //Put para atualizar mais de uma informação Patch para atualizar apenas uma informação

  @Put()
  update(@Param('id') id: number, @Body() updateCourseDTO: UpdateCourseDTO) {
    return this.courseService.update(id, updateCourseDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  remove(@Param('id') id: number) {
    return this.courseService.remove(id);
  }
}
