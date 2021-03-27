const program = require('commander');
const api = require("./index.js")
program
    .option('-x, --xxx', 'what the x')
program
    .command('add')
    .description('add a task')
    .action(async (...args) => {
      const words = args.slice(0, -1).join(" ")
      await api.add(words).then(() => {
        console.log("添加成功")
        void api.showAll()
      })
    });
program
    .command('clear')
    .description('clear all tasks')
    .action(async () => {
      await api.clear().then(() => {
        console.log('清除成功')
      })
    });
program.parse(process.argv);


if (process.argv.length === 2) {
  void api.showAll()
}
