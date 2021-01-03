# Node.js printf implementation benchmark

## Results

|**implementation**|**without_placeholders**|**with_string_placeholder**|**with_many_string_placeholders**|
|-|-|-|-|
|[`sprintf`](https://github.com/alexei/sprintf.js)|31,127,641|4,283,540|1,433,536|
|[`printf`](https://github.com/adaltas/node-printf)|669,939|416,429|283,788|
|[`fast-printf`](https://github.com/gajus/fast-printf)|75,688,380|13,013,351|5,162,244|

Results show operations per second (greater is better).

System used to run benchmarks:

```
System:
  OS: macOS 10.15.6
  CPU: (16) x64 Intel(R) Core(TM) i9-9980HK CPU @ 2.40GHz
  Memory: 64.00 GB
Binaries:
  Node: 15.2.1
```

<!-- Use https://npmjs.com/envinfo to generate the system information. -->

## Run benchmark

```bash
npm install
npm run benchmark

```

