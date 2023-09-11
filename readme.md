## Apply below the steps for launching a dummy server container
- Go to root directory of Node project
- ```docker build -t node-mock-api .```
- ```docker run -dp 127.0.0.1:8080:8080 node-mock-api```
- Go to container terminal and verify that to mock node api is launched