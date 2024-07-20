import config from '../config/config'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client()
    databases
    bucket
    constructor() {
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({Title, slug, Content, FeaturedImage, Status, UserID}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    Title,
                    Content,
                    FeaturedImage,
                    Status,
                    UserID
                }
            )
        }
        catch (error) {
            console.log('Appwrite service :: createPost :: error', error)
        }
    }

    async updatePost(slug, {Title, Content, FeaturedImage, Status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    Title,
                    Content,
                    FeaturedImage,
                    Status
                }
            )
        }
        catch (error) {
            console.log('Appwrite service :: updatePost :: error', error)
        }
    }
    
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true
        } 
        catch (error) {
            console.log('Appwrite service :: deletePost :: error', error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
        } 
        catch (error) {
            console.log('Appwrite service :: getPost :: error', error)
            return false
        }
    }

    async getPosts(queries = [Query.equal('Status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            )           
        } catch (error) {
            console.log('Appwrite service :: getPosts :: error', error)
            return false
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true
        }
        catch (error) {
            console.log('Appwrite service :: deleteFile :: error', error)
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service()

export default service