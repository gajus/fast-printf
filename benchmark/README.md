# Node.js printf implementation benchmark

## Results

|**implementation**|**without_placeholders**|**with_string_placeholder**|**with_many_string_placeholders**|
|-|-|-|-|
|[`sprintf`](https://github.com/alexei/sprintf.js)|31,772,029|4,154,748|637,229|
|[`printf`](https://github.com/adaltas/node-printf)|651,970|373,615|160,795|
|[`fast-printf`](https://github.com/gajus/fast-printf)|78,068,540|11,820,632|2,552,386|

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

