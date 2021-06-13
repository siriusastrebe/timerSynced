Did you know, setInterval will drift over time? Because node.js is single threaded, events are often delayed, events like setInterval and setTimeout occur sometime AFTER the number of milliseconds you specify. Overtime these delays add up considerably with setInterval.

# timerDrift.js
A demonstration of javascript time drift (timerDrift.js) in setInterval

# timerSynced.js
A javascript solution to best approximate a consistent time interval
