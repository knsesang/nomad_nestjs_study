import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //  콘트롤러는 get/post url을 가져와서 함수를 리턴함
  providers: [], //  서비스는 비즈니스 로직을 실행함, DB 연결등..
})
export class AppModule {}
