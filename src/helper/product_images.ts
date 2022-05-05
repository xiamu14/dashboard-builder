export default async function getProductImages() {
  const response = await fetch(
    "https://api.unsplash.com/search/photos?query=products&client_id=84aa7619524f5fdf95ad04f2ec924d05b2dcc5b5d35fdd4f6149f8909e493883&page=1",
    {
      method: "get",
    }
  );
  const result = await response.json();
  return result;
}
