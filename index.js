#!/usr/bin/env node
const inquirer = require('inquirer')
const download = require('download-git-repo')
const commander = require('commander')
commander.version('1.0.0', '-v', '-version')
commander.command('init <name>')
commander.action((name) => {
	console.info(name)
	let templateGitUrl = 'direct:https://github.com/Carry-Cheng/vnode-cli.git#vn-test'
	download(templateGitUrl, name, { clone: true }, (error) => {
		console.info(error)
	})
})
// inquirer.prompt([
// 	{
// 		type: 'confirm',
// 		name: 'test',
// 		message: 'Are you handsome?',
// 		default: true
// 	}
// ]).then(answers => {
// 	console.info('answser', answers)
// })
commander.parse(process.argv)