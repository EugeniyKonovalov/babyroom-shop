import { $host } from "./index";

export const createType = async (type) => {
  const { data } = await $host.post(
    "https://babyroom-server.herokuapp.com/api/type",
    type
  );
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get(
    "https://babyroom-server.herokuapp.com/api/type"
  );
  return data;
};
export const createBrand = async (brand) => {
  const { data } = await $host.post(
    "https://babyroom-server.herokuapp.com/api/brand",
    brand
  );
  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get(
    "https://babyroom-server.herokuapp.com/api/brand"
  );
  return data;
};
export const createProduct = async (product) => {
  const { data } = await $host.post(
    "https://babyroom-server.herokuapp.com/api/product",
    product
  );
  return data;
};
export const fetchProducts = async (typeId, brandId, page, limit) => {
  const { data } = await $host.get(
    "https://babyroom-server.herokuapp.com/api/product",
    {
      params: {
        typeId,
        brandId,
        page,
        limit,
      },
    }
  );
  return data;
};
export const fetchOneProducts = async (id) => {
  const { data } = await $host.get(
    "https://babyroom-server.herokuapp.com/api/product/" + id
  );
  return data;
};
