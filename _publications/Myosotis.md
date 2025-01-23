---
title: "Myosotis: An Efficiently Pipelined and Parameterized Multi-Scalar Multiplication Architecture via Data Sharing"
collection: publications
permalink: /publication/Myosotis
date: 2024-12-24
venue: 'IEEE TRANSACTIONS ON COMPUTER-AIDED DESIGN OF INTEGRATED CIRCUITS AND SYSTEMS'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/10818748/'
citation: '**Liu, Changxu**, Hao Zhou, Lan Yang, Zheng Wu, Patrick Dai, Yinlong Li, Shiyong Wu, and Fan Yang. "Myosotis: An Efficiently Pipelined and Parameterized Multi-Scalar Multiplication Architecture via Data Sharing." IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (2024).'
---

**Abstract**: Zero-knowledge proof (ZKP) is a widely used privacy-preserving technology, where Multi-Scalar Multiplication (MSM) accounts for over 70% of the computational workload. The acceleration of MSM can enhance the overall performance of ZKP, making it a focal point of community attention. However, in practical applications involving the deployment of multiple MSM accelerators, existing designs often overlook strategies for
optimizing bandwidth and area efficiency. To address this, we
propose Myosotis, an efficiently pipelined and parameterized
Multi-Scalar Multiplication architecture. By sharing input data
and allocating cache effectively, it mitigates average transmission
bandwidth in runtime. Myosotis also supports the use of multiple
Point Addition (PADD) units to achieve performance gains,
balancing area overhead and latency for improved area efficiency.
Different parameter selection enables a trade-off between the
performance, area, and bandwidth of the MSM accelerator. When
benchmarking with MSM degrees between 2^18 and 2^26, our proposed baseline design achieves up to 3.32× and 6.72× speedups
over state-of-the-art FPGA and ASIC designs. Compared to the
baseline, Myosotis with two window MSMs and one PADD unit
reduces bandwidth demand by 43% while maintaining similar
area and latency. On the other hand, Myosotis with three window
MSMs and two PADD units decreases latency by 43% and
bandwidth by 17%, with only a 9% area increase.

[Download paper here](http://AustinLiu01.github.io/files/Myosotis_An_Efficiently_Pipeline…rchitecture_via_Data_Sharing.pdf)
