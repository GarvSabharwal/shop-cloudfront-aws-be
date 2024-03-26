import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { getProducts } from 'src/services/db/product.db.service';
const getProductsList = async () => {
    const products = getProducts();
    return formatJSONResponse(products);
};
export const main = middyfy(getProductsList);
//# sourceMappingURL=handler.js.map