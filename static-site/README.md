# kubernetes

my first steps with kubernetes

```sh
# Build the docker image
make docker
# Imports the docker images into k3s containerd
make import
make deploy

make svc # grep internal ip
curl http://<host>:3346

# reach from outside
curl http://static-site.116.203.217.202.sslip.io
```
