

.PHONY: build-client-proto
build-client-proto:
	protoc -I=api/types/ ec2.proto --js_out=import_style=typescript:api/types --grpc-web_out=import_style=typescript,mode=grpcwebtext:api/types

.PHONY: images
images:
	docker build -t alleeclark/hcl-render:latest .