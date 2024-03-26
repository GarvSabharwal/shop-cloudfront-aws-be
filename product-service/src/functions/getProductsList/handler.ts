import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { Product } from 'src/interfaces/product.interface';

import { getProducts } from 'src/services/db/product.db.service';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<Product[]> = async () => {
  const products = getProducts();
  return formatJSONResponse(products);
};

export const main = middyfy(getProductsList);
