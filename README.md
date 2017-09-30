# Date Streak

For now only one function, which determines if you are currently on a streak of dates, and the length of the last streak.

```
    import { determineStreak } from 'date-streak';

    determineStreak([
        today,
        yesterday,
        twoDaysAgo,
        threeDaysAgo,
        fourDaysAgo,
        fiveDaysAgo,
        sixDaysAgo,
        sevenDaysAgo
    ]) // { isCurrentlyOnStreak: true, lengthOfTheLastStreak: 8 }
```