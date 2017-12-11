# nexusctl

Nexus command line tools.

## Installation

Install the `nexusctl` tools using the `npm` global option:

```
npm install -g simonbates/nexusctl
```

This command will install the `nexusctl` tools so that they may be run from the command line.

## Usage

### nexusctl-load

Load a Nexus configuration JSON file into a running Nexus.

```
$ nexusctl-load [options] <file>
```

#### Available Options

- `-H` or `--host` `<hostname>` Host of Nexus (default: localhost)
- `-p` or `--port` `<portnumber>` Port number of Nexus (default: 9081)
- `-h` or `--help` output usage information
