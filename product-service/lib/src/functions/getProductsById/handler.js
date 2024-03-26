import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { getProductById } from 'src/services/db/product.db.service';
const getProductsById = async (event) => {
    const productId = event.pathParameters.productId;
    const product = getProductById(productId);
    return product ? formatJSONResponse(product) : formatJSONResponse('Product not found', 404);
};
export const main = middyfy(getProductsById);
//# sourceMappingURL=handler.js.map