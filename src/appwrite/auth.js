import config from '../config/config'
import { Client, Account, ID } from 'appwrite'

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('[PROJECT_ID]')

// const account = new Account(client)

// const user = await account.create(
//     ID.unique(),
//     'email@example.com',
//     'password'
// )

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            }
            else {
                return userAccount
            }
        }
        catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password)
        }
        catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        }
        catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error)
        }
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        }
        catch (error) {
            console.log('Appwrite service :: logout :: error', error)
        }
    }
}

const authService = new AuthService()

export default authService