# gochatgpt

Golang controlled ChatGPT client with SvelteKit GUI.

There is a golang based RESTful backend. Before running that, you may want to
recompile the SvelteKit frontend.

```
$ cd svelte-src
$ npm install
$ npm run build
```

The root directory should have a symlink `static` pointing to
`svelte-src/build` to make everything run smooth. Then just `go run .` and
enjoy.

You need to have OPENAI_API_KEY set to your personal API key. One way to do
this is to have a simple `chat.sh` script:

```bash
#!/bin/bash
OPENAI_API_KEY=sk-xxx go run main.go
```

Or in Windows, `chat.bat`

```
@echo off
set OPENAI_API_KEY=sk-xxx
go run main.go
```
