import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  //    get 방식으로 받아들임
  //    http://127.0.0.1:3000/movies
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieid: string) {
    return `this will return one movies id: ${movieid}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieid: string) {
    return `this will delte a movie id: ${movieid}`;
  }
  
  //    리소스 모두 업데이트
//   @Put()

  //    리소스 일부만 업데이트
  @Patch('/:id')
  path(@Param('id') movieid: string) {
      return ` this wil  patch a movie id: ${movieid}`;

}
