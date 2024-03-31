export const filterByFriends = (groups, searchType) => {
    if (searchType === 'all') {
      return groups
    } else if (searchType) {
      return groups.filter((item) => item.friends && item.friends.length >= 1)
    }
}
