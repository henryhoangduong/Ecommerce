<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use EllipseSynergie\ApiResponse\Contracts\Response;
use Illuminate\Support\Facades\Auth;
use Ramsey\Uuid\Type\Decimal;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::take(40)->get();
        return Response(['data'=>$products],200);
    }
    public function pagination(Request $request){
        $page= $request->input('page');
        $products = Product::skip(($page-1)*10)->take(10)->get();
        return Response(['data'=>$products],200);
    }
    public function readbyid(Product $product){
        return Response(['data'=>$product],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    if (Auth::guard('api')->user()->role === 1) {
            $request->validate([
                'id'=>'required',
                'name' => 'required',
                'description' => 'required',
                'price' => 'required',
                'category_id' => 'required',
                'brand' => 'required',
                'image_url' => 'required',
            ]);
            Product::create($request->all());
            return Response(['message' => 'successful'], 200);
        }else{
            return Response(['message'=> 'You are not admin'],200);
        }
    }



    public function update(Request $request, Product $product)
    {
        $data = $request->all();
        $product->update($data);
        return Response(['message'=>$product],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Product $product)
    {
        if(Auth::user()->role === 1){
            //Product::delete($request->id);
            $product->delete();
            return Response(['message'=> 'delete successful'],200);
        }
    }
}
