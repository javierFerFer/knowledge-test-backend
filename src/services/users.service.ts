import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Seniority } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(data: Partial<User>): Promise<User> {
    const dev = this.usersRepository.create(data);
    return this.usersRepository.save(dev);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const dev = await this.usersRepository.findOne({ where: { id } });
    if (!dev) throw new NotFoundException(`Developer ${id} no encontrado`);
    return dev;
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const dev = await this.findOne(id);
    Object.assign(dev, data);
    return this.usersRepository.save(dev);
  }

  async remove(id: number): Promise<void> {
    const dev = await this.findOne(id);
    await this.usersRepository.remove(dev);
  }
}
