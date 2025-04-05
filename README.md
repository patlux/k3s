# k3s

My first steps with kubernetes

[./static-site/README.md](./static-site/README.md)

## Setup local docker registry

```sh
helm repo add twuni https://helm.twun.io
helm install docker-registry twuni/docker-registry
# kubectl get pods to grab podname
kubectl -n default port-forward <podname> 5000:5000
```
