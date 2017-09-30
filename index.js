'use strict';

const todayBegingOfTheDay = new Date();
const todayEndingOfTheDay = new Date();
todayBegingOfTheDay.setHours(0);
todayBegingOfTheDay.setMinutes(0);
todayEndingOfTheDay.setHours(23);
todayEndingOfTheDay.setMinutes(59);

function determineStreak(dateArray) {
    const normalizeDates = dateArray
        .filter(Boolean)
        .map(function(singleDate) {
            return new Date(singleDate).getTime();
        })
        .sort()
        .reverse();

    const lastStreak = normalizeDates.reduce(function(
        newArrayOfStreaks,
        singleItem
    ) {
        const currentItem = new Date(singleItem).getDay();
        let prevNumber =
            new Date(newArrayOfStreaks[newArrayOfStreaks.length - 1]).getDay() -
                1 || 0;
        if (prevNumber < 0) {
            prevNumber = 6;
        }

        if (!newArrayOfStreaks.length || prevNumber === currentItem) {
            return newArrayOfStreaks.concat(singleItem);
        }

        return newArrayOfStreaks;
    }, []);

    const isThereAToday = lastStreak.some(function(singleDay) {
        return (
            singleDay < todayEndingOfTheDay && singleDay > todayBegingOfTheDay
        );
    });

    return {
        isCurrentlyOnStreak: isThereAToday,
        lengthOfTheLastStreak: lastStreak.length
    };
}

module.exports = {
    determineStreak
};
