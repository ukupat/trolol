# Trolol - Command line tool for trolling

Troll your friends with a simple command AS QUICKLY AS POSSIBLE.

![Trolol](https://media.giphy.com/media/4dLgdkQM2kfCg/giphy.gif)

> Currently usable **only on Linux and Mac OS X** machines.

## Installation

Install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) and use it to install `trolol` globally

```
$ npm install -g trolol
```

## Usage

```
  Usage: trolol [options] [command]


  Commands:

    command-not-found|cmd <command>      Overwrite command with a fake alias

    rebecca-black|rebecca [options]      Play Rebecca Black Greatest Hits in a browser ("Friday" is default)
    steve [options]                      Open "Developers by Steve Balmer" in a browser

    volume-level|vol [options] <length>  Change volume level randomly in period of time (length in seconds)
    brightness [options] <length>        Change brightness randomly in period of time (length in seconds)
    screensaver [options] <times>        Start the screensaver with a random interval of 5 to 30 seconds
    shutdown <program> [options]         Shut down a program at random intervals, between 5 and 20 minutes

    move-mouse|mouse [options] <length>  Move mouse slowly and randomly across the screen
    disable-mouse [options] <length>     Disable mouse cursor for some time (length in seconds)

    beep [options] <times>               Beeep beeeeep, annoying little sh*t
    eject [options] <times>              Eject media from drive after every 15 seconds n time

    say [options] <message>              [MAC ONLY] Scare the sh*t out of your dude with a speaking computer
    mmm [options]                        [MAC ONLY] Receive repeated approval from your computer
    photo-booth [options] <times>        [MAC ONLY] Open up Photo booth n times
    spotify [options] <times>            [MAC ONLY] Switch Spotify music track back after every 15 seconds n time

    website <from> <to>                  [RUN AS ADMIN] Redirect webpage to a different site
    motd-dickbutt|dickbutt               [RUN AS ADMIN] Add Dickbutt ASCII art text to Terminal Message of the day

  Options:

    -h, --help     output usage information
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

### Change volume level randomly

Command

```
$ trolol volume-level 10 --wait 25
```

will start changing volume level after 25 seconds randomly 10 times.

### Move mouse

Command

```
$ trolol move-mouse 60
```

will move the mouse 60 seconds randomly across the screen

### Shutdown

Command

```
$ trolol shutdown iTunes
```

Will shut down iTunes randomly every 5 - 20 minutes, a total of 10 times

```
$ trolol shutdown iTunes --times 4 --wait 1 --range 1
$ trolol shutdown iTunes -t 4 -w 1 -r 1
```

Will shut down iTunes randomly every 1 - 2 minutes, a total of 4 times.

## Contribute

1. Implement a cool and "easy to revert" troll in a bash script
2. Move the script to `./src/scripts`
3. Write a command to `./bin/trolol` (more info about [commander.js](https://github.com/tj/commander.js))
4. Write a shell script executor to `./src/trolol.js` (more info about [ShellJS](https://github.com/shelljs/shelljs))
5. Test (no automated tests for now)
6. Make a pull request

With a **succesful contribution** you can **write your name in history**.

## License

[MIT](//github.com/ukupat/trolol/blob/master/LICENSE)
