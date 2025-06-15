export async function apiData() {
  const data = await fetch("https://corsproxy.io/?" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0340006&lng=73.0155049&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
  const mockData = await data.json();
  return mockData;
}

export const menuApi = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0340006&lng=73.0155049&restaurantId="