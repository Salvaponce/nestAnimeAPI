import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { Anime } from './anime.model';

@Controller('animes')
export class AnimesController {
  constructor(private readonly animeService: AnimesService) {}

  @Get("query/:cat")
  async query(@Param('cat') cat): Promise <any> {
    return this.animeService.query(cat);
  }

  @Get("animes/categories")
  getCategories() : Promise<String[]> {
    return this.animeService.getAnimesCategories();
  }
  
  @Post()
  async create(@Body() anime: Anime): Promise <Anime[]> {
    return this.animeService.create(anime);
  }

  @Patch(":id/update")
  async update(@Param('id') id, @Body() anime:Anime): Promise <any> {
    anime.id = Number(id);
    return this.animeService.update(anime);
  }

  @Delete(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.animeService.delete(id);
  }
}
