import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';

/*eslint-disable */
export class UpdateCourseDTO extends PartialType(CreateCourseDTO) { }
