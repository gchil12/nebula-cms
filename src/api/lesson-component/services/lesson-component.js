'use strict';

/**
 * lesson-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lesson-component.lesson-component');
