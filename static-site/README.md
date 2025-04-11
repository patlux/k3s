# kubernetes

Simple nginx web server

```sh
# Build the docker image
make docker
# Imports the docker images
make import # k3s on linux, k3d on mac
make deploy

# or all in one:
make all

# get address
kubectl get ingress
curl http://<address>
```
