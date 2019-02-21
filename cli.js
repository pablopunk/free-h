#!/usr/bin/env node
const stats = require('pc-stats')

//   free: '13.75', total: '34.36', unit: 'GB' }
//               total        used        free      shared  buff/cache   available
// Mem:           875M         80M        239M         44M        555M        695M
// Swap:           99M          0B         99M

stats().then(({ ram }) => {
  console.log(`
    \t\ttotal\t\tused\t\tfree
Mem:\t\t${ram.total}${ram.unit}\t\t${ram.total-ram.free}${ram.unit}\t\t${ram.free}${ram.unit}
  `)
})
