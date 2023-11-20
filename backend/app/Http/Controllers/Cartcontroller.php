<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use Illuminate\Http\Request;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Symfony\Contracts\Service\Attribute\Required;

class Cartcontroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cart =DB::table('Carts')
                ->select('Carts.id as cart_id', 'Products.name', 'Users.name')
                ->join('Products', 'Carts.product_id', '=', 'Products.id')
                ->join('Users', 'Carts.user_id', '=', 'Users.id')
                ->where('Carts.id', 1)->first();
        return Response(['data' => $cart], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $user_id = Auth::guard('api')->user()->id;
        $input = $request->validate([
            'product_id' => 'required',

        ]);
        $cart=new Carts();
        $cart->product_id = $input['product_id'];
        $cart->quantities = 1;
        $cart->user_id = $user_id;
        $cart->save();
        return Response(['cart' => $cart], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function updateQuantities(Request $request,Carts $carts){
        $user_id = Auth::guard('api')->user()->id;
        $input = $request->validate([
            'quantities' => 'required'
        ]);
        $carts->update($request->all());
        return Response($carts);
    }
}
