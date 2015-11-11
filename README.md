# Trolol - Command line tool for trolling

Troll your friends with a simple command AS QUICKLY AS POSSIBLE. 

![Trolol](https://media.giphy.com/media/4dLgdkQM2kfCg/giphy.gif)

> Currently usable **only on Linux and Mac OS X** machines.

## Installation

```
$ npm install -g trolol
```

## Usage

```
Usage: trolol [options] [command]


Commands:

website <given> <to>             Mirror webpage to a different page
command-not-found|cmd <command>  Overwrite command with a fake alias

Options:

-h, --help     output usage information
-V, --version  output the version number

```

## Examples

### Command not found

Make a given command "not found" with a fake alias. For example existing command `grails`

```
$ trolol command-not-found grails
```

will start throwing error after using a command above

```
-bash: grails: command not found
```

## Contribute

1. Implement a cool and "easy to revert" troll in a bash script
2. Move the script to `./src/bash-scripts/`
3. Write a command to `./bin/trolol` (more info about [commander.js](https://github.com/tj/commander.js))
4. Write a shell script executor to `./src/trolol.js` (more info about [ShellJS](https://github.com/shelljs/shelljs))
5. Test (no automated tests for now)
6. Make a pull request

## License

[MIT](//github.com/ukupat/trolol/blob/master/LICENSE)
