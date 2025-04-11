UNAME := $(shell uname)

docker:
	docker build -t my-static-site:latest .

ifeq ($(UNAME), Linux)
import:
	docker save my-static-site:latest | k3s ctr images import -
endif
ifeq ($(UNAME), Darwin)
import:
	k3d image import my-static-site:latest
endif

deploy: delete
	kubectl apply -f deployment.yaml

delete:
	kubectl delete deployment static-site --ignore-not-found
	kubectl delete svc static-site-service --ignore-not-found

all: docker import deploy

svc:
	kubectl get svc

pods:
	kubectl get pods
