docker:
	docker build -t my-static-site:latest .

import:
	docker save my-static-site:latest | sudo k3s ctr images import -

deploy:
	sudo k3s kubectl apply -f deployment.yaml

pods:
	sudo k3s kubectl get pods


