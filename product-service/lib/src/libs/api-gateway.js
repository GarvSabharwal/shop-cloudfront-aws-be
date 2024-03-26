export const formatJSONResponse = (response, statusCode = 200) => {
    return {
        statusCode,
        body: JSON.stringify(response)
    };
};
//# sourceMappingURL=api-gateway.js.map