export const createArrayFromNumber = number => {
    const rows = [];

    for (let index = 0; index < number; index++) {
        rows.push(index);
    }

    return rows;
};