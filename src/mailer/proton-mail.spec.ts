import { expect, use } from 'chai'
import proton from 'protonmail-api'
import { createSandbox, match } from 'sinon'
import sinonChai from 'sinon-chai'
import { sendEmail } from './proton-mail'
import { username } from './constants'

use(sinonChai)

describe('Protonmail', () => {
	const sandbox = createSandbox()
	const protonClientMock = { sendEmail: sandbox.stub() }

	beforeEach(() => {
		sandbox.stub(proton, 'connect').returns(protonClientMock)

		sendEmail({
			to: 'some',
			subject: 'bla',
			body: 'body',
		})
	})

	afterEach(sandbox.restore)

	it('should connect', () => {
		expect(proton.connect).to.have.been.calledWithMatch({
			username,
			password: match.any,
		})
	})

	it('should call sendEmail on proton client returned from the connect method', () => {
		expect(protonClientMock.sendEmail).to.have.been.called
	})
})
