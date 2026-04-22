import { Injectable } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}
  async create(data: HeroDto) {
    const hero = await this.prisma.hero.create({
      data,
    });

    return hero;
  }

  async findAll() {
    return await this.prisma.hero.findMany();
  }

  async update(id: number, data: HeroDto) {
    const heroExists = await this.prisma.hero.findUnique({
      where: { id },
    });

    if (!heroExists) {
      throw new Error('Herói não encontrado');
    }

    return await this.prisma.hero.update({
      data,
      where: { id },
    });
  }
}
