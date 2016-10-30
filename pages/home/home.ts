import {Component} from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component ({
	templateUrl:'home.html'
})

export class Homepage
{

	constructor(public loadingCtrl: LoadingController) {}

	presentLoading()
	{
		let loading = this.loadingCtrl.create({
			content:"Por favor espere ...",
			duration: 3000,
			dismissOnPageChange: true
		});

		loading.present();
	}


}