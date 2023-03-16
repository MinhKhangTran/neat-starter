const items = require('../src/_data/price.json')

exports.handler = async (event, context, cb) => {
    console.log(items)
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(items),
    }
  }