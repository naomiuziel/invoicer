export const formatMoney = value => {
    const formattedNumber = value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return `£${formattedNumber}`;
};

export const capitiliseFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};