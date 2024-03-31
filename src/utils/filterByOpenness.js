export function filterByOpenness(groups, groupType) {
  return groups.filter((group) => {
    if (groupType === "all") {
      return true
    } else if (groupType === "closed") {
      return group.closed === true
    } else if (groupType === "open") {
      return group.closed === false
    }
  });
}

