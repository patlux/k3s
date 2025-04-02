docker:
	docker build -t my-static-site:latest .

import:
	docker save my-static-site:latest | sudo k3s ctr images import -

deploy: delete
	sudo k3s kubectl apply -f deployment.yaml

delete:
	sudo k3s kubectl delete deployment static-site --ignore-not-found
	sudo k3s kubectl delete svc static-site-service --ignore-not-found

all: docker import deploy

svc:
	sudo k3s kubectl get svc

pods:
	sudo k3s kubectl get pods
