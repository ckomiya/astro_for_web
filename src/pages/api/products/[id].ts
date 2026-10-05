import type { APIRoute, GetStaticPaths } from 'astro';

const products = [
  {
    id: '1',
    name: 'Laptop',
    price: 999,
  },
  {
    id: '2',
    name: 'Phone',
    price: 699,
  },
  {
    id: '3',
    name: 'Keyboard',
    price: 99,
  },
];

export const getStaticPaths = (() => {
  return products.map((product) => ({
    params: { id: product.id },
    props: { product },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  return new Response(JSON.stringify(props.product), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
