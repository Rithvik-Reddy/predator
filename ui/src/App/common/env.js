
module.exports = {
  PREDATOR_BUCKET_PATH: (process.env.NODE_ENV === 'production') ? 'predator' : '',
  PREDATOR_URL: process.env.PREDATOR_URL || 'http://predator.performance-framework.dcos-internal.qa-fra-apps.zooz.co/v1',
};
