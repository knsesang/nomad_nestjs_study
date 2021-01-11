import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //  콘트롤러는 get/post url을 가져와서 함수를 리턴함
  providers: [AppService], //  서비스는 비즈니스 로직을 실행함, DB 연결등..
})
export class AppModule {}
