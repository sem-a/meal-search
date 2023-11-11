import { URL } from "../const";

export const fetchAll = async (table) => {
    const response = await fetch(`${URL + table}/all`);
    const data = await response.json();
    return data.values;
}

export const fetchOne = async (table, id) => {
    const response = await fetch(`${URL + table}/one?id=${id}`);
    const data = await response.json();
    return data.values;
}