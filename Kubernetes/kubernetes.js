/**
 "question": "What is Kubernetes?",
 "answer": "Container orchestration software developed and open sourced by
 Google. The name is Greek for Helmsman. It's so known as K8s."
 */

/**
 * "question": "Why does K8s exist?"
 * "answer": "Scaling containers is challenging. And we're starting to view
 * data centers as a computer. We don't need to specify where it runs, K8s
 * just runs it for us. It's like sending packages in the mail. We package up
 * something to the provided spec. and send it off. The mail company does the
 * rest."
 */

/**
 * "question": "What is the kube-apiserver?"
 * "answer": "Part of a master node. Front-end to the control pane. Exposes
 * the API (REST).
 * Consumes JSON(via manifest files)
 * It's the only component of the master we really deal with."
 */

/**
 * "question": "What is the cluster store?"
 * "answer": "Part of a master node. Persistent storage. Cluster state and
 * config. Uses etcd(a key-value store). Distributed, consistent,
 * watchable... The 'source of truth' for the cluster. Have a backup plan for
 * it!"
 */

/**
 * "question": "What is the kube-controller-manager?"
 * "answer": "Part of a master node. Controller of controllers. Node
 * controller, endpoints
 * controller, namespace controller, ... Watches for changes. Helps maintain
 * desired state."
 */

/**
 * "question": "What is the kube-scheduler?"
 * "answer": "Part of a master node. Watches apiserver for new pods. Assigns
 * work to nodes:
 * affinity/anti-affinity, constraints, resources, ..."
 */

/**
 * "question": "What are the main components to the Kubernetes Master?"
 * "answer": "kube-apiserver, cluster store, kube-controller-manager,
 * kube-scheduler."
 */

/**
 * "question": "What are Kubernetes Nodes/Minion?"
 * "answer": "They are workers managed by the Master node."
 */

/**
 * "question": "What are the components to a Kubernetes Node?"
 * "answer": "Kubelet, container runtime, proxy."
 */

/**
 *"question": "What is the Kubelet?"
 * "answer": "The main Kubernetes engine on the node. Registers node with
 * cluster. Watches apiserver on the master for work packages. Instantiates
 * pods(work packages). Reports back to master on the status of the work
 * that's running. So
 * if the pod fails, it just reports the state. It doesn't restart the node.
 * The Kubelet exposes an endpoint on the localhost:10255 where you can
 * inspect the Kublet. (/spec /healthz /pods)"
 */

/**
 * "question": "What is a Kubernetes node container engine?"
 * "answer": "This is used to manage containers inside a Kubernetes node's pods.
 * Pulling images. Stopping/Starting containers. Docker, rkt, ..."
 */

/**
 * "question": "What is kube-proxy?"
 * "answer": "Manages Kubernetes networking for a Kubernetes node. Makes
 * sure each pod gets its own unique IP. Each container in a pod share a
 * single IP. Load balances across all pods in a service. (A service is a way
 * to hide multiple pods behind a single address.)"
 */

/**
 * "question": "How does K8s use 'Desired State and the Declarative Model'?",
 * "answer": "One provides a declarative manifest file describing desired
 * state to the Master, that runs a reconciliation loop to ensure the nodes
 * are as described in the document. Yay declarative. Less work for me, and
 * the imperative code behind the scenes is well tested, and can be used
 * across projects."
 */