import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

export interface TokenResponse {
  access_token: string;
  id_token: string;
  refresh_token?: string;
  token_type: string;
  expires_in: number;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    protected readonly jwtService: JwtService,
  ) {}

  private createUrl(params: Record<string, string>): string {
    const domain = this.configService.getOrThrow<string>('AUTH0_DOMAIN');
    const clientId = this.configService.getOrThrow<string>('AUTH0_CLIENT_ID');
    const callbackUrl =
      this.configService.getOrThrow<string>('AUTH0_CALLBACK_URL');
    const urlParams = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: callbackUrl,
      scope: 'openid profile email',
      ...params,
    });

    return `https://${domain}/authorize?${urlParams}`;
  }

  async exchangeCode(code: string): Promise<string> {
    const domain = this.configService.getOrThrow<string>('AUTH0_DOMAIN');

    const response = await fetch(`https://${domain}/oauth/token`, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: this.configService.getOrThrow<string>('AUTH0_CLIENT_ID'),
        client_secret: this.configService.getOrThrow<string>(
          'AUTH0_CLIENT_SECRET',
        ),
        code,
        redirect_uri:
          this.configService.getOrThrow<string>('AUTH0_CALLBACK_URL'),
      }),
    });

    const payload = await response.json();

    if (!response.ok) {
      throw new UnauthorizedException(
        payload?.error_description ?? 'Auth0 token exchange failed',
      );
    }

    const profile = new JwtService().decode(payload.id_token);

    const user = await this.userService.create(profile);
    const token = await this.generateToken(user);
    return token;
  }

  getLoginUrl() {
    return this.createUrl({ scope: 'openid profile email' });
  }

  getGoogleLoginUrl() {
    return this.createUrl({ connection: 'google-oauth2' });
  }

  getGithubLoginUrl() {
    return this.createUrl({ connection: 'github' });
  }

  private generateToken(user: any) {
    return this.jwtService.signAsync({
      id: user.id,
    });
  }
}
