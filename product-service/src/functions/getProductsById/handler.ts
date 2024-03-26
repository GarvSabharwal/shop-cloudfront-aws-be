import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { Product } from 'src/interfaces/product.interface';

import { getProductById } from 'src/services/db/product.db.service';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<Product> = async (event) => {
  const id = event.pathParameters.productId
  const product = getProductById(id);
  return product ? formatJSONResponse(product) : formatJSONResponse('Product Not Found', 404);
};

export const main = middyfy(getProductsById);
