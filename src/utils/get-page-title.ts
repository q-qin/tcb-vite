const title = '3keji.com';

export const getPageTitle = (pageTitle: unknown)=>{
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
