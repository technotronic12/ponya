import proton, { IEmail } from 'protonmail-api'

const sendEmail = async (email: IEmail) => {
	const pw = process.env.PROTONMAIL_PW

	const protonMail = await proton.connect({
		username: 'eli@ponya.space',
		password: pw,
	})

	await protonMail.sendEmail(email)
}
