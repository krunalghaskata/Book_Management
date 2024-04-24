const cron = require("node-cron")

// const scheduleOption = {
//     Time: "*/1 * * * *",
// };

// const cronJob = cron.schedule(scheduleOption.Time, (err) => {
//     try {
//         if (cron) {
//             return console.log("Task executed at", new Date());
//         } else {
//             console.log(message.err);
//         }
//     } catch (error) {
//         console.log("Task not executed at a time");
//     }
// });
// cronJob.start();
// console.log("hello", cron);

// module.exports = cron;



// const cron = require("node-cron");

// const scheduleOption = {
//     Time: "* * * * * *", // This should be a valid cron schedule string
// };

// const cronJob = cron.schedule(scheduleOption.Time, (err) => {
//     try {
//         if (!err) {
//             console.log("Task executed at", new Date());
//         } else {
//             console.log(err);
//         }
//     } catch (error) {
//         console.log("Task not executed at a time");
//     }
// });

// cronJob.start();
// console.log("hello", cron);

// module.exports = cron;



// const data = cron.schedule(" * * * * * * ", () => {
//     console.log(data)
// })