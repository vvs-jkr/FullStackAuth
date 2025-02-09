import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { ProviderModule } from './auth/provider/provider.module'
import { IS_DEV_ENV } from './libs/common/utils/is-dev.utils'
import { MailModule } from './libs/mail/mail.module'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './user/user.module'
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		ProviderModule,
		MailModule,
		PasswordRecoveryModule
	]
})
export class AppModule {}
