import proton, { IEmail, IProtonMailClient } from 'protonmail-api'
import { username } from './constants'

export const sendEmail = async (email: IEmail) => {
	const pw = process.env.PROTONMAIL_PW

	const protonMail: IProtonMailClient = await proton.connect({
		username,
		password: pw,
	})

	await protonMail.sendEmail(email)
}
