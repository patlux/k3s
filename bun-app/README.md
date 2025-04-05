# bun-app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

# Infra

```sh
# make sure you started the local docker registry as described in ../README.md
$ docker:build
$ docker:push

$ helm install bun-app ./infra
$ kubectl get services
$ curl <cluster-ip>:3000
Hello World
```
