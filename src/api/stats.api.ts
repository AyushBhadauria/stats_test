import { StatsModel } from "./stats.model";

const userStats: StatsModel[] = [
    {
        xAxis: 1,
        yAxis: 10
    },
    {
        xAxis: 2,
        yAxis: 15
    },
    {
        xAxis: 3,
        yAxis: 16
    },
    {
        xAxis: 4,
        yAxis: 55
    },
    {
        xAxis: 5,
        yAxis: 32
    },
    {
        xAxis: 6,
        yAxis: 45
    },
    {
        xAxis: 7,
        yAxis: 65
    },
    {
        xAxis: 8,
        yAxis: 25
    },
    {
        xAxis: 9,
        yAxis: 92
    },
    {
        xAxis: 10,
        yAxis: 76
    }
]

export const getStatsByUserId = (userId: number, offset: number): Promise<StatsModel[]> => (
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(userStats.slice(0, offset));
        }, 500);
    })
);