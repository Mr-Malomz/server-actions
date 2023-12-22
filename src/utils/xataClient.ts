import { XataClient } from "@/xata";

export const xataClient = () => {
    const xata = new XataClient({
        databaseURL: process.env.XATA_DATABASE_URL,
        apiKey: process.env.XATA_API_KEY,
        branch: 'main'
    });

    return xata;
};
