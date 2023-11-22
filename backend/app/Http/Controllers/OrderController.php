<?php

namespace App\Http\Controllers;

use App\Http\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Carts;


class OrderController extends Controller
{
    public function index(Request $request){

        $user_id = Auth::guard('api')->user()->id;
        $cart =DB::table('Carts')
                ->select('Carts.id as cart_id','Products.id', 'Products.name', 'Products.image_url','Products.price')
                ->join('Products', 'Carts.product_id', '=', 'Products.id')
                ->join('Users', 'Carts.user_id', '=', 'Users.id')
                ->where('user_id', $user_id)->get();
    }
}
