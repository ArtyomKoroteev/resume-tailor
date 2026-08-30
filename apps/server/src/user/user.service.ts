import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(profile: any): Promise<any> {
    const user = await this.prisma.user.upsert({
      where: {
        id: profile.sub,
      },
      create: {
        id: profile.sub,
        email: profile.email || '',
        name: profile.name,
        picture: profile.picture,
      },
      update: {
        name: profile.name,
        picture: profile.picture,
      },
    });
    return user;
  }
}
