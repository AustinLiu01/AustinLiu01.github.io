---
title: "PriorMSM: An Efficient Acceleration Architecture for Multi-Scalar Multiplication"
collection: publications
permalink: /publication/PriorMSM
excerpt: 'Abstract: Multi-scalar multiplication (MSM), crucial for zero-knowledge proof (ZKP), is computationally intensive, and this paper introduces PriorMSM, an efficient acceleration architecture that utilizes a Priority-Based Scheduling Mechanism (PBSM) and a parallel bucket aggregation algorithm to improve performance. Evaluations show that PriorMSM achieves up to 10.9× speedup over previous hardware implementations and 3.9× over GPU implementations.'
date: 2024-08
venue: 'ACM Trans. Des. Autom. Electron. Syst., Vol. 29, No. 5, Article 77'
paperurl: 'https://dl.acm.org/doi/10.1145/3678006'
citation: 'Liu, Changxu, Hao Zhou, Patrick Dai, Li Shang, and Fan Yang. "Priormsm: An efficient acceleration architecture for multi-scalar multiplication." ACM Transactions on Design Automation of Electronic Systems 29, no. 5 (2024): 1-26.'
---

Abstract: Multi-scalar multiplication (MSM) is a computationally intensive task that operates on elliptic curves based on GF (P). It is commonly used in zero-knowledge proof (ZKP), where it accounts for a significant portion of the computation time required for proof generation. In this article, we present PriorMSM, an efficient acceleration architecture for MSM. We propose a Priority-Based Scheduling Mechanism (PBSM) based on a multi-FIFO and multi-bank architecture to accelerate the implementation of MSM. By increasing the pairing success rate of internal points, PBSM reduces the number of bubbles in the pipeline of point addition (PADD), consequently improving the data throughput of the pipeline. We also introduce an advanced parallel bucket aggregation algorithm, leveraging PADD’s fully pipelined characteristics to significantly accelerate the implementation of bucket aggregation. We perform a sensitivity analysis on the crucial parameter of window size in MSM. The results indicate that the window size of the MSM significantly impacts its latency. AreaTime Product (ATP) metric is introduced to guide the selection of the optimal window size, balancing the performance and cost for practical applications of subsequent MSM implementations. PriorMSM is evaluated using the TSMC 28 nm process. It achieves a maximum speedup of 10.9× compared to the previous custom hardware implementations and a maximum speedup of 3.9× compared to the GPU implementations.

[Download paper here](http://academicpages.github.io/files/PriorMSM.pdf)

Recommended citation: Liu, Changxu, Hao Zhou, Patrick Dai, Li Shang, and Fan Yang. "Priormsm: An efficient acceleration architecture for multi-scalar multiplication." ACM Transactions on Design Automation of Electronic Systems 29, no. 5 (2024): 1-26.
