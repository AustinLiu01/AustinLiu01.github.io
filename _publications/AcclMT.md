---
title: "AcclMT: A Highly Resource-Efficient and Flexible Poseidon Hash-Based Merkle Tree Architecture"
collection: publications
permalink: /publication/AcclMT
date: 2025-06-22
venue: 'Proceedings of the 62nd ACM/IEEE Design Automation Conference'
paperurl: Waiting Process...
citation: 'Changxu Liu, Hao Zhou, Lan Yang, Yifei Feng, Zheng Wu, Zhuoyuan Yang, Yinlong Li, Shiyong Wu and Fan Yang. "AcclMT: A Highly Resource-Efficient and Flexible Poseidon Hash-Based Merkle Tree Architecture." In Proceedings of the 62nd ACM/IEEE Design Automation Conference, pp. 1-6. 2025.'
---

**Abstract**: Merkle Tree is a fundamental cryptographic primitive in Zero-Knowledge Proof (ZKP) protocols, sharing significant computational workloads with the Number Theoretic Transform (NTT) in zk-STARK schemes. Merkle Tree is a tree structure where nodes are primarily generated through hash computations. Among them, Poseidon Hash, as a ZK-friendly hash function, has emerged as one of the most widely adopted choices. Therefore, hardware acceleration of building Merkle Tree based on Poseidon Hash can significantly enhance the performance of ZKP protocols. We propose AcclMT, a highly resource-efficient and flexible Poseidon Hash-based Merkle Tree architecture. Our design employs hardware-software co-design and optimizes the hashing data flow, resulting in an area-efficient Poseidon Hash engine that improves modular multiplication resource utilization. Furthermore, AcclMT uses these engines alongside hierarchical on-chip cache and optimized task scheduling for building large Merkle Trees. It also supports flexible parameter configurations for various requirements. Experimental results show that our proposed Poseidon Hash engine achieves a 14.3 × speedup compared to the latest FPGA-based work. By improving resource utilization, it also reduces area usage by 14.8% compared to unoptimized design. AcclMT achieves up to 1665 × speedup over software implementations in building Merkle tree, with average utilization of 95.9% and 99.2% for the two hash engines.

[Download paper here](http://AustinLiu01.github.io/files/AcclMT.pdf)
