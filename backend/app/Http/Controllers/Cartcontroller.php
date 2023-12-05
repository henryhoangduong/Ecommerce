<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use App\Models\Product;
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
        $user_id=Auth::guard('api')->user()->id;
        $cart =DB::table('Carts')
                ->select('Carts.id as cart_id','Products.id', 'Products.name', 'Products.image_url','Products.price','Carts.quantities as quantities')
                ->join('Products', 'Carts.product_id', '=', 'Products.id')
                ->join('Users', 'Carts.user_id', '=', 'Users.id')
                ->where('user_id', $user_id)->get();
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
        $product = Product::find($request->product_id);
        $cart=new Carts();
        $cart->product_id = $input['product_id'];
        $cart->quantities = 1;
        $cart->user_id = $user_id;
        $cart->save();
        $response = [
            'cart_id' => $cart->id,
            'id' => $product->id,
            'image_url' => $product->image_url,
            'quantitis' => 1
        ];

        return Response($response, 200);
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
    public function handle_is_ordered(){
        
    }
}
