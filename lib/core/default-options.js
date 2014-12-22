'use strict';

var types = require('./svm-types');
var kernels = require('./kernel-types');

module.exports = {
    // svm type
    'svm-type': types.C_SVC,

    // kernels parameters
    'kernel-type': kernels.RBF,
    'degree': [2,3,4],                        // for POLY kernel
    'gamma': [0.001, 0.03125, 0.125, 0.5, 1], // for POLY, RBF and SIGMOID kernels
    'r': [0.125, 0.5, 0, 1, 2, 8],            // for POLY and SIGMOID kernels

    // SVM specific parameters
    'c': [0.03125, 0.125, 0.5, 2, 8],         // cost for C_SVC, EPSILON_SVR and NU_SVR
    'nu': [0.03125, 0.125, 0.5, 0.75, 1],     // for NU_SVC and NU_SVR
    'epsilon': [0.03125, 0.125, 0.5, 2, 8],   // for EPSILON-SVR

    // training options
    'k-fold': 4,                              // k parameter for k-fold cross validation
                                              // k must be >= 1
                                              // if k===1: entire dataset is use for both tests and training
                                              // (see http://en.wikipedia.org/wiki/Cross-validation_(statistics)#k-fold_cross-validation)

    'normalize': true,                        // whether to use mean normalization during data pre-processing

    'reduce': true,                           // whether to use PCA to reduce dataset dimension during data pre-processing
                                              // (see http://en.wikipedia.org/wiki/Principal_component_analysis)
    'retained-variance': 0.99,                // Define the acceptable impact on data integrity (if PCA activated)

    'eps': 1e-3,                              // stopping criteria
    'cache-size': 200,                        // cache size in MB
    'shrinking' : true,                       // whether to use the shrinking heuristics
    'probability' : false,                    // whether to train a SVC or SVR model for probability estimates

    // cli
    'color': true,
    'interactive': true
};