import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      httpApi: {
        method: 'GET',
        path: '/products/{productId}',
        responses: {
          200: {
            description: 'Successful API Response',
            bodyType: 'Product',
          },
          404: {
            description: 'Product Not found',
            bodyType: 'string',
          },
        },
      },
    },
  ],
};