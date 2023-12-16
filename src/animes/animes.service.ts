import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animes } from './animes.entity';
import { Anime } from './anime.model';

@Injectable()
export class AnimesService {
    constructor(
    @InjectRepository(Animes)
    private readonly animeRepository: Repository<Animes>,
  ) {}
    
  async create(anime: Animes): Promise<any> {
    return await this.animeRepository.save(anime);
  }

  async update(anime: Animes): Promise<any> {
    return await this.animeRepository.update(anime.id, anime);
  }

  async findOne(id: number): Promise<any> {
    return this.animeRepository.findOne({where: {id : id}});
  }

  async findAll(): Promise<Animes[]> {
    return this.animeRepository.find();
  }

  async query(cat: string): Promise<any> {
    return await this.animeRepository.find({where: {categories: cat}});
  }

  async delete(id: number): Promise<any> {
    return this.animeRepository.delete(id);
  }
}
