exports.handler = async (event, context, cb) => {
    return {
      statusCode: 200,
      body: 'Netlify Serverless functions sind toll',
    }
  }