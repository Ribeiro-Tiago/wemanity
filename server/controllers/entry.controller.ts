import { v4 } from "uuid";

import Entry from "../models/entry.model";

export const getEntries = async () => await Entry.find({});

export const createEntry = async (body: any) => {
    body.id = v4();

    return await new Entry(body).save();
};

export const updateEntry = async ({ id }: any, body: any) => await Entry.findOneAndUpdate({ id }, body);