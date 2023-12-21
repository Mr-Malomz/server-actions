import { Account, Client } from "appwrite";

export const client = new Client();

client.headers = { "X-Appwrite-Key": process.env.APPWRITE_API_KEY! }
client
	.setEndpoint(process.env.APPWRITE_URL!)
	.setProject(process.env.APPWRITE_PROJECT_ID!);

export const account = new Account(client);