# kubernetes

Simple nginx web server

```sh
# Build the docker image
make docker
# Imports the docker images into k3s containerd
make import
make deploy

curl http://<host>:3346
```
