
interface IIdentity {
  connection: string,
  isSocial: boolean,
  provider: string,
  user_id: string,
}

/**
 * @see https://auth0.com/docs/user-profile/user-profile-structure
 */
export class UserProfile {
  constructor(
    name: string,
    email: string,
    email_verified: boolean,
    picture: string,
    identities: [IIdentity],
    createdAt: any,
    phone_number: string,
    phone_verified: boolean,
    user_id?: string,
    nickname?: string,
  ) {}
}
