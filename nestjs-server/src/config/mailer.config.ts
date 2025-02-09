import { MailerOptions } from '@nestjs-modules/mailer'
import { ConfigService } from '@nestjs/config'

import { isDev } from '@/libs/common/utils/is-dev.utils'


export const getMailerConfig = async (
	configService: ConfigService
 ): Promise<MailerOptions> => ({
	transport: {
	  service: 'resend', 
	  auth: {
		 api_key: configService.getOrThrow<string>('RESEND_API_KEY'),
	  },
	},
	defaults: {
	  from: '"VS Dev" <no-reply@vs-fullauth.org>', 
	},
 });