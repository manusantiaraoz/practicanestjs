import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProfileDto: CreateProfileDto) {
    const profile=this.prisma.profile.create({
      data: createProfileDto,
    });
    return profile;
  }

  findAll() {
    const profileInfos = this.prisma.profile.findMany();
    return profileInfos;
  }

  findOne(id: string) {
    const profileUser = this.prisma.profile.findMany({
      where: {
        userId:id,
      },
  });
  return profileUser;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: string) {
    return `This action removes a #${id} profile`;
  }
}
