import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { fadeInAnimation } from '../_animations/index';
import { ProductService, PubSubService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class ProductListComponent implements OnInit, OnDestroy {
    products: any[];
    subscription: Subscription;

    constructor(
        private productService: ProductService,
        private pubSubService: PubSubService) { }
    
    deleteProduct(id: number) {
        this.productService.delete(id);
        this.loadProducts();
    }

    ngOnInit() {
        this.loadProducts();

        // reload products when updated
        this.subscription = this.pubSubService.on('products-updated').subscribe(() => this.loadProducts());
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    private loadProducts() {
        this.products = this.productService.getAll();
    }
}