declare module 'protonmail-api' {
  export function connect(
    credentials: IProtonMailCredentials,
  ): IProtonMailClient

  export interface IEmail {
    to: string
    subject: string
    body: string
  }

  export interface IProtonMailClient {
    sendEmail(email: IEmail): void
  }

  export interface IProtonMailCredentials {
    username: string
    password: string
  }
}
