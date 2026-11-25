import {performance} from 'node:perf_hooks';
import {pathToFileURL} from 'node:url';
const {buildAgentNameContext}=await import(pathToFileURL(process.argv[2]));
const agents=Array.from({length:5000},(_,i)=>({id:`synthetic-${i}`,name:`Catalogue Agent ${i}`,inputs:[]}));
const start=performance.now();const result=buildAgentNameContext(agents);const milliseconds=performance.now()-start;
if(result.size!==0)throw Error('Unrelated synthetic titles unexpectedly matched');
console.log(JSON.stringify({fixture:'5000 synthetic titles sharing one non-generic term',agents:agents.length,matches:result.size,milliseconds,scope:'One pure index pass, not end-to-end UI timing'}));
