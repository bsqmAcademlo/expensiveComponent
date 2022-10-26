export const data = [
    {
        day: "mon",
        amount: 17.45,
    },
    {
        day: "tue",
        amount: 34.91,
    },
    {
        day: "wed",
        amount: 52.36,
    },
    {
        day: "thu",
        amount: 31.07,
    },
    {
        day: "fri",
        amount: 23.39,
    },
    {
        day: "sat",
        amount: 43.28,
    },
    {
        day: "sun",
        amount: 25.48,
    },
];

export const amountTotal = data.reduce((acum, current) => {
    return (acum += current.amount);
}, 0);

export const newData = data.map((a) => {
    return {
        ...a,
        percent: Number(((a.amount * 100) / amountTotal).toFixed(2)),
    };
});
