---
title: "Gypsophila: A Scalable and Bandwidth-Optimized Multi-Scalar Multiplication Architecture"
collection: publications
permalink: /publication/Gypsophila
date: 2024-07-23
venue: 'Proceedings of the 61st ACM/IEEE Design Automation Conference'
paperurl: 'https://dl.acm.org/doi/10.1145/3649329.3658259'
citation: 'Liu, Changxu, Hao Zhou, Lan Yang, Jiamin Xu, Patrick Dai, and Fan Yang. "Gypsophila: A scalable and bandwidth-optimized multi-scalar multiplication architecture." In Proceedings of the 61st ACM/IEEE Design Automation Conference, pp. 1-6. 2024.'
---

Abstract: Multi-Scalar Multiplication (MSM) is a fundamental cryptographic primitive, which plays a crucial role in Zero-knowledge proof systems. In this paper, we optimize the single MSM Process Element (PE) utilizing buckets with fewer conflicts, enhanced by Greedy-based scheduling, to achieve higher efficiency. The evaluation results show our optimized single MSM PE achieving a speedup of over two times on average, peaking at 3.63 times compared to previous works. Furthermore, we introduce Gypsophila, a scalable and bandwidth-optimized architecture for implementing multiple MSM PEs. Leveraging the characteristics of the bucket method, we optimize the data flow by balancing the throughput of bucket classification, bucket aggregation, and result aggregation in MSM. Simultaneously, multiple PEs with different data access patterns share a universal point input channel and post-processing unit, which improves the module utilization and mitigates the bandwidth pressure. Gypsophila with 16 PEs, accomplishes 16 MSM tasks in a mere 1.01% additional time, showcasing an approximate 7.8% reduction in area, with only about 1/16 of the bandwidth requirement, compared with 16 PEs without input channel and post-process unit sharing.

[Download paper here](http://AustinLiu01.github.io/files/Gypsophila.pdf)
