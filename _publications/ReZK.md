---
title: "ReZK: A Highly Reconfigurable Accelerator for Zero-Knowledge Proof"
collection: publications
permalink: /publication/ReZK
date: 2024-10-11
venue: 'IEEE Transactions on Circuits and Systems I: Regular Papers'
paperurl: 'https://ieeexplore.ieee.org/document/10714365'
citation: 'Zhou, Hao, Changxu Liu, Lan Yang, Li Shang, and Fan Yang. "ReZK: A Highly Reconfigurable Accelerator for Zero-Knowledge Proof." IEEE Transactions on Circuits and Systems I: Regular Papers (2024).'
---

**Abstract**: Zero-knowledge proof (ZKP) plays a significant role in privacy protection technology. However, the proof generation phase requires considerable time and hardware resources. In this phase, Number Theoretic Transform or Inverse Number Theoretic Transform (NTT/INTT) in polynomial computation, as well as Multiple Scalar Multiplication (MSM), are bottlenecks that dominate the execution time. In this paper, we propose a highly reconfigurable accelerator ReZK to accelerate ZKP proof generation phase, focusing on NTT/INTT and MSM. According to the configurations, ReZK can be configured as NTT, INTT, and MSM with variable sizes and bit-widths by adjusting the data path between on-chip memories and arithmetic cores. As the basic unit of arithmetic cores, the reconfigurable processing element (PE) in ReZK is composed of pipelined modular multipliers and modular adders that support variable bit-widths. It can perform butterfly or arithmetic operations. Based on the reconfigurable PEs, the ReZK core can implement NTT/INTT with different sizes and bit-widths, or a fully pipelined point adder (PADD). Additionally, we propose a modularized MSM scheduling architecture to support various bit-widths. The on-chip memories are also well organized for reuse. In NTT/INTT mode, 4-way 256-bit or 2-way 384-bit NTT/INTT can be computed in parallel. In MSM mode, for different elliptic curves, ReZK is capable of processing 4-way 256-bit or 2-way 384-bit MSM in parallel.

[Download paper here](http://AustinLiu01.github.io/files/ReZK.pdf)
