#!/usr/bin/env node
const download = require('download-git-repo')
const commander = require('commander')
commander.version('1.0.0', '-v', '-version')
commander.command('init <name>')
commander.action((name) => {
	console.info(name)
	// download
})
commander.parse(process.argv)