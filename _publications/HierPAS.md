---
title: "HierPAS: Accelerating Video Generation Models with Hierarchical Precision and Adaptive Sparsity"
collection: publications
permalink: /publication/HierPAS
date: 2026-07-26
venue: 'Proceedings of the 63th ACM/IEEE Design Automation Conference'
paperurl: TBD
citation: 'Changxu Liu, Yifan Song, Ruibin Chen and Fan Yang. "HierPAS: Accelerating Video Generation Models with Hierarchical Precision and Adaptive Sparsity." In Proceedings of the 63th ACM/IEEE Design Automation Conference, pp. 1-6. 2026.'
---

**Abstract**: Diffusion Transformer (DiT)-based video generation models (VGMs) achieve state-of-the-art visual quality through global attention modeling but incur heavy computational overhead due to the quadratic complexity of attention. In high-resolution or long-duration videos, attention often dominates inference latency. However, much of this computation is redundant—many attention scores contribute little to the output and can be safely skipped or approximated. Fully exploiting this redundancy requires (1) identifying important regions in large attention maps, (2) determining adaptive retention ratios across heads and blocks, and (3) handling scores of varying importance efficiently. We present HierPAS, a hardware–software co-optimized design that accelerates VGMs using hierarchical precision and adaptive sparsity. HierPAS employs a lightweight eager attention method to estimate attention patterns and a sampling-based entropy analysis to derive head-wise retention ratios with minimal cost. It applies progressively reduced precision to less critical regions and integrates a configurable top-k engine with a unified multi-precision GEMM engine supporting multiple precisions in one datapath. Evaluations show that HierPAS improves energy efficiency by up to 178 $\times$ over NVIDIA H20 and 7.7 $\times$ over state-of-the-art accelerators, with negligible loss in video quality.

[Download paper here TBD...](https://austinliu01.github.io/publications)
