const InjectUrlToMenuNavItem = (item, username) => {
  if (item?.key && item.key === 'viewProfile') {
      return {
          ...item,
          route: `/${username}`
      };
  }
  if (item?.submenu && item.submenu.length > 0) {
      item.submenu = item.submenu.map((subItem) => {
          if (subItem?.key && subItem.key === 'viewProfile') {
              return {
                  ...subItem,
                  route: `/${username}`
              };
          }
          return subItem;
      });
  }
  return item;
};

const getMenuDataForRole = (userInfo, menuDataForContributor, menuDataForUser) => {
  let fetchedMenuData = [];
  if (userInfo && (userInfo.role === 'contributor' || userInfo.role === 'researcher')) {
      fetchedMenuData = menuDataForContributor.map((item) => {
          return InjectUrlToMenuNavItem(item, userInfo.username);
      });
  } else {
      fetchedMenuData = menuDataForUser.map((item) => {
          return InjectUrlToMenuNavItem(item, userInfo.username);
      });
  }
  return fetchedMenuData;
};

export { getMenuDataForRole };

