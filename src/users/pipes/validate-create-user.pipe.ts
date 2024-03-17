import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('METADA: ', metadata);

    const parseAgeToInt = parseInt(value.age.toString());

    if (isNaN(parseAgeToInt)) {
      throw new HttpException(
        'Invalid data type for property age. Expected number',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { ...value, age: parseAgeToInt };
  }
}
