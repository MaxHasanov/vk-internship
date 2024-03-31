export function filterByAvatarColor(groups, color) {
   if (color === 'all') {
    return groups
  } else {
    return groups.filter(group => group.avatar_color === color);
  }
}