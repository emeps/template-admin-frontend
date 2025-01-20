import type {Metadata} from "next";

export const setMetadata = (title:string, description:string):Metadata => {
    return {
        title: title + " | " + process.env.APP_NAME,
        description: description,
    }
}