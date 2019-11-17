import * as Router from "koa-router";

import ImitateController from "../controllers/imitate-controller";

class ImitateRouter {

    router: Router;

    constructor() {
        this.init();

        this.getRoutes();
    }

    private init(): void {
        this.router = new Router({
            prefix: '/imitate'
        });
    }

    private getRoutes(): void {
        this.router
            .get('/billgates', ImitateController.getBillGates)
            .get('/donaldtrump', ImitateController.getDonaldTrump)
            .get('/kanyewest', ImitateController.getKanyeWest)
            .get('/kimkardashian', ImitateController.getKimKardashian)
            .get('/ladygaga', ImitateController.getLadyGaga)
            .get('/terminator', ImitateController.getTerminator);
    }
}

export default new ImitateRouter().router;