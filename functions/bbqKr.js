const items = require('../src/_data/bbqKr.json')

exports.handler = async (event, context, cb) => {
    
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(items),
    }
  }