export default (obj, ...keysToKeep) =>
  Object.fromEntries(
    Object.entries(obj).filter(([k]) => keysToKeep.includes(k))
  )
