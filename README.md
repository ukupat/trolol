# trolol
Troll your friends AS QUICKLY AS POSSIBLE with a command

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

## License

[MIT](//github.com/ukupat/trolol/blob/master/LICENSE)
