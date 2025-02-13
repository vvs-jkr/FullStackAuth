'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { verificationService } from '@/features/auth/services'

const ConfirmEmailPage = () => {
	const router = useRouter()
	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search)
		const tokenFromParams = searchParams.get('token')

		if (!tokenFromParams) {
			toast.error('Неверная ссылка подтверждения.')
			router.push('/auth/register')
			return
		}

		setToken(tokenFromParams)

		const confirmEmail = async () => {
			try {
				await verificationService.newVerification(tokenFromParams)
				toast.success('Email успешно подтвержден!')
				router.push('/auth/login')
			} catch (error: any) {
				toast.error(
					`Ошибка подтверждения email: ${error.response?.data?.message || 'Неизвестная ошибка'}`
				)
				router.push('/auth/register')
			}
		}

		confirmEmail()
	}, [router])

	return (
		<div>
			<h1>Подтверждение email...</h1>
			<p>Пожалуйста, подождите...</p>
		</div>
	)
}

export default ConfirmEmailPage
