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
$ bun docker:build

# if you use a docker registry
$ bun docker:push
# if you import it manually
# k3d
$ k3d image import localhost:5000/k3s-bun-app

$ helm install bun-app ./infra
$ kubectl get services
$ curl <cluster-ip>:3000
Hello World

# Reach from outside
kubectl describe ingress
# copy the ip and insert it into your /etc/hosts
198.19.249.27 bun-app.local
# now open http://bun-app.local

# Re-install
helm upgrade bun-app . --reuse-values --set-string forceRestart=$(date +%s)
```
