import { Controller, Get, Injectable, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import type { Response } from 'express';

@Injectable()
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @ApiOperation({ summary: 'Start the Auth0 login flow' })
  @ApiOkResponse({ description: 'Login response.' })
  login(): string {
    return this.authService.getLoginUrl();
  }

  @Get('/google')
  @ApiOperation({ summary: 'Start the Auth0 login flow for Google' })
  @ApiOkResponse({ description: 'Login response.' })
  loginGoogle(): string {
    return this.authService.getGoogleLoginUrl();
  }

  @Get('/github')
  @ApiOperation({ summary: 'Start the Auth0 login flow for Github' })
  @ApiOkResponse({ description: 'Login response.' })
  loginGithub(): string {
    return this.authService.getGithubLoginUrl();
  }

  @Get('/callback')
  @ApiOperation({ summary: 'Start the Auth0 login flow for Github' })
  @ApiOkResponse({ description: 'Login response.' })
  async callback(@Query('code') code: string, @Res() res: Response) {
    const token = await this.authService.exchangeCode(code);
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });

    return res.redirect('http://localhost:8080');
  }
}
