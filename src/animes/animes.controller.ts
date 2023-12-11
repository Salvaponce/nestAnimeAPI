import { Controller, Get, Param } from '@nestjs/common';

@Controller('animes')
export class AnimesController {

    @Get("query/:cat")
  async query(@Param('cat') cat): Promise <any> {
    //return this.animeService.query(cat);
  }
}
