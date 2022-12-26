import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {rootRuducers} from "./root-reducer"


const middlerWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlerWares));

export const store = createStore(rootRuducers, composedEnhancers)