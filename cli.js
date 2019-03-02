#!/usr/bin/env node
const stats = require('pc-stats')

stats().then(({ ram }) => {
  const { total, unit, free } = ram
  const used = (total-free).toFixed(2)

  console.log(`
    \t\ttotal\t\tused\t\tfree
Mem:\t\t${total}${unit}\t\t${used}${unit}\t\t${free}${unit}
  `)
})
