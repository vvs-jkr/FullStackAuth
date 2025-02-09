'use client'

import { Toaster } from '../components/ui'

export function ToastProvider() {
	return <Toaster position='bottom-right' duration={6000} />
}
