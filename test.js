import test from 'ava';
import { determineStreak } from './';

const DAY = 1000 * 60 * 60 * 24;
const today = new Date();
const yesterday = new Date() - DAY;
const twoDaysAgo = new Date() - DAY * 2;
const threeDaysAgo = new Date() - DAY * 3;
const fourDaysAgo = new Date() - DAY * 4;
const fiveDaysAgo = new Date() - DAY * 5;
const sixDaysAgo = new Date() - DAY * 6;
const sevenDaysAgo = new Date() - DAY * 7;

test('determine if passed array is a streak', t => {
    const aWeekAndADayStreak = determineStreak([
        today,
        yesterday,
        twoDaysAgo,
        threeDaysAgo,
        fourDaysAgo,
        fiveDaysAgo,
        sixDaysAgo,
        sevenDaysAgo
    ]);

    const notOnAStreakWeek = determineStreak([
        yesterday,
        twoDaysAgo,
        threeDaysAgo,
        fourDaysAgo,
        fiveDaysAgo,
        sixDaysAgo,
        sevenDaysAgo
    ]);

    t.true(aWeekAndADayStreak.isCurrentlyOnStreak);
    t.is(aWeekAndADayStreak.lengthOfTheStreak, 8);

    t.false(notOnAStreakWeek.isCurrentlyOnStreak);
    t.is(notOnAStreakWeek.lengthOfTheStreak, 7);
});
