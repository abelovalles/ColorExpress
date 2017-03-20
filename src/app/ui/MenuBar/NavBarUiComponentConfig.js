"use strict";
var SliderUiComponent_1 = require("../slider/SliderUiComponent");
/**
 * Created by AbelRicardo on 1/31/2017.
 */
exports.routerConfig = [
    {
        path: 'home',
        component: SliderUiComponent_1.AppSliderUiComponent
    },
    {
        path: 'about',
        component: SliderUiComponent_1.AppSliderUiComponent
    },
    {
        path: 'ourjobs',
        component: SliderUiComponent_1.AppSliderUiComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
